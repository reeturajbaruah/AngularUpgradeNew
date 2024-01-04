import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HardySHPComponent } from './hardySHP.component';
import { PipesModule } from 'pipes/module';
import { HardySHPFacadeService } from './services/facade/hardySHP-facade.service';

describe('HardySHPComponent', () => {
    let component: HardySHPComponent;
    let fixture: ComponentFixture<HardySHPComponent>;
    let hardySHPFacade: HardySHPFacadeService;
    
    beforeEach(async () => {
        hardySHPFacade = jasmine.createSpyObj('aetFacade', ['getData']);
        await TestBed
            .configureTestingModule({
                declarations: [
                    HardySHPComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: HardySHPFacadeService, useFactory: () => hardySHPFacade }

                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(HardySHPComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

});
