import { TestBed } from '@angular/core/testing';

import { ArrayUtilService } from './arrayUtil.service';

describe('ArrayUtilService', () => {
  let service: ArrayUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArrayUtilService
      ]
    });
    service = TestBed.inject(ArrayUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('intersect', () => {
    const i = service.intersect([{ name: 'test' }, { name: 'test1' }], [{ name: 'test2' }, { name: 'test' }], (a, b) => a.name === b.name);

    expect(i).toEqual([{ name: 'test' }]);
  });

  it('difference', () => {
    const d = service.difference([{ name: 'test' }, { name: 'test1' }], [{ name: 'test2' }, { name: 'test' }], (a, b) => a.name === b.name);

    expect(d).toEqual([{ name: 'test1' }]);
  });

  it('find', () => {
    const f = service.find([{ name: 'test' }, { name: 'test1' }], (a) => a.name === 'test');

    expect(f).toEqual({ name: 'test' });
  });

  it('toDictionary', () => {
    const t = service.toDictionary([{ name: 'test' }, { name: 'test1' }], e => e.name);

    expect(t).toEqual({ test: { name: 'test' }, test1: { name: 'test1' } });
  });
});
