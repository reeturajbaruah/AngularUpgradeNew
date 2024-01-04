import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchesComponent } from './matches.component';
import { Subject } from 'rxjs';
import { FormControl, FormsModule } from '@angular/forms';

describe('MatchesComponent', () => {
    let component: MatchesComponent<any>;
    let fixture: ComponentFixture<MatchesComponent<any>>;
    const valueSub = new Subject<any>();
    const compareToSub = new Subject<any>();

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [MatchesComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchesComponent);
        component = fixture.componentInstance;
        component.value$ = valueSub.asObservable();
        component.compareTo$ = compareToSub.asObservable();
        component.validation = new FormControl('', []);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngAfterViewInit', () => {
        it('itMatches$ should be defined', () => {
            spyOn(component['statusSubject$'], 'next');

            component.ngAfterViewInit();
            component.validation.setValue('test');

            expect(component.itMatches$).toBeDefined();
            expect(component['statusSubject$'].next).toHaveBeenCalled();
        });
    });

    describe('status', () => {
        it('should return status', () => {
            const status = component.status;

            expect(status).toBeDefined();
        });
    });

    describe('statusChanges', () => {
        it('should return statusChanges', () => {
            const statusChanges = component.statusChanges;

            expect(statusChanges).toBeDefined();
        });
    });
});
