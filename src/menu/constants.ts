import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Search = 'Search';
}

@Injectable()
export class Routes {
    Search = '/Search';
}

@Injectable()
export class CmsIds {
    HeaderCallToActions = 'C2FBFCE6-3A43-4C05-B6F8-4E2F2B0A2D8B';
    CommonCmsContent = 'D85480F3-92A7-4ABA-9A02-B39E2D98AFB2';
    HamburgerMenuLinks = '6FCF5EBF-2982-44E3-AD69-7700F35A3ECF';
    FooterLinks = '631567D6-E9D4-4ADA-A897-6EA1144F2F10';
    CopyrightText = '738C9E90-10A6-4250-8074-E7A7D067A00B';
    Charms = 'DF266BCC-369C-40B6-84DE-4C933E14781B';
    AccountDropdown = '3E70BCB0-2D16-43F5-9B6B-604B2582397A';
}

export const CharmsCmsIds = {
    Dashboard: '2B85F2F9-8F23-4B4D-BEA8-C712690B81A2'.toLowerCase(),
    Vehicles: '194DADAE-2BB9-48A1-8B6D-3DC8C070C01F'.toLowerCase(),
    AccountActivity: '5891996F-7708-4460-8DE8-4A07C0808240'.toLowerCase(),
    Profile: 'BB478C40-7C38-4A5C-888A-71D0E6EF4085'.toLowerCase()
};

export const cmsIds = new CmsIds();
export const stateNames = new StateNames();
export const urlPaths = new Routes();
