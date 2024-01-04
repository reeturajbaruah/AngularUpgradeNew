import { TestBed } from '@angular/core/testing';
import { EmailUsFormsService } from './forms.service';
import { AccordionService } from 'shared/ui/display/accordion/services/accordion.service';

describe('EmailUsFormsService', () => {
    let service: EmailUsFormsService;
    let accordionService: jasmine.SpyObj<AccordionService>;

    beforeEach(() => {
        accordionService = jasmine.createSpyObj('AccordionService', ['createAccordionItems']);

        TestBed.configureTestingModule({
            providers: [
                EmailUsFormsService,
                { provide: AccordionService, useValue: accordionService }
            ]
        });

        service = TestBed.inject(EmailUsFormsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getCmsData', () => {
        beforeEach(() => {
            accordionService.createAccordionItems.and.returnValue([]);
        });

        it('should return object', () => {
            const emailUsCms: any = {
                Children: [
                    {
                        ItemName: 'Forms',
                        Children: [
                            {
                                Title: '',
                                MailboxEmail: '',
                                ReplyEmail: '',
                                Children: [
                                    {
                                        ItemName: 'FAQs',
                                        Children: []
                                    },
                                    {
                                        ItemName: 'Fields',
                                        Children: [
                                            {
                                                Title: 'test test',
                                                Required: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
            const data = service.getCmsData(emailUsCms);

            expect(data).toEqual([
                {
                    Title: '', MailboxEmail: '', ReplyEmail: '', FAQs: [], Fields: [
                        { ItemName: 'testtest', Title: 'test test', Required: true }
                    ]
                }
            ] as any);
        });
    });
});
