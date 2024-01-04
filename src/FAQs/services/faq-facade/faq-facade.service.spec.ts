import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { EventType, IState } from 'FAQs/models';
import { FaqFacadeService } from './faq-facade.service';
import { FaqApiService } from './api/faq-api.service';

describe('Faq state Service', () => {

    let service: FaqFacadeService;
    let faqApiServiceSpy: jasmine.SpyObj<FaqApiService>;

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
        faqApiServiceSpy = jasmine.createSpyObj('api', ['loadArchivePage', 'executeCmsPaging']);

        TestBed.configureTestingModule({
            providers: [
                FaqFacadeService,
                { provide: FaqApiService, useFactory: () => faqApiServiceSpy },
            ]
        });

        service = TestBed.inject(FaqFacadeService);

    });

    it('defines the service', () => {
        expect(service).toBeDefined();
    });

    it('gets the api data on page load', async () => {

        const state = {
            currentPage: 0,
            isClosures: false,
            isNews: false,
            itemId: '',
            pageSize: 50,
            pageSuffix: ''
        } as IState;

        const req = {
            categoryId: service['defaultCatId'],
            categoryPagingInformation: state,
            searchSpecificCategory: true,
            topId: service['defaultTopId'],
            topFields: service['defaultTopFields'],
            requests: [
                {
                    fields: 'Title',
                    itemId: '800C26FD-7198-44A5-937B-BB1A38FEA42B'
                },
                {
                    fields: 'Title,QueryId,DisplayName,ItemPath,ItemName',
                    itemId: '48E23507-F432-4F16-97D2-BE3CAA8024D8'
                }
            ]
        };

        await service.loadArchivePage(state);

        expect(faqApiServiceSpy.loadArchivePage).toHaveBeenCalledWith(req);

    });

    it('gets the data on Category event change', async () => {

        const req = { ...initialState };
        req.itemId = '4343';
        req.currentPage = 0;

        await service.executeCmsPaging(req);
        expect(faqApiServiceSpy.executeCmsPaging).toHaveBeenCalledWith(req);
        expect(initialState.itemId).toEqual(catId);
    });

    it('gets the data on Pagination - next page event change', async () => {

        const req = { ...initialState };
        req.currentPage = initialState.currentPage + 1;

        await service.executeCmsPaging(req);
        expect(faqApiServiceSpy.executeCmsPaging).toHaveBeenCalledWith(req);
        expect(initialState.currentPage).toEqual(req.currentPage - 1);

    });

    it('gets the data on Pagination - prev page event change', async () => {

        initialState.currentPage = 1;
        const req = { ...initialState };
        req.currentPage = initialState.currentPage - 1;

        await service.executeCmsPaging(req);
        expect(faqApiServiceSpy.executeCmsPaging).toHaveBeenCalledWith(req);
        expect(initialState.currentPage).toEqual(1);

    });

    it('gets the data on Pagination - Items per page event change', async () => {

        const req = { ...initialState };
        req.pageSize = 2;
        req.currentPage = 0;

        await service.executeCmsPaging(req);
        expect(faqApiServiceSpy.executeCmsPaging).toHaveBeenCalledWith(req);

    });

    it('gets the data on Pagination - go to specific page event change', async () => {

        const req = { ...initialState };
        req.currentPage = 0;
        await service.executeCmsPaging(req);
        expect(faqApiServiceSpy.executeCmsPaging).toHaveBeenCalledWith(req);

    });



});
