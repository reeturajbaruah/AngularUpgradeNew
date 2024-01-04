import { Ng2StateDeclaration, StateDeclaration } from '@uirouter/angular';
import { AbstractType, EventEmitter, InjectionToken, TemplateRef, Type } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SafeStyle } from '@angular/platform-browser';

import { ToastType } from './models';
import { MaintenanceFeature } from 'constants/module';

export interface Toast {
    type: ToastType;
    description: string;
}

export interface StaticWizardStates {
    readonly nextState?: string;
    readonly prevState?: string;
    readonly cancelState?: string;
    readonly isEndState?: boolean;
}

export type WizardStates<T> = {
    [Property in keyof StaticWizardStates]: StaticWizardStates[Property] | ((input: T) => StaticWizardStates[Property])
};

export const DefinedWizardStates = [
    'nextState', 'prevState', 'cancelState', 'isEndState'
];

/**
 * Extended definition for Ui-Router's state declaration to inlude
 * hctr.org config settings for different states
 */
export interface StateConfig extends Ng2StateDeclaration {
    title?: string;
    settings?: {
        parent?: string;
        navlevel?: number;
        nav?: number;
        content?: string;
        defaultOpenId?: string;
        currentBalance?: boolean;
        useName?: boolean;
        isHybrid?: boolean;
    };
    quickLink?: {
        nav?: string;
        content?: string;
        hideWhenAuthenticated?: boolean;
        useName?: boolean;
    };
    wizard?: WizardStates<any>;
}

export type StateConfigOrName = StateConfig | string;

export interface IWizardStateResolverService {

    getUiOrder(input?: any): 'normal' | 'reverse' | null;
    getNextStateTemplate(input?: any): string;

    nextState(event?: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName>;
    previousState(event?: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName>;
    cancelState(event?: EventEmitter<StateConfigOrName>, input?: any): Promise<StateConfigOrName>;
    abort?: (event?: EventEmitter<StateConfigOrName>) => Promise<StateConfigOrName>;

}

export interface BaseResponse {
    errors: ErrorMessage[];
    alerts: Alert[];
    exception: string;
    sessionTimedOut: boolean;
    accountStatus: string;
}

export interface ErrorMessage {
    key?: string;
    message: string;
}

export interface Alert {
    alertId: number;
    alertMsg: string;
    importance: number;
}

export interface CmsImage {
    image: string;
    alt: string;
    height: string;
    width: string;
}

export interface MatCarousel {
    // Animations.
    timings: string;
    autoplay: boolean;
    interval: number;
    // Navigation.
    loop: boolean;
    hideArrows: boolean;
    hideIndicators: boolean;
    // Appearance.
    color: ThemePalette;
    maxWidth: string;
    proportion: number;
    slides: number;
    svgIconOverrides: SvgIconOverrides;
    // Accessibility.
    useKeyboard: boolean;
    useMouseWheel: boolean;
    orientation: Orientation;
}

export type Orientation = 'ltr' | 'rtl';
export interface SvgIconOverrides {
    arrowBack: string;
    arrowForward: string;
}

export interface MatCarouselSlide {
    image: SafeStyle;
    disabled: boolean;
}

export interface PasswordValidationInfo {
    MinPassword: string;
    MaxPassword: string;
    PasswordDesc: string;
    InvalidCharacter: string;
}

export interface IErrorList {
    headers?: any;
    errors: ErrorMessage[];
}

export interface IBaseResponse extends IErrorList {
    alerts: Alert[];
    exception: string;
    sessionTimedOut: boolean;
    accountStatus: string;
}

export interface IFeatureState {
    feature: MaintenanceFeature;
    message: string;
    inMaintenance: boolean;
}

export interface IEventTrackingData {
    name: string;
    id: string;
    pathname: string;
}
