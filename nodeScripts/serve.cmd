@echo off
setlocal enabledelayedexpansion
@REM Running these directly from npm/node always caused problems; so 
@REM we run them here and wash our hands of this evil.

@REM check if cmd prompt is running as admin (this is a subtle trick; net session requires admin, otherwise it fails)
net session 1>NUL 2>NUL || (Echo Requires admin rights to run & Exit /b 1)

@REM Build the .net webUi solution with the AngularDevelopment Configuration - Required to get proxy configured
echo Building .Net Solution...
"%ProgramFiles(x86)%\Microsoft Visual Studio\2019\Professional\MSBuild\Current\Bin\msbuild.exe" "%CD%\..\HCTRA.WebUi.sln" /property:Configuration=AngularDevelopment > nul 2>nul
IF %ERRORLEVEL% NEQ 0 ( echo Web build failed &Exit /b 1 )

@REM set device mode
if "%~1"=="" (
    :setdevicemode
    SET /p _devicemode=  mode: ^(local,kiosk^)
    
    IF NOT "!_devicemode!"=="local" IF NOT "!_devicemode!"=="kiosk" (
        goto setdevicemode
    )

) else (
   set _devicemode=%~1
)

@REM set url path
IF "!_devicemode!"=="local" (
    SET _servepath=Home
) ELSE (
    SET _servepath=Storefront
)

@REM set hostname
SET /p _servehost=host^: ^(Press Enter for localdev.hctra.pri^)
IF "!_servehost!"=="" (
    set _servehost=localdev.hctra.pri
)


IF not "%_servehost%"=="localhost" (
    @REM check that hostname is listed in DNS file
   
   type %WINDIR%\System32\Drivers\etc\hosts | findstr /c:"%_servehost%" > temp.var
   set /p _hostcheck=< temp.var

   @REM findstr's regex support suck. So I use inline nodejs to check DNS value with variable amount of white space
    node -e "t='%_servehost%'.replace(/\./g,'\\.');r=console.log((RegExp(`127\\.0\\.0\\.1\\s+${t}`).exec('!_hostcheck!')||[])[0])" > temp.var
    set /p _regextest=< temp.var

    IF "!_regextest!"=="undefined" (
        echo %_servehost% is not listed in DNS file. Please add:
        echo 127.0.0.1 %_servehost%
        echo into %WINDIR%\System32\Drivers\etc\hosts
        PAUSE
        Exit
    )

    @REM check HTTPS binding in IIS has hostname set
    %systemroot%\system32\inetsrv\appcmd list sites /state:Started /text:bindings | findstr /c:"https/*:443:%_servehost%" > temp.var
    set /p _iisbinding=< temp.var

    IF "!_iisbinding!"=="" (
        echo "%_servehost% is not set as host name in WebUi IIS site 443 binding. Please set hostname"
        PAUSE
        Exit
    )

    @REM check that a *.hctra.pri cert is set in IIS and installed in CA store
    netsh http show sslcert ipport=0.0.0.0:443 | findstr /r "^Certificate Hash" > temp.var
   
    for /F "tokens=2 delims=:" %%a in (temp.var) do set _certhash=%%a
    
    certutil -store ROOT!_certhash! | findstr /c:"Cert Hash(sha1):!_certhash!" > temp.var
    set /p _certfound=< temp.var
    
    IF "!_certfound!"=="" (
        echo "no cert matching *.hctra.pri was bound to %_servehost% in IIS. Update site bindings for port 443"
        echo "Ensure cert is installed in Root CA store, added to IIS, and bound to the site"
        PAUSE
        Exit
    )
) 

@REM Even with Preload enabled on IIS, no guarentee that the site will be ready. This will help force it to be ready.
echo Touching "https://%_servehost%/%_servepath%"...
curl "https://%_servehost%/%_servepath%"  > nul 2> nul

node "nodeScripts/serve.mjs" %_devicemode% %_servepath% %_servehost%