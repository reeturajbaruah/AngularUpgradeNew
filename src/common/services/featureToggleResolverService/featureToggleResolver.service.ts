import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService } from '../responseErrorService/responseError.service';
import { StateService } from '@uirouter/angular';
import { stateNames as HomeStates } from 'home/constants';
import { GenericRepoService } from '../genericRepo/genericRepo.service';

export interface IFeatureToggleResolver {
    resolveFeatureToggle(toggle: string): angular.IPromise<any>;
    isResolvedFeatureToggle(toggle: string): angular.IPromise<boolean>;
}

@Injectable()
export class FeatureToggleResolverService {

    constructor(
        private responseErrorService: ResponseErrorService,
        private stateService: StateService,
        private genericRepoService: GenericRepoService
    ) { }

    public resolveFeatureToggle(toggle: string) {
        return this.genericRepoService.dataFactory.getToggleStatus({ ToggleName: toggle }).then(response =>
        {
            if (response.errors && response.errors.length === 0) {
                if (!response.toggleStatus) {
                    return this.stateService.go(HomeStates.Frame).then(() => Promise.reject());
                }
            } else {
                this.responseErrorService.displayErrorsFromResponse(response);
                return Promise.reject();
            }

        });
    }

    public isResolvedFeatureToggle(toggle: string) {
        return this.genericRepoService.dataFactory.getToggleStatus({ ToggleName: toggle }).then(response => {
            if (response.errors && response.errors.length === 0) {
                return response.toggleStatus;
            } else {
                this.responseErrorService.displayErrorsFromResponse(response);
                return false;
            }
        });
    };
}
