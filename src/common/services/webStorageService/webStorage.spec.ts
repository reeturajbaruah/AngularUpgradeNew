import { TestBed } from '@angular/core/testing';
import { WebStorageService } from './webStorage.service';
import { WebStorageConst } from '../../../constants/webstorage.constants';
import { Location } from '@angular/common';

describe('WebStorageService', () => {

    let webStorageService: WebStorageService;
    let webStorageConst: WebStorageConst;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WebStorageService, WebStorageConst, Location]
        });

        webStorageService = TestBed.inject(WebStorageService);
        webStorageConst = TestBed.inject(WebStorageConst);
    });

    it('should define WebStorageService', () => {
        expect(WebStorageService).toBeDefined();
    });


    it('should set value with key and return value from key', () => {
        const value = {
            test: 'test'
        };
        webStorageService.setKeyValue('valuekey', value);
        expect(webStorageService.getValue('valuekey')).toEqual(value);
    });

    it('should return null', () => {
        webStorageService.removeEntry('valuekey');
        expect(webStorageService.getValue('valuekey')).toEqual(null);
    });

    it('should add email to validation data null', () => {
        const value = {
            test: 'test'
        };
        webStorageService.setKeyValue(webStorageConst.violationsLogData, value);
        webStorageService.addEmailAddressToViolationsData('test@gmail.com');
        const returnValue = webStorageService.getValue(webStorageConst.violationsLogData);
        expect(returnValue.violationsEmail).toEqual('test@gmail.com');
    });

    it('should return true', () => {
        const value = {
            test: 'test'
        };
        webStorageService.setKeyValue('newkey', value);
        const returnValue = webStorageService.validateOnValue('newkey', 'test');
        expect(returnValue).toEqual(true);
    });

    it('should set path to inRoute', () => {
        webStorageService.validateOnValue('keythatdoesnotexist', 'test');
        expect(window.location.pathname).toEqual('/test');
    });
});



