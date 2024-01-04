import { DialogService, ResponseErrorService } from 'common/services';
import { GenericCmsModalComponent } from 'common/ui';
import { environment } from 'environments/environment';
import { } from 'jasmine';
import { cmsIds } from 'login/constants';
import { AddMissingInformationService } from './addMissingInformation.service';
import { StringUtilsService } from 'common/services/stringUtils/stringUtils.service';


describe('addMissingInformationService', () => {

    let service: AddMissingInformationService;
    let environmentConfig: {
        missingEmailBypass: boolean;
    };
    let genericRepo: any;
    let responseErrorService: ResponseErrorService;
    let stringUtils: jasmine.SpyObj<StringUtilsService>;
    let dialogService: DialogService;

    beforeEach(() => {
        environmentConfig = { missingEmailBypass: false };
        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
        stringUtils = jasmine.createSpyObj('StringUtilsService', ['getParameterObject']);
        stringUtils.getParameterObject.and.returnValue({ CloseButtonText: 'fake 123' });
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);

        service = new AddMissingInformationService(environmentConfig, genericRepo, responseErrorService, stringUtils, dialogService);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('setMissingInformation', () => {

        let newEmailRequiredSpy;

        beforeEach(() => {

            newEmailRequiredSpy = spyOn(service as any, 'newEmailRequired');
        });

        it('should set missingInfo flags', () => {

            newEmailRequiredSpy.and.returnValue('fake is new email required');

            service.setMissingInformation(
                'fake passwordNeedsReset' as any,
                'fake emailIsMissing' as any,
                'fake securityQuestionIsMissing' as any);

            expect(service['missingInfo']).toEqual({
                passwordNeedsReset: 'fake passwordNeedsReset',
                emailIsMissing: 'fake is new email required',
                securityQuestionIsMissing: 'fake securityQuestionIsMissing',
                profileCallHasOccured: false
            } as any);
        });

        it('should call service.newEmailRequired with passwordNeedsReset, emailIsMissingn and securityQuestionIsMissing', () => {

            service
                .setMissingInformation(
                    'fake passwordNeedsReset' as any,
                    'fake emailIsMissing' as any,
                    'fake securityQuestionIsMissing' as any);

            expect(service['newEmailRequired']).toHaveBeenCalledTimes(1);
            expect(service['newEmailRequired'])
                .toHaveBeenCalledWith(
                    'fake passwordNeedsReset' as any,
                    'fake emailIsMissing' as any,
                    'fake securityQuestionIsMissing' as any);
        });
    });

    describe('missingInformationIsAnIssue', () => {
        [
            { passwordNeedsReset: false, emailIsMissing: false, securityQuestionIsMissing: false, expected: false },
            { passwordNeedsReset: false, emailIsMissing: false, securityQuestionIsMissing: true, expected: true },
            { passwordNeedsReset: false, emailIsMissing: true, securityQuestionIsMissing: false, expected: true },
            { passwordNeedsReset: false, emailIsMissing: true, securityQuestionIsMissing: true, expected: true },
            { passwordNeedsReset: true, emailIsMissing: false, securityQuestionIsMissing: false, expected: true },
            { passwordNeedsReset: true, emailIsMissing: false, securityQuestionIsMissing: true, expected: true },
            { passwordNeedsReset: true, emailIsMissing: true, securityQuestionIsMissing: false, expected: true },
            { passwordNeedsReset: true, emailIsMissing: true, securityQuestionIsMissing: true, expected: true },

        ].forEach(({ passwordNeedsReset, emailIsMissing, securityQuestionIsMissing, expected }) => {

            it('should return true when passwordNeedsReset or emailIsMissing or securityQuestionIsMissing', () => {

                service['missingInfo'] = {
                    ...service['missingInfo'],
                    passwordNeedsReset,
                    emailIsMissing,
                    securityQuestionIsMissing
                };
                expect(service.missingInformationIsAnIssue()).toBe(expected);
            });
        });
    });

    describe('returnMissingInformation', () => {

        it('should return service.missingInformation', () => {

            service['missingInfo'] = {
                profileCallHasOccured: 'fake profileCallHasOccured',
                passwordNeedsReset: 'fake passwordNeedsReset',
                emailIsMissing: 'fake emailIsMissing',
                securityQuestionIsMissing: 'fake securityQuestionIsMissing'
            } as any;

            expect(service.returnMissingInformation()).toEqual({
                profileCallHasOccured: 'fake profileCallHasOccured',
                passwordNeedsReset: 'fake passwordNeedsReset',
                emailIsMissing: 'fake emailIsMissing',
                securityQuestionIsMissing: 'fake securityQuestionIsMissing'
            } as any);
        });
    });

    describe('destroyMissingInformationFlags', () => {

        it('should set passwordNeedsReset, emailIsMissingn and securityQuestionIsMissing to false', () => {

            service['missingInfo'] = {
                profileCallHasOccured: 'fake profileCallHasOccured',
                passwordNeedsReset: 'fake passwordNeedsReset',
                emailIsMissing: 'fake emailIsMissing',
                securityQuestionIsMissing: 'fake securityQuestionIsMissing'
            } as any;

            service.destroyMissingInformationFlags();

            expect(service['missingInfo']).toEqual({
                profileCallHasOccured: 'fake profileCallHasOccured',
                passwordNeedsReset: false,
                emailIsMissing: false,
                securityQuestionIsMissing: false
            } as any);
        });
    });

    describe('setProfileCallHasOccured', () => {

        it('should set service.missingInfo.profileCallHasOccured to value passed', () => {

            service.setProfileCallHasOccured('some fake value' as any);

            expect(service['missingInfo'].profileCallHasOccured).toBe('some fake value' as any);
        });
    });

    describe('returnProfileCallHasOccured', () => {

        it('should return service.missingInfo.profileCallHasOccured', () => {

            service['missingInfo'].profileCallHasOccured = 'some fake value returned' as any;

            expect(service.returnProfileCallHasOccured()).toBe('some fake value returned' as any);
        });
    });

    describe('isMissingInfo', () => {

        let newEmailRequiredSpy;

        beforeEach(() => {

            newEmailRequiredSpy = spyOn(service as any, 'newEmailRequired');
        });

        [
            { passwordNeedsReset: false, newEmailRequired: false, securityQuestionIsMissing: false, expected: false },
            { passwordNeedsReset: false, newEmailRequired: false, securityQuestionIsMissing: true, expected: true },
            { passwordNeedsReset: false, newEmailRequired: true, securityQuestionIsMissing: false, expected: true },
            { passwordNeedsReset: false, newEmailRequired: true, securityQuestionIsMissing: true, expected: true },
            { passwordNeedsReset: true, newEmailRequired: false, securityQuestionIsMissing: false, expected: true },
            { passwordNeedsReset: true, newEmailRequired: false, securityQuestionIsMissing: true, expected: true },
            { passwordNeedsReset: true, newEmailRequired: true, securityQuestionIsMissing: false, expected: true },
            { passwordNeedsReset: true, newEmailRequired: true, securityQuestionIsMissing: true, expected: true },

        ].forEach(({ passwordNeedsReset, newEmailRequired, securityQuestionIsMissing, expected }) => {

            it('should return true when passwordNeedsReset or securityQuestionIsMissing or service.newEmailRequired returns true', () => {

                newEmailRequiredSpy.and.returnValue(newEmailRequired);

                service['missingInfo'] = {
                    ...service['missingInfo'],
                    passwordNeedsReset,
                    emailIsMissing: 'fake email is missing' as any,
                    securityQuestionIsMissing
                };

                expect(service.isMissingInfo(passwordNeedsReset, newEmailRequired, securityQuestionIsMissing)).toBe(expected);
            });
        });

        it('should call service.newEmailRequired with passwordNeedsReset, emailIsMissingn and securityQuestionIsMissing', () => {

            service.isMissingInfo(false, 'fake emailIsMissing' as any, 'fake securityQuestionIsMissing' as any);

            expect(service['newEmailRequired']).toHaveBeenCalledTimes(1);
            expect(service['newEmailRequired'])
                .toHaveBeenCalledWith(false, 'fake emailIsMissing' as any, 'fake securityQuestionIsMissing' as any);
        });
    });

    describe('newEmailRequired', () => {

        it('should return false when missingEmailBypass true and both password and security question present', () => {

            environmentConfig.missingEmailBypass = true;

            expect(service['newEmailRequired'](false, 'some fake value' as any, false)).toBe(false);
        });

        [
            { missingEmailBypass: true, passwordMissing: false, securityQuestionMissing: true },
            { missingEmailBypass: true, passwordMissing: true, securityQuestionMissing: false },
            { missingEmailBypass: true, passwordMissing: true, securityQuestionMissing: true },
            { missingEmailBypass: false, passwordMissing: false, securityQuestionMissing: false },
            { missingEmailBypass: false, passwordMissing: false, securityQuestionMissing: true },
            { missingEmailBypass: false, passwordMissing: true, securityQuestionMissing: false },
            { missingEmailBypass: false, passwordMissing: true, securityQuestionMissing: true },
        ].forEach(({ missingEmailBypass, passwordMissing, securityQuestionMissing }) => {

            it('should return emailMissing when missingEmailBypass false or passwordMissing or securityQuestionMissing', () => {

                environmentConfig.missingEmailBypass = missingEmailBypass;

                expect(service['newEmailRequired'](passwordMissing, 'some fake value' as any, securityQuestionMissing))
                    .toBe('some fake value' as any);
            });
        });
    });

    describe('showBlockUserNavModal', () => {

        it('should call api.getCmsPageById', async () => {
            //Assemble
            genericRepo.dataFactory.getCmsPageById.and.resolveTo({
                cmsResponse: JSON.stringify({
                    Title: 'fakeTitle',
                    ShortDescription: 'fake short desc',
                    Paramaters: 'fakeParams'
                })
            });

            //Act
            await service.showBlockUserNavModal();

            //Assemble
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledOnceWith(
                { ItemId: cmsIds.BlockUserNavigationModal, Fields: 'Title,ShortDescription,Parameters' });
        });

        it('should call dialogService.openGenericModal if cmsPageByID is errorfree', async () => {
            //Assemble
            genericRepo.dataFactory.getCmsPageById.and.resolveTo({
                cmsResponse: JSON.stringify({
                    Title: 'fakeTitle',
                    ShortDescription: 'fake short desc',
                    Paramaters: 'fakeParams'
                })
            });

            //Act
            await service.showBlockUserNavModal();

            //Assemble
            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(
                GenericCmsModalComponent,

                //Injected Data
                {
                    cmsContent: {
                        Title: 'fakeTitle',
                        PrimaryContent: 'fake short desc',
                        AcceptBtn: 'fake 123'
                    }
                });
        });

        it('should not call dialogService.openGenericModal if cmsPageByID returns with errors', async () => {
            //Assemble
            genericRepo.dataFactory.getCmsPageById.and.resolveTo({
                cmsResponse: JSON.stringify({
                    Title: 'fakeTitle',
                    ShortDescription: 'fake short desc',
                    Paramaters: 'fakeParams'
                })
            });
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            //Act
            await service.showBlockUserNavModal();

            //Assemble
            expect(dialogService.openGenericModal).not.toHaveBeenCalled();
        });
    });
});
