import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditCardDetailsComponent } from './creditcardDetails.component';
import { CardTypePipe } from 'pipes/cardType/cardType.pipe';
import { CreditCardTypeService } from 'common/billing';

describe('CreditCardDetailsComponent', () => {
  let component: CreditCardDetailsComponent;
  let fixture: ComponentFixture<CreditCardDetailsComponent>;
  let creditCardTypeService: jasmine.SpyObj<CreditCardTypeService>;

  beforeEach(async () => {
    creditCardTypeService = jasmine.createSpyObj('CreditCardTypeService', ['cardCodeToName']);

    await TestBed.configureTestingModule({
      declarations: [CreditCardDetailsComponent, CardTypePipe],
      providers: [
        { provide: CreditCardTypeService, useValue: creditCardTypeService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardDetailsComponent);
    component = fixture.componentInstance;
    component.creditCardDetails = { cardCode: 'V' } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('maskedCreditCardNumber', () => {
    beforeEach(() => {
      component.creditCardDetails = { cardCode: 'T' } as any;
      fixture.detectChanges();
    });

    it('should return undefined', () => {
      const maskedCreditCardNumber = component.maskedCreditCardNumber;
      expect(maskedCreditCardNumber).toBeUndefined();
    });
  });
});
