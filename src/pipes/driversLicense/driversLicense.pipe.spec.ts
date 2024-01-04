import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { DriversLicensePipe } from './driversLicense.pipe';

describe('DriversLicensePipe', () => {

    let pipe: DriversLicensePipe;

    beforeEach((() => {
        pipe = new DriversLicensePipe();
    }));

    it('canary', () => {
        expect(true).toBe(true);
    });

    it('should return masked string if drivers license entered', () => {
        const transform = pipe.transform('99994444');

        expect(transform).toBe('****-444');
    });

    it('should return empty string if drivers license is null', () => {
        const transform = pipe.transform(null);

        expect(transform).toBe('');
    });

});
