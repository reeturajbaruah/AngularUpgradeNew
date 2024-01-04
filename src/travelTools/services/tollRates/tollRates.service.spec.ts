import { TestBed } from '@angular/core/testing';
import { TollRatesService } from './tollRates.service';
import { SiteCoreItem } from '../../../cms/cms.module';
import { StringUtilsService } from '../../../common/services/stringUtils/stringUtils.service';

describe('TollRatesService', () => {
    let tollRatesService: TollRatesService;
    let stringUtilsService: jasmine.SpyObj<StringUtilsService>;

    beforeEach(() => {
        stringUtilsService = jasmine.createSpyObj('StringUtilsService', ['getParameterArray']);

        TestBed.configureTestingModule({
            providers: [
                TollRatesService,
                { provide: StringUtilsService, useValue: stringUtilsService }
            ]
        });

        tollRatesService = TestBed.inject(TollRatesService);
    });

    it('should define tollRatesService', () => {
        expect(TollRatesService).toBeDefined();
    });

    describe('createTollRoadObjects()', () => {
        beforeEach(() => {
        });

        it('should return empty array', () => {
            const siteCoreItems = [] as SiteCoreItem[];
            const result = tollRatesService.mapTollRoads(siteCoreItems);
            expect(result).toEqual([]);
        });

        it('should return array with data', () => {
            const siteCoreItems = [{ Title: 'Test 1', LongDescription: '', Children: [] }, { Title: 'Test 2', LongDescription: '', Children: [] }] as SiteCoreItem[];
            const result = tollRatesService.mapTollRoads(siteCoreItems);
            expect(result.length).toEqual(2);
            expect(result[0].Title).toEqual('Test 1');
            expect(result[1].Title).toEqual('Test 2');
        });
    });

    describe('getClasses()', () => {
        beforeEach(() => {
        });

        it('should return undefined', () => {
            const tollRoad = { Title: 'Test 1', LongDescription: '', Directions: ['test'] };
            const classes = tollRatesService.sortLabels(tollRoad.Directions[0]);
            expect(classes).toEqual(undefined);
        });

        it('should return sorted rates', () => {
            const tollRoad = { Title: 'Test 1', LongDescription: '', Directions: [] };
            tollRoad.Directions.push({
                Direction: 'North',
                TollSections: [
                    {
                        ItemID: 'd26663d5-0e46-4a85-9325-68dc723b41fe',
                        ItemName: 'TomballTollwayMainlane',
                        ItemPath: '/sitecore/content/HCTRA/TravelTools/RatesPage/TollRoadsSection/TollRoads/Tomball/North/TomballTollwayMainlane',
                        ParentID: '12eb6221-99fc-44a9-aa2f-e1be5b1aedcb',
                        TemplateID: 'd86180f5-9b6c-4539-9906-fa5edf1d4e98',
                        TemplateName: 'LocationWithRatesTable',
                        CloneSource: null,
                        ItemLanguag: 'en',
                        ItemVersion: '1',
                        DisplayName: 'Tomball Tollway Mainlane',
                        HasChildren: 'False',
                        ItemIcon: '/temp/iconcache/office/32x32/map_location.png',
                        ItemMedialUrl: '/temp/iconcache/office/48x48/map_location.png',
                        ItemUrl: '~/link.aspx?_id=D26663D50E464A85932568DC723B41FE&amp;_z=z',
                        Title: 'Tomball Tollway Mainlane',
                        Position: 1,
                        ShortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue vulputate erat hendrerit tincidunt.',
                        Bold: true,
                        TollingLocations: 'Tomball Tollway Mainlane',
                        LocationType: 'pass through',
                        Children: [],
                        Rates: [
                            {
                                Label: '2 Axles EZ TAG',
                                Value: '$1.50'
                            },
                            {
                                Label: '2 Axles Cash / Non-Tag',
                                Value: 'Cash Not Accepted / $1.75'
                            },
                            {
                                Label: '3 Axles',
                                Value: '$3.50'
                            },
                            {
                                Label: '4 Axles',
                                Value: '$5.25'
                            },
                            {
                                Label: '5 Axles',
                                Value: '$7.00'
                            },
                            {
                                Label: '6 Axles',
                                Value: '$8.75'
                            }
                        ]
                    }
                ]
            });

            const classes = tollRatesService.sortLabels(tollRoad.Directions[0]);

            expect(classes.length).toEqual(7);
            expect(classes[0].Label).toEqual('All Axles');
            expect(classes[1].Label).toEqual('2 Axles Cash / Non-Tag');
        });
    });

    describe('mapTollRoadDirections()', () => {
        beforeEach(() => {
        });

        it('should return empty array', () => {
            const result = tollRatesService.mapTollRoadDirections([]);
            expect(result).toEqual([]);
        });

        it('should return empty array', () => {
            const result = tollRatesService.mapTollRoadDirections(null);
            expect(result).toEqual([]);
        });
    });

    describe('mapTollSections', () => {
        it('should return "No rate data" object', () => {
            const result = tollRatesService.mapTollSections([]);
            expect(result).toEqual([{ TollingLocations: 'No rate data' }]);
        });

        it('should return array of three selections', () => {
            stringUtilsService.getParameterArray.and.returnValue([['labelTest', '1'], ['cash', '']]);

            const children = [{ Rates: null, Bold: 'TEST', Position: '3' }, { Rates: null, Bold: 'YES', Position: '1' }, { Rates: null, Bold: 'TEST', Position: '2' }];
            const result = tollRatesService.mapTollSections(children);

            expect(result).toEqual([
                { Rates: [{ Label: 'labelTest', Value: '$1.00' }, { Label: 'cash', Value: 'Cash Not Accepted' }], Bold: true, Position: 1 },
                { Rates: [{ Label: 'labelTest', Value: '$1.00' }, { Label: 'cash', Value: 'Cash Not Accepted' }], Bold: false, Position: 2 },
                { Rates: [{ Label: 'labelTest', Value: '$1.00' }, { Label: 'cash', Value: 'Cash Not Accepted' }], Bold: false, Position: 3 }
            ]);
        });
    });
});

