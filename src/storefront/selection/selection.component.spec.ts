import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { } from 'jasmine';
import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';
import { CmsUtilService } from '../../cms/services';
import { StorefrontModalService } from '../services/modal.service';
import { StorefrontService } from '../services/storefront.service';
import { SelectionComponent } from './selection.component';


describe('component: KSelectionComponent - storefront', () => {

    let fixture: ComponentFixture<SelectionComponent>;
    let component: SelectionComponent;
    let storefrontService: jasmine.SpyObj<StorefrontService>;
    let stateService: jasmine.SpyObj<StateService>;
    let modalService: jasmine.SpyObj<StorefrontModalService>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;

    beforeEach(async () => {

        storefrontService = jasmine.createSpyObj('StorefrontService', ['getCmsItem', 'remove', 'add', 'tasks']);
        stateService = jasmine.createSpyObj('StateService', ['go']);
        modalService = jasmine.createSpyObj('StorefrontModalService', ['iDontSeeWhatINeedMessage']);
        cmsUtilService = jasmine.createSpyObj('AuthenticationService', ['isAuthenticated']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    SelectionComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule
                ],
                providers: [
                    { provide: StorefrontService, useFactory: () => storefrontService },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: StorefrontModalService, useFactory: () => modalService },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: AuthenticationService, useFactory: () => authenticationService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(SelectionComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });
});
