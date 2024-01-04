import { BaseResponse } from 'common/interfaces';
import { AccountService, ResponseErrorService, SecurityQuestionsResponse } from 'common/services';
import { OnlineAccessLoginInfo } from 'firstTimeLogin/interfaces';
import { } from 'jasmine';
import { FirstTimeLoginService } from './firstTimeLogin.service';
import { WebApiService } from './webApi.service';
import { TwoFAService } from '2FA/services/2FA.service';

describe('first time login service', () => {

    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let service: FirstTimeLoginService;
    let webApi: WebApiService;
    let accountService: AccountService;
    let twoFAService: TwoFAService;

    beforeEach(() => {
       
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['hasErrors', 'displayErrorsFromResponse']);
        webApi = jasmine.createSpyObj('webapi', ['setupAccount']);
        accountService = jasmine.createSpyObj('accountService', ['getSecurityQuestions']);
        twoFAService = jasmine.createSpyObj('twoFAService', ['sendVerificationCode', 'validateVerificationCode']);

        service = new FirstTimeLoginService(responseErrorService, webApi, accountService, twoFAService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(service).toBeDefined();
        });
    });

    describe('setupAccount', () => {

        it('calls normal', async () => {

            const request = { username: 'Sir Lancelot of Camelot' } as OnlineAccessLoginInfo;

            const response = {} as BaseResponse;

            (responseErrorService.hasErrors as jasmine.Spy).and.returnValue(false);
            (webApi.setupAccount as jasmine.Spy).and.resolveTo(response);

            const result = await service.setupAccount(request);

            expect(webApi.setupAccount).toHaveBeenCalledWith(request);
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
            expect(result).toBeTruthy();
        });

        it('handles webapi error', async () => {

            const request = { username: 'Sir Lancelot of Camelot' } as OnlineAccessLoginInfo;

            const response = {} as BaseResponse;

            (responseErrorService.hasErrors as jasmine.Spy).and.returnValue(true);
            (webApi.setupAccount as jasmine.Spy).and.resolveTo(response);

            const result = await service.setupAccount(request);

            expect(webApi.setupAccount).toHaveBeenCalledWith(request);
            expect(result).toBeFalsy();
        });

    });

    describe('getSecurityQuestions', () => {

        it('calls normal', async () => {

            const response = {
                securityQuestions: [
                    { securityQuestion: 'What is Your Name?', securityQuestionID: 1 },
                    { securityQuestion: 'What is Your Quest?', securityQuestionID: 2 },
                    { securityQuestion: 'What is Your Favorite Colour?', securityQuestionID: 3 }
                ]
            } as SecurityQuestionsResponse;

            (responseErrorService.hasErrors as jasmine.Spy).and.returnValue(false);
            (accountService.getSecurityQuestions as jasmine.Spy).and.resolveTo(response);

            const result = await service.getSecurityQuestions();

            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
            expect(result).toEqual(response.securityQuestions);


        });

        it('handles error', async () => {

            const response = { } as SecurityQuestionsResponse;

            (responseErrorService.hasErrors as jasmine.Spy).and.returnValue(true);
            (accountService.getSecurityQuestions as jasmine.Spy).and.resolveTo(response);

            const result = await service.getSecurityQuestions();

            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith(response);
            expect(result).toEqual([]);

        });

    });

    

});
