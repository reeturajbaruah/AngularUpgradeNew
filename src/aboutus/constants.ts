import { Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    KatyManagedLanes = 'KatyManagedLanes';
    AllElectronicTolling = 'AET';
    HardySHP = 'HardySHPInterchange';
}

@Injectable()
export class Routes {
    KatyManagedLanes = '/KatyManagedLanes';
    AllElectronicTolling = '/AET';
    HardySHP = '/HardySHPInterchange';
}

@Injectable()
export class CmsIds {
    AETRefresh = '7DA7717A-61EC-4F3D-8E29-AE6F2CC38134';

    DesktopHeader = '2DBCE815-CD11-4F72-917F-4452E27E2591';
    DesktopEasierRow = '035CB0B7-70D6-41F3-9D4B-C022789AD0D7';
    DesktopSaferRow = 'B6B39353-A5D2-4014-9732-ADFDAA84B8C8';
    DesktopGantry = '5CFC43B1-0F8C-4A09-A5B7-062D8DD32035';
    DesktopSignageChangesExpanded = '9F6A6930-27D9-4BA6-B6E3-F914B9E09ACE';
    DesktopSignageChanges = 'F44808E5-3988-400F-834E-A3A09BF576FE';
    DesktopTollPolicyRoadWay = 'ED9A7FF1-7ED4-4A2F-9863-1E52AD832134';

    TabletSmallHeader = 'EB468125-958A-4714-8A4D-69BC4849219D';
    TabletSmallEasierRow = '54386D14-EC5C-47A0-8046-36F04FBE9A55';
    TabletSmallSaferRow = '1529C288-7032-4C7F-A402-1BBCEDC12B28';
    TabletSmallGantry = '64FE3945-DE58-42FF-9039-4255B9C6FAEF';
    TabletSmallSignageChangesExpanded = '140B0B7B-1621-4538-8B76-CF2A3D41C6D2';
    TabletSmallSignageChanges = '5142D9A9-2BEC-4647-9955-F8D8AED17FEA';
    TabletSmallTollPolicyRoadWay = 'A7448C22-5ECB-443F-A882-91C96F8D8135';

    TabletLargeHeader = '3C98D549-C9E9-433F-8A95-53D0DB9F039F';
    TabletLargeEasierRow = '8D44592B-EEF2-45E7-9DCF-0C17F51CF3D7';
    TabletLargeSaferRow = '1446CEA0-587A-483E-9644-F14293FD7101';
    TabletLargeGantry = '047349B7-F474-4E6E-9A86-25B83ABD6548';
    TabletLargeSignageChangesExpanded = 'B875D4C1-C566-4508-8442-5D267732C77E';
    TabletLargeSignageChanges = '14DEF4E1-4D87-40FF-97A4-1373FC014490';
    TabletLargeTollPolicyRoadWay = '5D90872F-129C-4F87-9F77-BDC512DCD83F';

    MobileHeader = '4AC3E53A-4C9B-4CA9-9DF2-847892EA5DC9';
    MobileEasierRow = '0A28EC37-7347-48E1-9EDA-039E24D116B0';
    MobileSaferRow = '45BED00D-CC8D-4139-93C6-9CE5D5801BE7';
    MobileGantry = '312F1F90-448A-4CC0-9684-0F623EEFB7E1';
    MobileSignageChangesExpanded = 'BC43419F-B299-4EF9-B7A4-AD54B6BA126A';
    MobileSignageChanges = '7D1B778B-CCD0-4377-B884-8EC4613985B6';
    MobileTollPolicyRoadWay = '7A0EC9BC-7679-4B1B-9E4F-BE6372B6AA23';

    DesktopFAQTitle = '7BD32CC3-01C2-4007-B7B3-3E418A00878C';
    MobileFAQTitle = '02AF3D13-2C8E-4012-A7F9-3F439C20CF64';
    TabletLargeFAQTitle = '57A82F67-DDB1-4638-8411-DB4036CD2B43';
    TabletSmallFAQTitle = 'E1B9F164-E812-4887-97BF-AF6945EA06D7';

    FAQSectionOverview = '892C2BD2-D5FF-4510-9E9C-62F1436DF307';
    FAQSectionChanges = '07419DF4-E62A-4930-A159-CA92D5C18116';
    FAQSectionBenefits = '6BE50A4D-3B9E-4628-A1DA-820523A9CD15';

    HardySHPDesktop = 'B04745E8-A28A-4AC0-815F-F1DB0884C4C5';
    HardySHPTablet = 'ED57E8AA-C1D5-4A5F-84E2-7C44395D9AD2';
    HardySHPMobile = '98BBF1CC-5C37-4A4D-8FFC-7794E16CCA3F';

}

export const AetBreakpoints = [
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
];

@Injectable()
export class FeatureToggles {
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
