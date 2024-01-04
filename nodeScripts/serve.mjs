import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
import path from 'node:path';
import * as os from 'node:os';
import axios from 'axios';
import readline from 'readline';

//NOTE: for this to work, you must have a self signed certificate configured with your machine name
//binded to port 443 AND add the certificate to the Root Certificate Authority in Chrome!

const env = process.argv[2].trim();
const subPath = process.argv[3].trim();
const fullHost = process.argv[4].trim()

function delay(delayInMilliseconds) {
    return new Promise(resolve => setTimeout(()=> resolve(), delayInMilliseconds));
}

async function runNgServe() {
    console.log('Waiting for ng serve to start-up...');    

    const cwd = path.join(process.cwd(), 'ng-app');    
    const child = spawn('ng.cmd', ['serve', 'ng-app', '-c', 'local', '--host', fullHost], { stdio:'inherit', cwd });

    while (true) {
        
        let status = null;
        try {
            const res = await axios.get(`http://${fullHost}:4200/Client_build/Web/${env === 'kiosk' ? 'kiosk.js' : 'main.js' }`);
            status = res.status;
        } catch(e) {
           //will throw if 'connection refused'; which means ng serve isn't ready yet.
           //so we catch and throw away here
        }
        
        await delay(5000);

        if (status === 200) {
            console.log('ng serve is ready.');            
            break;
        }
    }

    return child;
}

function runBrowser() {
    console.log('Opening browser...');
    return puppeteer.launch({ 
        headless: false, 
        defaultViewport: null,
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        ignoreHTTPSErrors: true,
        args: [
            '--ignore-certificate-errors',
            '--ignore-urlfetcher-cert-requests'
        ]
    });
}

async function main() { 
    let machineName;
    if (env === 'kiosk') {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const response = await new Promise(resolve => {
            rl.question(`Machine name - '${os.hostname()}' (Enter to accept, or type override name)`, resolve);
        });
         
        machineName = response?.trim()?.toLowerCase() || os.hostname();
        rl.close();
    }

    const ngServer = await runNgServe();
    const browser = await runBrowser();
    const pages = await browser.pages();
    const page = pages[0];

    if (env === 'kiosk') {
        await page.setUserAgent(`Mozilla/5.0 (Windows NT 10.0; Win64; x64; HCTRA.Storefront TNO ${machineName};) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36`);
    }

    try {        
        const tillPageCloses = new Promise(resolve => {
            page.on('close', e => resolve());
        });        
        const response = await page.goto(`https://${fullHost}/${subPath}`, { waitUntil: 'networkidle2', timeout: 0 });

        if (response.ok()) {
            await tillPageCloses;
        } else if (response.status() === 403) {
            console.log('An http response of forbidden was encountered. The likely reason is that SSL Required settings are enabled for the WebUi application in IIS');
            console.log('To disable, open IIS, select the WebUi application. Open the "SSL Settings" feature, and un-check "Require SSL".');
            console.log('Additionally, you need to have both 443 and 80 ports binded for WebUi in IIS.');
         } 

        
    } finally {
        ngServer.kill('SIGTERM');
        await browser.close();        
    }    
}

main().catch(error => console.log(error));
