import { Inject, Injectable } from '@angular/core';
import { WindowRef } from 'common/providers';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';

@Injectable()
export class CaptchaService {

    private readonly platform = 'web';
    private grecaptcha: any;

    constructor(
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        @Inject(WindowRef) private windowRef: Window,
        private storefrontUtilityService: StorefrontUtilityService
    ) {        
        if ('grecaptcha' in windowRef) {
            this.grecaptcha = windowRef['grecaptcha'];
        }
    }

    async recaptchaReady(): Promise<void> {
        const isRecaptchaReady = 
            'hctra_recaptcha_ready' in this.windowRef 
                ? !!this.windowRef['hctra_recaptcha_ready'] 
                : false;

        if (!isRecaptchaReady){           
            await new Promise<void>(resolve => {
                const onReady = () => {
                    this.windowRef.document.removeEventListener('hctra_recaptcha_ready_event', onReady);
                    resolve();
                };
                this.windowRef.document.addEventListener('hctra_recaptcha_ready_event', onReady);
            });            
        }
    }

    async tagChallengeBox() {
       
        const intervalId = this.windowRef.setInterval(()=>{

            if (this.windowRef.document.querySelector('.g-recaptcha-float-challenge')) {
                this.windowRef.clearInterval(intervalId);
                
                return;
            }

            const challengeIframe = this.windowRef.document.querySelector('iframe[title~="recaptcha"][title~="challenge"]');
            if (challengeIframe) {
                challengeIframe.parentElement.classList.add('g-recaptcha-float-challenge-border');
                challengeIframe.parentElement.parentElement.classList.add('g-recaptcha-float-challenge');
                this.windowRef.clearInterval(intervalId);
                
            }

        }, 200);
        
    }

    challengeBoxClosedCheck() {

        return this.windowRef.setInterval(()=>{

            const floatElm = this.windowRef.document.querySelector('.g-recaptcha-float-challenge') as HTMLElement;
            if (!floatElm) {
                return;
            }
               
            const notOpen =
                floatElm.style.visibility !== 'visible' && 
                floatElm.style.opacity !== '1';

            if (notOpen) {
                floatElm.style.visibility = 'visible';
                floatElm.style.opacity = '1';
            }

        }, 200);
    }

    cleanup(closeCheckInterval) {
        try {
            this.windowRef.clearInterval(closeCheckInterval);
            const floatElm = this.windowRef.document.querySelector('.g-recaptcha-float-challenge');
            floatElm.remove();
            const parent = this.windowRef.document.querySelector('#hctra-recaptcha');
            parent.innerHTML = '';
    
            this.grecaptcha.enterprise.reset();
        } catch(e) {

        }
    }

    getNextContainer() {
        const parent = this.windowRef.document.querySelector('#hctra-recaptcha');
        const newDiv = this.windowRef.document.createElement('div');
        parent.appendChild(newDiv);

        return newDiv;
    }

//iframe[title~="recaptcha"][title~="challenge"]

    public async assess(action: string): Promise<{configured: boolean; token?: string; abort?: boolean}> {

        await this.recaptchaReady();
        
        action = (action || '').toLowerCase();

        const actionConfig = this.environmentConfig.reCaptchaConfig.computedActions
                                .filter(x=> RegExp(x.pattern,'i').test(action))[0];

        const skipKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.environmentConfig.reCaptchaConfig.kioskEnabled;

        if (!actionConfig || skipKiosk) {
            return { configured: false };
        }

        if (!(this.platform in actionConfig.siteKeys)) {
            return { configured: true, abort : true };
        }

        const sitekey = actionConfig.siteKeys[this.platform];

        if (sitekey === null) {
            return { configured: false };
        }        
        
        const {token, abort} = await new Promise<{token?: string; abort: boolean}>(resolve => {

            const container = this.getNextContainer();
            const widget = this.grecaptcha.enterprise.render(container, {
                sitekey,
                size: 'invisible',
                action : actionConfig.actionOverride || action,
                callback: (recaptchaToken: string) => {
                    resolve({ token: recaptchaToken, abort: false});
                    this.cleanup(closeCheckInterval);
                },
                'expired-callback' : () => {
                    resolve({ abort: true});
                    this.cleanup(closeCheckInterval);
                },
                'error-callback' : () => {
                    resolve({ abort: true});
                    this.cleanup(closeCheckInterval);
                }
            });
            this.grecaptcha.enterprise
                .execute(widget).catch(()=>{});
            this.tagChallengeBox();
            const closeCheckInterval = this.challengeBoxClosedCheck();

        });

        return { configured: true, token, abort };
    }
}
