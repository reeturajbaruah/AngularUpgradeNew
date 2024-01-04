import { TestBed } from '@angular/core/testing';
import { GlobalVariableService } from './globalVariable.service';

describe('GlobalVariableService', () => {

    let globalVariableService: GlobalVariableService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                GlobalVariableService
            ]
        });

        globalVariableService = TestBed.inject(GlobalVariableService);
    });

    it('should be defined', () => {
        expect(GlobalVariableService).toBeDefined();
    });

    it('should be defined', () => {
        globalVariableService.currentBalance.next(2000);
        globalVariableService.currentBalance.subscribe((data) => expect(data).toEqual(2000));
        globalVariableService.latestWebUiVersion.next('1.0.0');
        globalVariableService.latestWebUiVersion.subscribe((data) => expect(data).toEqual('1.0.0'));
    });
});
