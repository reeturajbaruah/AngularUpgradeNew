import { InjectionToken } from '@angular/core';

export const WindowRef = new InjectionToken<Window>('window');
export const ClientCache = new InjectionToken('ClientCache');
export const BuildIdRef = new InjectionToken('BuildId');
export const WizardStateResolver = new InjectionToken('WizardStateResolver');
