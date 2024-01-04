import { Injectable } from '@angular/core';

@Injectable()
export class ExpirationDateService {
    constructor() { }

    private getCurrentDate(): Date {
        return new Date();
    }

    private getCurrentYear(): number {
        return this.getCurrentDate().getFullYear();
    }

    public isMonthValid(expMonth: number, expYear: number): boolean {

        const date = this.getCurrentDate();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth() + 1;

        return Number.isInteger(expMonth) &&
            expMonth > 0 &&
            expMonth < 13 &&
            (+expYear !== currentYear || expMonth >= currentMonth);
    }

    public isYearValid(expYear: number): boolean {
        return expYear >= this.getCurrentYear();
    }

    public getExpirationYearList(selectedYear: number, yearsInFuture: number): number[] {
        const currentYear = this.getCurrentYear();

        const yearsAllowed = Array.apply(null, new Array(yearsInFuture + 1))
            .map((_, index) => currentYear + index);

        return [...(selectedYear && (selectedYear < currentYear) ? [selectedYear] : []), ...yearsAllowed];
    }

    public isDateValid(expMonth: number, expYear: number) {
        return this.isMonthValid(expMonth, expYear) && this.isYearValid(expYear);
    }
}
