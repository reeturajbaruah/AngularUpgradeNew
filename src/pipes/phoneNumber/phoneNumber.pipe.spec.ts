import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { PhoneNumberPipe } from './phoneNumber.pipe';

describe('PhoneNumberPipe', () => {

    let pipe: PhoneNumberPipe;

    beforeEach((() => {
        pipe = new PhoneNumberPipe();
    }));

    it('canary', () => {
        expect(true).toBe(true);
    });

    it('should return normal phone number without country code when no country code given', () => {
        const transform = pipe.transform('7130009876');

        expect(transform).toBe('713-000-9876');
    });

    it('should return normal phone number without country code when USA country code given', () => {
        const transform = pipe.transform('+17130009876');

        expect(transform).toBe('713-000-9876');
    });

    it('should return normal phone number with country code when single digit country code given', () => {
        const transform = pipe.transform('+27130009876');

        expect(transform).toBe('2-713-000-9876');
    });

    it('should return normal phone number with country code when double digit country code given', () => {
        const transform = pipe.transform('+117130009876');

        expect(transform).toBe('11-713-000-9876');
    });

    it('should return normal phone number with country code when triple digit country code given', () => {
        const transform = pipe.transform('+1117130009876');

        expect(transform).toBe('111-713-000-9876');
    });

    it('should return empty string if phone number is null', () => {
        const transform = pipe.transform(null);

        expect(transform).toBe('');
    });

});
