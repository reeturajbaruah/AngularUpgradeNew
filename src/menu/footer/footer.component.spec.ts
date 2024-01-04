import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransitionService } from '@uirouter/core';
import { CmsResolverService } from 'cms/services';
import { MatIconAvailabilityService } from 'common/services';
import { } from 'jasmine';
import { cmsIds } from 'menu/constants';
import { FrameComponent } from 'menu/frame/frame.component';
import { ActiveBreakPointsService, MenuLinkMapperService } from 'menu/services';
import { PipesModule } from 'pipes/module';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { FooterComponent } from './footer.component';


describe('component: menu-footer-component', () => {

    let fixture: ComponentFixture<FooterComponent>;
    let component: FooterComponent;

    let parent: FrameComponent;
    let menuLinkMapper: jasmine.SpyObj<MenuLinkMapperService>;
    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let transitionService: jasmine.SpyObj<TransitionService>;
    let matIcon: jasmine.SpyObj<MatIconAvailabilityService>;
    let activeBreakPoints: jasmine.SpyObj<ActiveBreakPointsService>;
    let testScheduler: TestScheduler;

    beforeEach(async () => {

        testScheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
        activeBreakPoints = jasmine.createSpyObj('activeBreakPointsService', ['asObservable']);
        menuLinkMapper = jasmine.createSpyObj('menuLinkMapper', ['getMapFilterObservable']);
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        matIcon = jasmine.createSpyObj('matIconAvailabilityService', ['whenAvailable']);
        parent = {
            commonCmsContent: of({
                facebook: 'fake facebook link',
                twitter: 'fake twitter link',
                instagram: 'fake instagram link',
                linkedin: 'fake linkedin link',
                youtube: 'fake youtube link'
            })
        } as FrameComponent;

        cmsResolverService.resolve.and.returnValue(Promise.resolve());
        matIcon.whenAvailable.and.returnValue(new Observable());

        await TestBed
            .configureTestingModule({
                declarations: [
                    FooterComponent, FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: MenuLinkMapperService, useFactory: () => menuLinkMapper },
                    { provide: CmsResolverService, useFactory: () => cmsResolverService },
                    { provide: TransitionService, useFactory: () => transitionService },
                    { provide: MatIconAvailabilityService, useFactory: () => matIcon },
                    { provide: ActiveBreakPointsService, useFactory: () => activeBreakPoints },

                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        let matIconObservables;

        beforeEach(() => {

            matIconObservables = {
                'hctra-logo': '--a|',
                'facebook-icon': '-b|',
                'twitter-icon': '---c|',
                'instagram-icon': '---d|',
                'linkedin-icon': '---e|',
                'youtube-icon': '---f|'
            };
        });

        it('should set activeBreakPoint$ to the result of activeBreakPoints.asObservable()', () => {

            activeBreakPoints.asObservable.and.returnValue('fake active break points observable' as any);

            component.ngOnInit();

            expect(component.activeBreakPoints$).toEqual('fake active break points observable' as any);
            expect(activeBreakPoints.asObservable).toHaveBeenCalledOnceWith();
        });

        it('should set links$ to the result of menuLinkMapper.getMapFilterObservable', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                cmsResolverService.resolve.and.callFake(({ ItemId }) => cold('a|', {
                    a: {
                        ShortDescription: 'I am a fake copyright from ' + ItemId
                    }
                }) as any);

                component.ngOnInit();

                expectObservable(component.copyRightText$).toBe('r|', { r: 'I am a fake copyright from ' + cmsIds.CopyrightText });
            });
        });

        it('should set links$ to the result of menuLinkMapper.getMapFilterObservable', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                menuLinkMapper.getMapFilterObservable.and.returnValue(cold('x-y-z'));
                cmsResolverService.resolve.and.callFake(({ ItemId }) => cold('a|', {
                    a: {
                        Children: [ItemId, ItemId, 'end']
                    }
                }) as any);

                component.ngOnInit();

                expectObservable(component.links$).toBe('x-y-z');
                expect(menuLinkMapper.getMapFilterObservable).toHaveBeenCalledOnceWith(jasmine.any(Observable));
                expectObservable(menuLinkMapper.getMapFilterObservable.calls.argsFor(0)[0]).toBe('r|', { r: [cmsIds.FooterLinks, cmsIds.FooterLinks, 'end'] });
            });
        });

        it('should set showHctraLogo$ to result of matIcon.whenAvailable', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                matIcon.whenAvailable.and.callFake(name => cold(matIconObservables[name]));

                component.ngOnInit();

                expectObservable(component.showHctraLogo$).toBe('--r|', { r: true });
                expect(matIcon.whenAvailable).toHaveBeenCalledWith('hctra-logo');
            });
        });

        it('should set twitter$ to the result of matIcon.whenAvailable combined with parentCmsContent', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                matIcon.whenAvailable.and.callFake(name => cold(matIconObservables[name]));

                component.ngOnInit();

                expectObservable(component.twitter$).toBe('---r|', { r: 'fake twitter link' });
                expect(matIcon.whenAvailable).toHaveBeenCalledWith('twitter-icon');
            });
        });

        it('should set facebook$ to the result of matIcon.whenAvailable combined with parentCmsContent', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                matIcon.whenAvailable.and.callFake(name => cold(matIconObservables[name]));

                component.ngOnInit();

                expectObservable(component.facebook$).toBe('-r|', { r: 'fake facebook link' });
                expect(matIcon.whenAvailable).toHaveBeenCalledWith('facebook-icon');
            });
        });

        it('should set instagram$ to the result of matIcon.whenAvailable combined with parentCmsContent', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                matIcon.whenAvailable.and.callFake(name => cold(matIconObservables[name]));

                component.ngOnInit();

                expectObservable(component.instagram$).toBe('---r|', { r: 'fake instagram link' });
                expect(matIcon.whenAvailable).toHaveBeenCalledWith('instagram-icon');
            });
        });

        it('should set linkedin$ to the result of matIcon.whenAvailable combined with parentCmsContent', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                matIcon.whenAvailable.and.callFake(name => cold(matIconObservables[name]));

                component.ngOnInit();

                expectObservable(component.linkedin$).toBe('---r|', { r: 'fake linkedin link' });
                expect(matIcon.whenAvailable).toHaveBeenCalledWith('linkedin-icon');
            });
        });

        it('should set youtube$ to the result of matIcon.whenAvailable combined with parentCmsContent', () => {

            testScheduler.run(({ cold, expectObservable }) => {

                matIcon.whenAvailable.and.callFake(name => cold(matIconObservables[name]));

                component.ngOnInit();

                expectObservable(component.youtube$).toBe('---r|', { r: 'fake youtube link' });
                expect(matIcon.whenAvailable).toHaveBeenCalledWith('youtube-icon');
            });
        });
    });

});
