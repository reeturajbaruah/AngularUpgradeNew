import { AgencyNamePipe } from './agencyName.pipe';
describe('agencyName pipe', () => {
    const pipe = new AgencyNamePipe();

    it('should map HCTRA', () => {
        expect(pipe.transform('HCTRA')).toBe('Harris County');
    });

    it('should map MCTRA', () => {
        expect(pipe.transform('MCTRA')).toBe('Montgomery County');
    });

    it('should map FBCTRA', () => {
        expect(pipe.transform('FBCTRA')).toBe('Fort Bend County');
    });

    it('should map FBGPTRA', () => {
        expect(pipe.transform('FBGPTRA')).toBe('Fort Bend Grand Parkway');
    });

    it('should map same value if not in list', () => {
        expect(pipe.transform('Nonsense')).toBe('Nonsense');
    });

});

