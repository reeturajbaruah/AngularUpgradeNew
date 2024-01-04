import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from '../../../pipes/module';
import { TollRatesService } from '../../services/tollRates/tollRates.service';
import { TollRatesComponent } from './tollRates.component';
import { By } from '@angular/platform-browser';
import { SiteCoreItem } from '../../../cms/cms.module';
import { StringUtilsService } from '../../../common/services/stringUtils/stringUtils.service';

describe('TollRatesComponent', () => {
    let component: TollRatesComponent;
    let fixture: ComponentFixture<TollRatesComponent>;
    let stringUtilsService: jasmine.SpyObj<StringUtilsService>;

    beforeEach(async () => {
        stringUtilsService = jasmine.createSpyObj('stringUtilsService', ['getParameterArray']);;

        await TestBed.configureTestingModule({
            declarations: [TollRatesComponent],
            providers: [
                TollRatesService,
                { provide: StringUtilsService, useFactory: () => stringUtilsService }
            ],
            imports: [
                PipesModule
            ]
        }).compileComponents();

    });

    beforeEach(() => {
        TestBed.inject(TollRatesService);
        fixture = TestBed.createComponent(TollRatesComponent);
        component = fixture.componentInstance;
        component.cmsPage = {
            Children: [
                {
                    Children: [
                        {} as any
                    ]
                } as any,
            ]
        } as any;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit()', () => {
        beforeEach(() => {
        });

        it('should be undefined ', () => {
            component.ngOnInit();
            expect(component.selectedDirection).toEqual(undefined);
            expect(component.selectedTollRoad).toEqual({
                Title: undefined,
                LongDescription: undefined,
                Directions: []
            });
            expect(component.selectedClass).toEqual(undefined);
        });
    });

    
    describe('onSelectChange()', () => {
        beforeEach(() => {
            component.searchParams = new URL(location.href).searchParams;
        });

        it('search param should be equal to the selected toll road title', () => {
            component.selectedTollRoad = { Title: 'Ft. Bend Extension', Directions: [] };
            component.onSelectChange();
            expect(component.searchParams.get('tollRoad')).toEqual('Ft. Bend Extension');
        });
    });

    describe('cms', () => {
        beforeEach(() => {
            component.cmsPage.Children[0].Children[0] = {} as SiteCoreItem;
        });

        it('selected tol road should be equal to search parameter', () => {
            component.tollRoads = null;
            component.cmsPage.Children[0].Children[0].Title = 'Hardy Toll Road';
            component.cmsPage.Children[0].Children[0].Children = [];
            component.cmsPage.Children[0].Children[0].LongDescription = '';
            component.cmsPage.Children[0].Children[1] = {} as SiteCoreItem;
            component.cmsPage.Children[0].Children[1].Title = 'Katy Managed Lanes';
            component.cmsPage.Children[0].Children[1].Children = [];
            component.cmsPage.Children[0].Children[1].LongDescription = '';

            //Set url search paramater
            const searchParams = new URL(location.href).searchParams;
            searchParams.set('tollRoad', 'Katy Managed Lanes');
            window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);
            
            component.ngOnInit();
            
            //make sure that the selected toll road is equal to the search parameter from the url
            expect(component.selectedTollRoad.Title).toEqual('Katy Managed Lanes');
        });

        it('selected title should be equal the first toll road if invalid search param', () => {
            component.cmsPage.Children[0].Children[0].Title = 'Hardy Toll Road';
            component.cmsPage.Children[0].Children[0].Children = [];
            component.cmsPage.Children[0].Children[0].LongDescription = '';
            component.cmsPage.Children[0].Children[1] = {} as SiteCoreItem;
            component.cmsPage.Children[0].Children[1].Title = 'Katy Managed Lanes';
            component.cmsPage.Children[0].Children[1].Children = [];
            component.cmsPage.Children[0].Children[1].LongDescription = '';

            //set search param to toll road that does exist from cms
            const searchParams = new URL(location.href).searchParams;
            searchParams.set('tollRoad', 'TOLL ROAD');
            window.history.replaceState({}, '', `${location.pathname}?${searchParams}`);

            component.ngOnInit();

            //check the selected toll road is the first toll road from cms 
            expect(component.selectedTollRoad.Title).toEqual('Hardy Toll Road');
        });

        it('select direction and select class should show on toll road with rate data', () => {
            //Init component with toll road with no rate data 
            component.cmsPage.Children[0].Children[0].Title = 'Hardy Toll Road';
            component.cmsPage.Children[0].Children[0].Children = [];
            component.cmsPage.Children[0].Children[0].LongDescription = '';
            component.ngOnInit();

            //check that the direction and class dropdowns do not exist 
            expect(fixture.debugElement.query(By.css('#direction-select'))).toBeFalsy();
            expect(fixture.debugElement.query(By.css('#vehicle-class-select'))).toBeFalsy();
            expect(component.selectedClass).toEqual(undefined);

            //set mock cms data
            component.selectedTollRoad.Directions.push({
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
                                Label: '2 Axles Cash / Non-Tag',
                                Value: 'Cash Not Accepted / $1.75'
                            },
                            {
                                Label: '2 Axles EZ TAG',
                                Value: '$1.50'
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
            },
                {
                    Direction: 'South',
                    TollSections: [
                        {
                            ItemID: '58d24470-aae2-46a1-8c3a-d7f6633dac92',
                            ItemName: 'FM2920',
                            ItemPath: '/sitecore/content/HCTRA/TravelTools/RatesPage/TollRoadsSection/TollRoads/Tomball/South/FM2920',
                            ParentID: '0ecd4323-fd8b-458c-aec4-a3a1f8b19405',
                            TemplateID: 'd86180f5-9b6c-4539-9906-fa5edf1d4e98',
                            TemplateName: 'LocationWithRatesTable',
                            CloneSource: null,
                            ItemLanguage: 'en',
                            ItemVersion: '1',
                            DisplayName: 'FM 2920',
                            HasChildren: 'False',
                            ItemIcon: '/temp/iconcache/office/32x32/map_location.png',
                            ItemMedialUrl: '/temp/iconcache/office/48x48/map_location.png',
                            ItemUrl: '~/link.aspx?_id=58D24470AAE246A18C3AD7F6633DAC92&amp;_z=z',
                            Title: 'FM 2920',
                            Position: 1,
                            ShortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue vulputate erat hendrerit tincidunt.',
                            Bold: false,
                            TollingLocations: 'FM 2920',
                            LocationType: 'on ramp',
                            Children: [],
                            Rates: [
                                {
                                    Label: '2 Axles Cash / Non-Tag',
                                    Value: 'Cash Not Accepted / $0.75'
                                },
                                {
                                    Label: '2 Axles EZ TAG',
                                    Value: '$0.75'
                                },
                                {
                                    Label: '3 Axles',
                                    Value: '$1.50'
                                },
                                {
                                    Label: '4 Axles',
                                    Value: '$2.25'
                                },
                                {
                                    Label: '5 Axles',
                                    Value: '$3.00'
                                },
                                {
                                    Label: '6 Axles',
                                    Value: '$3.75'
                                }
                            ]
                        }
                    ]
                });

            component.onSelectChange();

            //make sure that selectedTollRoad was updated
            expect(component.selectedClass.Value).toEqual('All Axles');

            //check that the dropdowns will show when rate data exists 
            fixture.detectChanges();
            expect(fixture.debugElement.query(By.css('#direction-select'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('#vehicle-class-select'))).toBeTruthy();
        });

    });
});


