 import { } from 'jasmine';
 import { NO_ERRORS_SCHEMA, } from '@angular/core';
 import { TestBed, ComponentFixture } from '@angular/core/testing';
 import { PipesModule } from 'pipes/module';

 import { FrameComponent } from './frame.component';
 import { ToasterService } from 'common/services';
 import { WebApiMaintenanceToggles, MaintenanceToggle } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';

 describe('component: homePage-frame', () => {

     let fixture: ComponentFixture<FrameComponent>;
     let component: FrameComponent;
     let toasterService: ToasterService;
     let maintenanceToggles: WebApiMaintenanceToggles;
     let environmentConfig: any;

     beforeEach(async () => {

         toasterService = jasmine.createSpyObj('toasterService', ['removeAll', 'show']);
         maintenanceToggles = jasmine.createSpyObj('maintenanceToggles', ['GetViolationMaintenanceStatus']);

         await TestBed
             .configureTestingModule({
                 declarations: [
                     FrameComponent
                 ],
                 schemas: [NO_ERRORS_SCHEMA],
                 imports: [PipesModule],
                 providers: [
                     { provide: ToasterService, useFactory: () => toasterService },
                     { provide: WebApiMaintenanceToggles, useFactory: () => maintenanceToggles },
                     { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                 ]
             })
             .compileComponents();


         fixture = TestBed.createComponent(FrameComponent);
         component = fixture.debugElement.componentInstance;

         component.homePageContent = { Children: [] } as any;

         (maintenanceToggles.GetViolationMaintenanceStatus as jasmine.Spy).and.returnValue({
             toggleName: 'toggle',
             toggleStatus: true
         });
     });

     describe('canary', () => {
         it('should pass', async () => {

             expect(true).toBe(true);
         });
     });

     describe('ngOnInit', () => {
         it('should return to not show toasterDisplay', async () => {
            
             (maintenanceToggles.GetViolationMaintenanceStatus as jasmine.Spy).and.returnValue({
                 toggleName: 'toggle',
                 toggleStatus: true
             });

             await component.ngOnInit();
             expect(component.showDynamicDisplay).toEqual(false);
         });

         it('should return to show toasterDisplay', async () => {
           
             (maintenanceToggles.GetViolationMaintenanceStatus as jasmine.Spy).and.returnValue({
                 toggleName: 'toggle',
                 toggleStatus: false
             });

             await component.ngOnInit();
             expect(component.showDynamicDisplay).toEqual(true);
         });
     });

     describe('ngAfterViewInit', () => {
         it('should invoke 0 toaster', async () => {

             component.homePageContent = {
                 Children: [
                     {
                         DisplayName: 'Home Toasters',
                         Children: [

                         ]
                     }
                 ]
             } as any;

             component.ngAfterViewInit();
             expect(toasterService.show).toHaveBeenCalledTimes(0);
         });

         it('should invoke 2 toasters', async () => {

             component.homePageContent = {
                 Children: [
                     {
                         DisplayName: 'Home Toasters',
                         Children: [
                             {
                                 Type: 'Error',
                                 Description: 'something'
                             },
                             {
                                 Type: 'Success',
                                 Description: 'something2'
                             }
                         ]
                     }
                 ]
             } as any;

             component.ngAfterViewInit();
             expect(toasterService.show).toHaveBeenCalledTimes(2);
         });
     });
 });
