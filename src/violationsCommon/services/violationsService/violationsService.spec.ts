import { } from 'jasmine';
import { WebStorageConst, StateNames } from 'constants/module';

import { ViolationsService } from './violationsService';


describe('violationsDataService', () => {

    let service: ViolationsService;

    beforeEach(() => {
        
        service = new ViolationsService();
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('replaceNullsInViolationPlate', () => {

        it('should replace falsy uninvoicedViolations, invoices, previouslyPaidInvoices in passed plate with []', () => {
            //Act
            const result = service.replaceNullsInViolationPlate({ bla: 'whatever' } as any);

            //Assert
            expect(result).toEqual({
                uninvoicedViolations: [],
                invoices: [],
                previouslyPaidInvoices: [],
                bla: 'whatever'
            } as any);
        });

        it('should replace falsy plate.invoices.violations with []', () => {
            //Act
            const result = service.replaceNullsInViolationPlate({
                bla: 'whatever', invoices: [{}]
            } as any);

            //Assert
            expect(result).toEqual({
                uninvoicedViolations: [],
                invoices: [{ violations: [] }],
                previouslyPaidInvoices: [],
                bla: 'whatever'
            } as any);
        });

        it('should replace falsy plate.previouslyPaidInvoices.violations with []', () => {
            //Act
            const result = service.replaceNullsInViolationPlate({
                bla: 'whatever', previouslyPaidInvoices: [{}, {}]
            } as any);

            //Assert
            expect(result).toEqual({
                uninvoicedViolations: [],
                invoices: [],
                previouslyPaidInvoices: [{ violations: [] }, { violations: [] }],
                bla: 'whatever'
            } as any);
        });

        it('should return plate unchanged when no falsy values', () => {
            //Act
            const result = service.replaceNullsInViolationPlate({
                bla: 'whatever',
                uninvoicedViolations: [],
                previouslyPaidInvoices: [{ violations: [] }],
                invoices: [{ violations: [] }]
            } as any);

            //Assert
            expect(result).toEqual({
                bla: 'whatever',
                uninvoicedViolations: [],
                previouslyPaidInvoices: [{ violations: [] }],
                invoices: [{ violations: [] }]
            } as any);
        });
    });
});
