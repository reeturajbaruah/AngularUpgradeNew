import { } from 'jasmine';
import { TweetRetrievalService } from './tweetRetrieval.service';

describe('TweetRetrievalService', () => {
    let httpService: jasmine.SpyObj<any>;
    let service: TweetRetrievalService;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['get']);
        service = new TweetRetrievalService(httpService);
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('getTweets', () => {
        it('should make a basic api call', async () => {
            httpService.get.and.returnValue(Promise.resolve({ tweets: [] }));

            const response = await service.getTweets();

            expect(response).toEqual({ tweets: [] });
            expect(httpService.get).toHaveBeenCalledWith('api/twitterAlt');
        });
    });

    describe('loadTwitterWidget', () => {
        it('should add the Twitter widget script to the DOM if not already present', () => {
            const twitterScriptSelector = 'script[src="https://platform.twitter.com/widgets.js"]';
            document.head.innerHTML = '';

            service.loadTwitterWidget();

            expect(document.querySelector(twitterScriptSelector)).not.toBeNull();
        });

        it('should not add the Twitter widget script to the DOM if already present', () => {
            const twitterScriptSelector = 'script[src="https://platform.twitter.com/widgets.js"]';
            document.head.innerHTML = '<script src="https://platform.twitter.com/widgets.js"></script>';

            service.loadTwitterWidget();

            const scriptElements = document.querySelectorAll(twitterScriptSelector);
            expect(scriptElements.length).toBe(1);
        });
    });
});
