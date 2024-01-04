import { } from 'jasmine';

import { routes } from 'constants/module';
import { CmsUtilService } from './cmsUtil.service';


describe('cmsUtilService', () => {

    let service: CmsUtilService;

    let imageTag: string;
    let fileTag: string;

    beforeEach(() => {

        service = new CmsUtilService(
            routes
        );

        imageTag = '<image mediaid="{2328022B-68FE-4710-8E8B-1AA3FAC0A62B}" alt="Hello Me!" height="100" width="200"/>';
        fileTag = '<file mediaid="{2328022B-68FE-4710-8E8B-1AA3FAC0A62B}" alt="Hello Me!"/>';
    });

    describe('generateFileSrc', () => {
        it('should return mediaUrl', () => {
            const result = service.generateFileSrc(fileTag);

            expect(result).toBe('-/media/2328022B68FE47108E8B1AA3FAC0A62B');
        });

        it('should return null', () => {
            const result = service.generateFileSrc(null);

            expect(result).toBe(null);
        });

        it('should return same int', () => {
            const result = service.generateFileSrc(3 as any);

            expect(result).toBe(3 as any);
        });

        it('should return mediaUrl with ext', () => {
            const result = service.generateFileSrc(fileTag, true);

            expect(result).toBe('-/media/2328022B68FE47108E8B1AA3FAC0A62B.ashx');
        });
    });

    describe('processItemId', () => {
        it('should return processed item id', () => {
            const result = service.processItemId('{2328022B-68FE-4710-8E8B-1AA3FAC0A62B}');

            expect(result).toBe('2328022B68FE47108E8B1AA3FAC0A62B');
        });

        it('should return empty string', () => {
            const result = service.processItemId(null);

            expect(result).toBe('');
        });
    });

    describe('parseMediaId', () => {
        it('should strip and clean the mediaid attribute of an image', () => {
            const mediaId = service['parseMediaId'](imageTag);
            expect(mediaId).toBe('2328022B68FE47108E8B1AA3FAC0A62B');
            expect(mediaId).not.toBe('2328022B-68FE-4710-8E8B-1AA3FAC0A62B');
            expect(mediaId).not.toBe(imageTag);
        });

        it('should strip and clean the mediaid attribute of a file', () => {
            const mediaId = service['parseMediaId'](fileTag);
            expect(mediaId).toBe('2328022B68FE47108E8B1AA3FAC0A62B');
            expect(mediaId).not.toBe('2328022B-68FE-4710-8E8B-1AA3FAC0A62B');
            expect(mediaId).not.toBe(fileTag);
        });

        it('should return empty string if invalid', () => {
            const mediaId = service['parseMediaId'](null);
            expect(mediaId).toBe('');
        });
    });

    describe('parseAltText', () => {
        it('should strip and clean the alt text attribute of an image', () => {
            const altTxt = service.parseAltText(imageTag);
            expect(altTxt).toBe('Hello Me!');
            expect(altTxt).not.toBe(imageTag);
        });

        it('should strip and clean the alt text attribute of a file', () => {
            const altTxt = service.parseAltText(fileTag);
            expect(altTxt).toBe('Hello Me!');
            expect(altTxt).not.toBe(fileTag);
        });

        it('should return empty string if invalid', () => {
            const altTxt = service.parseAltText(null);
            expect(altTxt).toBe('');
        });
    });

    describe('parseHeight', () => {
        it('should strip and clean the height attribute of an image', () => {
            const height = service['parseHeight'](imageTag);
            expect(height).toBe('100px');
        });

        it('should return empty string if invalid', () => {
            const height = service['parseHeight'](null);
            expect(height).toBe('');
        });
    });

    describe('parseWidth', () => {
        it('should strip and clean the width attribute of an image', () => {
            const width = service['parseWidth'](imageTag);
            expect(width).toBe('200px');
        });

        it('should return empty string if invalid', () => {
            const width = service['parseWidth'](null);
            expect(width).toBe('');
        });
    });

    describe('parseCmsDate', () => {
        it('should parse a Sitecore date string to proper Date object', () => {
            const date = service['parseCmsDate']('20160813T215600Z');
            expect(date.getTime()).toBe(1471125360000);
            expect(date.toUTCString()).toBe('Sat, 13 Aug 2016 21:56:00 GMT');
        });
    });

    describe('convertStartEndDates', () => {
        it('should convert start and end date properties to UTC Date objects', () => {
            const dateArr = [
                {
                    startDate: '20100813T215600Z',
                    endDate: '20110813T215600Z'
                },
                {
                    StartDate: '20120813T215600Z',
                    EndDate: '20130813T215600Z'
                }
            ];
            const dateArrCopy = service.convertStartEndDates(dateArr);

            expect(dateArrCopy[0].startDate).toBeUndefined();
            expect(dateArrCopy[0].StartDate.getTime()).toBe(1281736560000);
            expect(dateArrCopy[0].StartDate.toUTCString()).toBe('Fri, 13 Aug 2010 21:56:00 GMT');
            expect(dateArrCopy[0].endDate).toBeUndefined();
            expect(dateArrCopy[0].EndDate.getTime()).toBe(1313272560000);
            expect(dateArrCopy[0].EndDate.toUTCString()).toBe('Sat, 13 Aug 2011 21:56:00 GMT');

            expect(dateArrCopy[1].StartDate.getTime()).toBe(1344894960000);
            expect(dateArrCopy[1].StartDate.toUTCString()).toBe('Mon, 13 Aug 2012 21:56:00 GMT');
            expect(dateArrCopy[1].EndDate.getTime()).toBe(1376430960000);
            expect(dateArrCopy[1].EndDate.toUTCString()).toBe('Tue, 13 Aug 2013 21:56:00 GMT');
        });

        it('should not affect the original array during date conversion', () => {
            const dateArr = [
                {
                    startDate: '20100813T215600Z',
                    endDate: '20110813T215600Z'
                },
                {
                    StartDate: '20120813T215600Z',
                    EndDate: '20130813T215600Z'
                }
            ];

            expect(dateArr[0].StartDate).toBeUndefined();
            expect(dateArr[0].startDate).toBe('20100813T215600Z');
            expect(dateArr[0].EndDate).toBeUndefined();
            expect(dateArr[0].endDate).toBe('20110813T215600Z');

            expect(dateArr[1].StartDate).toBe('20120813T215600Z');
            expect(dateArr[1].EndDate).toBe('20130813T215600Z');
        });
    });

    describe('addDisplayDates & formatDisplayDates', () => {
        it('should format the start and end dates for display if both exist', () => {
            const date = {
                startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                endDate: new Date(Date.UTC(2016, 8, 10, 2, 45, 0))
            };
            const article = service.addDisplayDates(date);
            expect(article.displayDate).toBe('Aug 9 at 9:45pm - Sep 9 at 9:45pm');
        });

        describe('addDisplayDates & formatDisplayDates - closures archive', () => {
            it('should format the start and end dates for display if both exist', () => {
                const date = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    endDate: new Date(Date.UTC(2016, 8, 10, 2, 45, 0))
                };
                const article = service.addDisplayDates(date, true);
                expect(article.displayDate).toBe('Aug 9, 2016 at 9:45pm - Sep 9, 2016 at 9:45pm');
            });

            it('should not care about key casing for startDate and endDate', () => {
                let date: { [key: string]: any } = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    endDate: new Date(Date.UTC(2016, 8, 10, 2, 45, 0))
                };
                let article = service.addDisplayDates(date);
                expect(article.displayDate).toBe('Aug 9 at 9:45pm - Sep 9 at 9:45pm');

                date = {
                    StartDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    EndDate: new Date(Date.UTC(2016, 8, 10, 2, 45, 0))
                };
                article = service.addDisplayDates(date);
                expect(article.displayDate).toBe('Aug 9 at 9:45pm - Sep 9 at 9:45pm');
            });

            it('should not care about key casing for startDate and endDate - closure archive', () => {
                let date: { [key: string]: any } = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    endDate: new Date(Date.UTC(2016, 8, 10, 2, 45, 0))
                };
                let article = service.addDisplayDates(date, true);
                expect(article.displayDate).toBe('Aug 9, 2016 at 9:45pm - Sep 9, 2016 at 9:45pm');

                date = {
                    StartDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    EndDate: new Date(Date.UTC(2016, 8, 10, 2, 45, 0))
                };
                article = service.addDisplayDates(date, true);
                expect(article.displayDate).toBe('Aug 9, 2016 at 9:45pm - Sep 9, 2016 at 9:45pm');
            });

            it('should format the start and end dates for display if only start date exists', () => {
                let date: { [key: string]: any } = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0))
                };
                let article = service.addDisplayDates(date);
                expect(article.displayDate).toBe('Starting Aug 9 at 9:45pm');

                date = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    endDate: null
                };
                article = service.addDisplayDates(date);
                expect(article.displayDate).toBe('Starting Aug 9 at 9:45pm');

                date = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    endDate: ''
                };
                article = service.addDisplayDates(date);
                expect(article.displayDate).toBe('Starting Aug 9 at 9:45pm');
            });

            it('should format the start and end dates for display if only start date exists - closures archive', () => {
                let date: { [key: string]: any } = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0))
                };
                let article = service.addDisplayDates(date, true);
                expect(article.displayDate).toBe('Starting Aug 9, 2016 at 9:45pm');

                date = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    endDate: null
                };
                article = service.addDisplayDates(date, true);
                expect(article.displayDate).toBe('Starting Aug 9, 2016 at 9:45pm');

                date = {
                    startDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    endDate: ''
                };
                article = service.addDisplayDates(date, true);
                expect(article.displayDate).toBe('Starting Aug 9, 2016 at 9:45pm');
            });

            it('should format the start and end dates for display if only end date exists', () => {
                let date: { [key: string]: any } = {
                    endDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0))
                };
                let article = service.addDisplayDates(date);
                expect(article.displayDate).toBe('Through Aug 9 at 9:45pm');

                date = {
                    endDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    startDate: null
                };
                article = service.addDisplayDates(date);
                expect(article.displayDate).toBe('Through Aug 9 at 9:45pm');

                date = {
                    endDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                    startDate: ''
                };
                article = service.addDisplayDates(date);
                expect(article.displayDate).toBe('Through Aug 9 at 9:45pm');
            });
        });

        it('should format the start and end dates for display if only end date exists - closures archive', () => {
            let date: { [key: string]: any } = {
                endDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0))
            };
            let article = service.addDisplayDates(date, true);
            expect(article.displayDate).toBe('Through Aug 9, 2016 at 9:45pm');

            date = {
                endDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                startDate: null
            };
            article = service.addDisplayDates(date, true);
            expect(article.displayDate).toBe('Through Aug 9, 2016 at 9:45pm');

            date = {
                endDate: new Date(Date.UTC(2016, 7, 10, 2, 45, 0)),
                startDate: ''
            };
            article = service.addDisplayDates(date, true);
            expect(article.displayDate).toBe('Through Aug 9, 2016 at 9:45pm');
        });
    });

    describe('processArticleArray', () => {
        
        it('article array should be undefined for empty array', () => {
            let articleArray = [];
            articleArray = service.processArticleArray(articleArray);
            expect(articleArray[0]).toBeUndefined();
        });

        it('article array should be undefined for empty array - closures archive', () => {
            let articleArray = [];
            articleArray = service.processArticleArray(articleArray, true);
            expect(articleArray[0]).toBeUndefined();
        });

        it('article array should be undefined for null', () => {
            let articleArray = null;
            articleArray = service.processArticleArray(articleArray);
            expect(articleArray).toBeNull();
        });

        it('article array should be undefined for null - closures archive', () => {
            let articleArray = null;
            articleArray = service.processArticleArray(articleArray, true);
            expect(articleArray).toBeNull();
        });

        it('article array should be undefined for undefined', () => {
            const articleArray = service.processArticleArray(undefined);
            expect(articleArray).toBeUndefined();
        });

        it('article array should be undefined for undefined - closures archive', () => {
            const articleArray = service.processArticleArray(undefined, true);
            expect(articleArray).toBeUndefined();
        });
    });

});
