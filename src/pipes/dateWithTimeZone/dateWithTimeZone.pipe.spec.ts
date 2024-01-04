import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { DateWithTimeZonePipe } from './dateWithTimeZone.pipe';

@Component({
    template: '<div>{{ dateIn | dateWithTimeZone:"dateTimeFull" }}</div>'
})
class DateWithTimeZonePipeHostComponent {
    dateIn: Date;
}
describe('DateWithTimeZonePipe', () => {
    
    let pipe: DateWithTimeZonePipe;

    beforeEach((() => {
        pipe = new DateWithTimeZonePipe();
    }));

    it('canary', () => {
        expect(true).toBe(true);
    });
    
    it('should display date with offset when no format or timezone provided (default central) in test bed', () => {
        TestBed
            .configureTestingModule({
                declarations: [DateWithTimeZonePipe, DateWithTimeZonePipeHostComponent]
            })
            .compileComponents();

        const fixture = TestBed.createComponent(DateWithTimeZonePipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.dateIn = new Date('December 17, 1995 03:24:00');
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedDate = div.textContent.trim();

        expect(transformedDate).toBe('12/17/1995 03:24:00 AM CST');
    });

    it('should display date with offset when no format or timezone provided (default central)', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'));
        expect(transformedDate).toBe('1995-12-17T03:24:00-06:00');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'accountHeader');
        expect(transformedDate).toBe('December 17, 1995 CST');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'dateTimeFull');
        expect(transformedDate).toBe('12/17/1995 03:24:00 AM CST');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'dateTimeNoSeconds');
        expect(transformedDate).toBe('12/17/1995 03:24 AM CST');
    });

    it('should display "MMM DD, YYYY z" for format date1, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'date1');
        expect(transformedDate).toBe('Dec 17, 1995 CST');
    });

    it('should display "MM/DD/YYYY z" for format date2, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'date2');
        expect(transformedDate).toBe('12/17/1995 CST');
    });
    
    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'date3');
        expect(transformedDate).toBe('12/17/1995');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'date4');
        expect(transformedDate).toBe('Dec 17, 1995');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'time1');
        expect(transformedDate).toBe('03:24:00 AM CST');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central', () => {
        const transformedDate = pipe.transform(new Date('December 17, 1995 03:24:00'), 'dateTime3');
        expect(transformedDate).toBe('Dec 17, 1995 3:24:00 AM CST');
    });



    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'accountHeader');
        expect(transformedDate).toBe('June 17, 1995 CDT');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'dateTimeFull');
        expect(transformedDate).toBe('06/17/1995 03:24:00 AM CDT');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone central daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'dateTimeNoSeconds');
        expect(transformedDate).toBe('06/17/1995 03:24 AM CDT');
    });
    
    it('should display "MMM DD, YYYY z" for format date1, default timezone central daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'date1');
        expect(transformedDate).toBe('Jun 17, 1995 CDT');
    });

    it('should display "MM/DD/YYYY z" for format date2, default timezone central daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'date2');
        expect(transformedDate).toBe('06/17/1995 CDT');
    });


    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'date3');
        expect(transformedDate).toBe('06/17/1995');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'date4');
        expect(transformedDate).toBe('Jun 17, 1995');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'time1');
        expect(transformedDate).toBe('03:24:00 AM CDT');
    });

    it('should display "MM/DD/YY hh:mm:ss A z" for format dateTimeFull, default timezone daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'dateTime3');
        expect(transformedDate).toBe('Jun 17, 1995 3:24:00 AM CDT');
    });

    it('should display "MMM D, YYYY h:mm A z" for format dateTime4, default timezone daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00'), 'dateTime4');
        expect(transformedDate).toBe('Jun 17, 1995 3:24 AM CDT');
    });


    it('should display custom format, default timezone central daylight', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00-04:00'), 'MM-DD-YYYY hh:mm:ss Z');
        expect(transformedDate).toBe('06-17-1995 02:24:00 -05:00');
    });

    it('should display custom format and custom timezone', () => {
        const transformedDate = pipe.transform(new Date('June 17, 1995 03:24:00-06:00'), 'MM-DD-YYYY hh:mm:ss Z');
        expect(transformedDate).toBe('06-17-1995 04:24:00 -05:00');
    });

    it('should return null', () => {
        const transformedDate = pipe.transform(null);
        expect(transformedDate).toBe(null);
    });
});
