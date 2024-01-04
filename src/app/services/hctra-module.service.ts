import { Inject, Injectable } from '@angular/core';
import { AddMissingInformationService } from '../../authentication/addMissingInformationService/addMissingInformation.service';
import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';
import { EventTrackingService, ResponseErrorService, SessionService, UrlManagerService } from '../../common/services';
import { StateRegistry } from '@uirouter/angular';
import { TransitionService } from '@uirouter/angular';
import { LinkLookupService } from '../../cms/services';

@Injectable()
export class HctraModuleService {

    angularjsCssLoaded = false;

    constructor(private authService: AuthenticationService,
        private sessionService: SessionService,
        private responseErrorService: ResponseErrorService,
        private addMissingInformationService: AddMissingInformationService,
        private eventTrackingService: EventTrackingService,
        private transitionService: TransitionService,
        private urlManagerService: UrlManagerService,
        private stateRegistry: StateRegistry,
        private linkLookupService: LinkLookupService
    ) {
    }

    async init() {
        this.sessionService.default();

        const data = {
            isCurrentBalanceStored: !!sessionStorage.getItem('currentBalance')

        };

       await this.authService.profile(data).then(
             (response =>  {
                if (response.errors.length === 0) {
                    const missingInformationFlags = this.addMissingInformationService.isMissingInfo(response.passwordNeedsReset, response.emailIsMissing, response.securityQuestionIsMissing);
                    this.addMissingInformationService.setMissingInformation(response.passwordNeedsReset, response.emailIsMissing, response.securityQuestionIsMissing);
                    this.sessionService.create(response.acctId, response.acctActivity, null, missingInformationFlags);
                } else {
                    this.responseErrorService.displayErrorsFromResponse(response);
                }
            })
        );

        this.eventTrackingService.initGlobalEventTracking();

        // Add a hook on start of a transition
        this.transitionService.onStart({}, (trans) => {
           
        });

        // Add a hook after a successful transition
        this.transitionService.onFinish({}, (trans) => {
            // You can perform actions here after the transition is complete
        });

        const authResolve = ['AuthResolver', '$transition$', (AuthResolver, $transition$) => 
            AuthResolver.resolve($transition$.$to().data.authorizedRoles)
        ];

        await this.urlManagerService
            .getStartingRoutes({})
            .then(response => {
                if (!response.errors && response.states.length !== 0) {

                    //Needs to refactor below code later
                    response.states.forEach(element => {
                        element.config.resolve.authResolve = authResolve;
                        element.config.settings = { ...(element.config.settings || {}), isHybrid: true };
                        const newState = { ...element.config, name: element.name, angularjs: true };
                        this.stateRegistry.register(newState);
                    });

                    this.linkLookupService.cmsPathDictionary = response.articleLookupByPath;
                    this.linkLookupService.cmsIdDictionary = response.articleLookupById;
                } else {
                    this.responseErrorService.displayErrorsFromResponse(response, true);
                }
            });
    }
}
