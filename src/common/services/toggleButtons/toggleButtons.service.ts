import { Injectable } from '@angular/core';
import { SpinnerService } from '../../ui';

export interface IToggleButtonsService {
    disableButtonsGlobal(): void;
    enableButtonsGlobal(): void;
    disableUntilResolved(inProm: Promise<any>): Promise<any>;
}

@Injectable()
export class ToggleButtonsService implements IToggleButtonsService {

    private static locked = false;

    constructor(
        private spinnerService: SpinnerService
    ) { }

    resetLock() {
        ToggleButtonsService.locked = false;
    }

    public disableButtonsGlobal() {
        if (!ToggleButtonsService.locked) {
            this.disableButtons();
        }
    }

    public enableButtonsGlobal() {
        if (!ToggleButtonsService.locked) {
            this.enableButtons();
        }
    };

    public async disableUntilResolved(inProm: Promise<any>): Promise<any> {
        ToggleButtonsService.locked = true;
        this.disableButtons();
        return inProm.finally(() => {
            ToggleButtonsService.locked = false;
            this.enableButtons();
        });
    };

    public async disableButtons() {
        this.spinnerService.startSpinner();
        document.querySelectorAll('button:not(#nav-expander):not(.exclude-global-disable)').forEach((element) => {
            (element as HTMLButtonElement).disabled = true;
        });
        Array.from(document.getElementsByClassName('disable-on-api-call')).forEach((element) => {
            element.classList.add('disabled');
        }
        );
    };

    public enableButtons() {
        this.spinnerService.stopSpinner();
        document.querySelectorAll('button:not(#nav-expander):not(.exclude-global-disable)').forEach((element) => {
            (element as HTMLButtonElement).disabled = false;
        });
        Array.from(document.getElementsByClassName('disable-on-api-call')).forEach((element) => {
            if (element instanceof HTMLButtonElement) {
                element.disabled = false;
            }
            element.classList.remove('disabled');
        });
    };
}
