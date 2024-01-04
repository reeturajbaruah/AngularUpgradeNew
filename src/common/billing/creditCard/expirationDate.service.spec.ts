import { ExpirationDateService } from './expirationDate.service';

describe('ExpirationDateService', () => {

    let service: ExpirationDateService;
    let getCurrentDateSpy;
    let getCurrentYearSpy;

    beforeEach(() => {
        service = new ExpirationDateService();
        getCurrentDateSpy = spyOn(service as any, 'getCurrentDate');
        getCurrentYearSpy = spyOn(service as any, 'getCurrentYear').and.callThrough();
    });

    describe('canary', () => {

        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    describe('getCurrentYear', () => {

        [
            [new Date('December 17, 1995 03:24:00'), 1995],
            [new Date('December 17, 2005 03:24:00'), 2005],
            [new Date('December 17, 2015 03:24:00'), 2015],
            [new Date('December 17, 2018 03:24:00'), 2018]
        ].forEach((datePair: [Date, number]) => {
            const date = datePair[0];
            const expectedYear = datePair[1];

            it('should return the current year', () => {
                getCurrentDateSpy.and.returnValue(date);

                expect(service['getCurrentYear']()).toBe(expectedYear);
            });
        });


    });

    describe('isMonthValid', () => {

        beforeEach(() => {

            getCurrentDateSpy.and.returnValue(new Date('December 17, 2015 03:24:00'));
        });

        [
            [12, 2015],
            [1, 2018],
            [3, 2016],
            [4, 2017],
            [5, 2017]
        ].forEach((datePair) => {
            const month = datePair[0];
            const year = datePair[1];

            it('should return true for valid month and year combinations', () => {
                expect(service.isMonthValid(month, year)).toBe(true);
            });
        });

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((month) => {
            [2010, 2011, 2012, 2013, 2014].forEach((year) => {
                it('should return true for invalid year irrespective of the month', () => {
                    expect(service.isMonthValid(month, year)).toBe(true);
                });
            });
        });

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach((month) => {
            it('should return false for invalid month and current year combinations', () => {
                expect(service.isMonthValid(month, 2015)).toBe(false);
            });
        });


        [null, 0, 13, undefined].forEach((month) => {
            it('should return false for invalid months', () => {
                expect(service.isMonthValid(month, 2015)).toBe(false);
            });
        });
    });

    describe('isYearValid', () => {

        beforeEach(() => {
            
            getCurrentYearSpy.and.returnValue(2010);
        });

        [2010, 2011, 2012, 2013, 2014].forEach((year) => {
            it('should return true for valid years', () => {
                expect(service.isYearValid(year)).toBe(true);
            });
        });

        [2005, 2006, 2007, 2008, 2009].forEach((year) => {
            it('should return false for invalid years', () => {
                expect(service.isYearValid(year)).toBe(false);
            });
        });
    });

    describe('getExpirationYearList', () => {

        beforeEach(() => {            

            getCurrentYearSpy.and.returnValue(2011);
        });

        it('should return yearlist with correct number of years in future when selected year not less than current year', () => {
            expect(service.getExpirationYearList(2013, 5)).toEqual([2011, 2012, 2013, 2014, 2015, 2016]);
        });

        it('should return yearlist with selectedYear when selectedYear less than currentYear', () => {
            expect(service.getExpirationYearList(2009, 4)).toEqual([2009, 2011, 2012, 2013, 2014, 2015]);
        });
    });

    describe('isDateValid', () => {

        beforeEach(() => {            

            getCurrentDateSpy.and.returnValue(new Date('December 17, 2015 03:24:00'));
        });

        [
            [12, 2015],
            [1, 2018],
            [3, 2016],
            [4, 2017],
            [5, 2017]
        ].forEach((datePair) => {
            const month = datePair[0];
            const year = datePair[1];

            it('should return true for valid month and year combinations', () => {
                expect(service.isDateValid(month, year)).toBe(true);
            });
        });

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((month) => {
            [2010, 2011, 2012, 2013, 2014].forEach((year) => {
                it('should return false for invalid year irrespective of the month', () => {
                    expect(service.isDateValid(month, year)).toBe(false);
                });
            });
        });

        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach((month) => {
            it('should return false for invalid month and current year combinations', () => {
                expect(service.isDateValid(month, 2015)).toBe(false);
            });
        });
    });
});   
