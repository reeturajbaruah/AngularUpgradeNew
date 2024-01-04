import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { AlertBoxComponent } from './alert-box.component';

describe('AlertBoxComponent', () => {
	let component: AlertBoxComponent;
	let fixture: ComponentFixture<AlertBoxComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            declarations: [ AlertBoxComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
			imports: [ PipesModule ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AlertBoxComponent);
        component = fixture.debugElement.componentInstance;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
