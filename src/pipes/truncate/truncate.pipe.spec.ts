import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {

    let pipe: TruncatePipe;

    beforeEach((() => {
        pipe = new TruncatePipe();
    }));

    it('canary', () => {
        expect(true).toBe(true);
    });

    it('should truncate a string over default 30 chars', () => {
        const transform = pipe.transform('123456789012345678901234567890abc');

        expect(transform).toBe('123456789012345678901234567890...');
    });

    it('should truncate a string over specified length of chars', () => {
        const transform = pipe.transform('1234567890abc', 10);

        expect(transform).toBe('1234567890...');
    });

    it('should return the full string if below threshold', () => {
        const transform = pipe.transform('0123456789');

        expect(transform).toBe('0123456789');
    });

});
