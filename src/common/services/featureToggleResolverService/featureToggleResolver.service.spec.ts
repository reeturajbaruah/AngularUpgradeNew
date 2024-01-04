import { TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { GenericRepoService } from '../genericRepo/genericRepo.service';
import { ResponseErrorService } from '../responseErrorService/responseError.service';
import { FeatureToggleResolverService } from './featureToggleResolver.service';

describe('FeatureToggleResolverService', () => {

    let featureToggleResolverService: FeatureToggleResolverService;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let stateService: jasmine.SpyObj<StateService>;
    let genericRepo: any;

    beforeEach(() => {
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        genericRepo = {
            dataFactory: {
                getToggleStatus: jasmine.createSpy('getToggleStatus'),
            }
        };

        TestBed.configureTestingModule({
            providers: [
                FeatureToggleResolverService,
                {
                    provide: ResponseErrorService,
                    useFactory: () => responseErrorService
                },
                {
                    provide: StateService,
                    useFactory: () => stateService
                },
                {
                    provide: GenericRepoService,
                    useValue: genericRepo
                }
            ]
        });

        featureToggleResolverService = TestBed.inject(FeatureToggleResolverService);
    });

    it('should create service', () => {
        expect(FeatureToggleResolverService).toBeDefined();
    });

    it('should call responseErrorService.displayErrorsFromResponse', () => {
        genericRepo.dataFactory.getToggleStatus.and.returnValue(Promise.resolve({}));

        featureToggleResolverService.resolveFeatureToggle('test').then((response) => {
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
        });
    });
    
    it('should not call responseErrorService.displayErrorsFromResponse and not go to home state', () => {
        genericRepo.dataFactory.getToggleStatus.and.returnValue(Promise.resolve({ errors: [], toggleStatus: true }));

        featureToggleResolverService.resolveFeatureToggle('test').then((response) => {
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
            expect(stateService.go).not.toHaveBeenCalled();
        });
    });

    it('should not call responseErrorService.displayErrorsFromResponse and go to home state', () => {
        genericRepo.dataFactory.getToggleStatus.and.returnValue(Promise.resolve({ errors: [], toggleStatus: false }));

        featureToggleResolverService.resolveFeatureToggle('test').then((response) => {
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalled();
        });
    });

    it('should call responseErrorService.displayErrorsFromResponse', () => {
        genericRepo.dataFactory.getToggleStatus.and.returnValue(Promise.resolve({ errors: ['false'], toggleStatus: true }));

        featureToggleResolverService.resolveFeatureToggle('test').then((response) => {
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
        });
    });

    it('should call responseErrorService.displayErrorsFromResponse', () => {
        genericRepo.dataFactory.getToggleStatus.and.returnValue(Promise.resolve({}));

        featureToggleResolverService.isResolvedFeatureToggle('test').then((response) => {
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
            expect(response).toEqual(false);
        });
    });

    it('should return true', () => {
        genericRepo.dataFactory.getToggleStatus.and.returnValue(Promise.resolve({ errors: [], toggleStatus: true }));

        featureToggleResolverService.isResolvedFeatureToggle('test').then((response) => {
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
            expect(response).toEqual(true);
        });
    });

    it('should return false and not call response.displyErrorsFromResponse', () => {
        genericRepo.dataFactory.getToggleStatus.and.returnValue(Promise.resolve({ errors: [], toggleStatus: false }));

        featureToggleResolverService.isResolvedFeatureToggle('test').then((response) => {
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
            expect(response).toEqual(false);
        });
    });

    it('should return false and call response.displayErrorsFromResponse', () => {
        genericRepo.dataFactory.getToggleStatus.and.returnValue(Promise.resolve({ errors: ['test'], toggleStatus: true }));

        featureToggleResolverService.isResolvedFeatureToggle('test').then((response) => {
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
            expect(response).toEqual(false);
        });
    });
    
});



