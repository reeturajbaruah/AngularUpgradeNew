import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterService } from 'common/services';
import { wait } from 'common/utilities';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { ToasterComponent } from './toaster.component';


describe('component: toaster', () => {

    let fixture: ComponentFixture<ToasterComponent>;
    let component: ToasterComponent;

    let toasterService: ToasterService;

    beforeEach(async () => {

        toasterService = jasmine.createSpyObj('toasterService', ['remove']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ToasterComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: ToasterService, useFactory: () => toasterService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ToasterComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('removeToaster', () => {
        it('should hide the toaster', () => {
            component.removeToaster();

            expect(component.showToaster).toBeFalse();
        });

        it('should call the toaster removal after some milliseconds', async () => {
            component.toast = {
                description: 'hello world',
                type: 'Error'
            };

            component.removeToaster();

            expect(toasterService.remove).toHaveBeenCalledTimes(0);
            await wait(501);
            expect(toasterService.remove).toHaveBeenCalledWith({
                description: 'hello world',
                type: 'Error'
            });
        });
    });

});
