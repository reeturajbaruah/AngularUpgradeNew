

import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { IState } from 'FAQs/models';

import { FaqManagerService } from './faq-manager.service';
import { FaqStateService } from '../faq-state/faq-state.service';
import { FaqFacadeService } from '../faq-facade/faq-facade.service';

describe('Faq manager Service', () => {

    let manager: FaqManagerService;
    let faqFacadeServiceSpy: jasmine.SpyObj<FaqFacadeService>;
    let faqStateServiceSpy: jasmine.SpyObj<FaqStateService>;

    const catId = '12312312';

    const initialState = {
        currentPage: 0,
        isClosures: false,
        isNews: false,
        itemId: catId,
        pageSize: 50,
        pageSuffix: ''
    } as IState;

    beforeEach(() => {
        faqFacadeServiceSpy = jasmine.createSpyObj('service', ['loadArchivePage', 'executeCmsPaging']);
        faqStateServiceSpy = jasmine.createSpyObj('stateService', ['getState']);

        TestBed.configureTestingModule({
            providers: [
                FaqManagerService,
                { provide: FaqFacadeService, useFactory: () => faqFacadeServiceSpy },
                { provide: FaqStateService, useFactory: () => faqStateServiceSpy },

            ]
        });

        manager = TestBed.inject(FaqManagerService);

    });

    it('defines the service', () => {
        expect(manager).toBeDefined();
    });


    it('loads the faq page', async () => {

        const loadArchivePageRes = {
            categories: [
                { displayName: 'All', queryID: 123 }, { displayName: 'All Electronic Tolling', queryID: 456 }
            ],
            topSearchResults: '',
            hyperLinkedArticles: {
                numberOfArticles: 209,
                numberOfPages: 5,
                requestedItemId: '7C2F3930-556A-4D6B-979A-8DE2EC43D5B9',
                articles: [
                    {
                        category: 'All',
                        shortDescription: 'All short desc',
                        title: 'First FAQ',
                        __Updated: '20220812T060242Z'
                    },
                    {
                        category: 'All Electronic Tolling',
                        shortDescription: 'All Electronic Tolling short desc',
                        title: 'second FAQ',
                        __Updated: '20220812T060242Z'
                    }
                ]
            }
        };
        faqFacadeServiceSpy.loadArchivePage.and.resolveTo(loadArchivePageRes);
        faqStateServiceSpy.getState.and.returnValue(initialState);

        const res = await manager.loadPage();
        expect(faqFacadeServiceSpy.loadArchivePage).toHaveBeenCalled();
        expect(res).toBeDefined();

    });

    it('executes the faq actions', async () => {

        faqStateServiceSpy.getState.and.returnValue(initialState);

        const apiRes = {

            numberOfArticles: 209,
            numberOfPages: 5,
            requestedItemId: '7C2F3930-556A-4D6B-979A-8DE2EC43D5B9',
            articles: [
                {
                    category: 'All',
                    shortDescription: 'All short desc',
                    title: 'First FAQ',
                    __Updated: '20220812T060242Z'
                },
                {
                    category: 'All Electronic Tolling',
                    shortDescription: 'All Electronic Tolling short desc',
                    title: 'second FAQ',
                    __Updated: '20220812T060242Z'
                }
            ]

        };

        faqFacadeServiceSpy.executeCmsPaging.and.resolveTo(apiRes);
        const parsedRes = await manager.execute({});
        expect(faqFacadeServiceSpy.executeCmsPaging).toHaveBeenCalled();
        expect(parsedRes).toBeDefined();
    });
});
