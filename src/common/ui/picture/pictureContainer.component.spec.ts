import { } from 'jasmine';
import { Component, NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { changesStable } from 'testing';

import { PictureModule } from './picture.module';
import { ENVIRON_CONFIG } from 'common/upgrades';

@Component({
    selector: 'test-component1',
    template:     
    `<picture-container>
        <picture>
            <source srcset='' />
            <img />
        </picture>
        <p content-container>This is Content!</p>
    </picture-container>`
})
class Test1Component {
}

@Component({
    selector: 'test-component2',
    template:     
    `<picture-container>
        <p content-container>This is Content!</p>
        <picture>
            <source srcset='' />
            <img />
        </picture>        
    </picture-container>`
})
class Test2Component {
}

describe('Picture Container Component', () => {

    const BuildTestBed = async (testComponentType) => {
        await TestBed
        .configureTestingModule({
            declarations: [
                testComponentType
            ],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PictureModule],
            providers: [    
                { provide: ENVIRON_CONFIG, useFactory: () => ({})}           
            ]
        })
        .compileComponents();

        const fixture = TestBed.createComponent(testComponentType);
        await changesStable(fixture);
        return fixture;
    };

    //ensure regardless of order of picture-container content, it
    //ALWAYS renders in the correct order
    describe('normal order', () => {

        let fixture: ComponentFixture<Test1Component>;

        beforeEach(async ()=> {
            fixture = await BuildTestBed(Test1Component);
        });

        it('renders in expected order', () => {
            const elm = fixture.debugElement.nativeElement as HTMLElement;
            expect(elm.firstElementChild.tagName).toBe('PICTURE-CONTAINER');
            const root = elm.firstElementChild;
            expect(root.firstElementChild.tagName).toBe('PICTURE');
            expect(root.firstElementChild.nextElementSibling.hasAttribute('content-container')).toBeTrue();
        });

    });

    //ensure regardless of order of picture-container content, it
    //ALWAYS renders in the correct order
    describe('try out of order', () => {

        let fixture: ComponentFixture<Test2Component>;

        beforeEach(async ()=> {
            fixture = await BuildTestBed(Test2Component);
        });

        it('renders in expected order', () => {
            const elm = fixture.debugElement.nativeElement as HTMLElement;
            expect(elm.firstElementChild.tagName).toBe('PICTURE-CONTAINER');
            const root = elm.firstElementChild;
            expect(root.firstElementChild.tagName).toBe('PICTURE');
            expect(root.firstElementChild.nextElementSibling.hasAttribute('content-container')).toBeTrue();
        });
    });

});