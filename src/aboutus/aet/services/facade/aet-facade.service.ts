; import { Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IContent, IQueryAet } from 'aboutus/interfaces';
import { BreakpointService } from '../../../../common/services/breakpoint/breakpoint.service';
import { AetBreakpoints, cmsIds } from '../../../constants';
import { AetApiService } from '../api/aet-api.service';
import { CmsUtilService } from 'cms/services';

@Injectable()
export class AetFacadeService {

    constructor(private breakpointService: BreakpointService,
        private api: AetApiService,
        private cmsUtilService: CmsUtilService) {

    }

    getData() {

        let data = {} as IQueryAet;
        return this.breakpointService.observe(AetBreakpoints).pipe(
            map(async breakpoint => {
                const cmsObj = this.getListCmsIds(breakpoint);
                const cmsIdsList = Object.values(cmsObj);
                const req = this.mapSiteCoreReq(cmsIdsList);
                const res = await this.api.getCmsPagesIds(req);
                const dictionary = this.parseResponse(res);
                data = this.parseData(cmsObj, dictionary);
                data.breakpoint = breakpoint;
                return data;
            }));


    }

    getListCmsIds(breakpoint: string) {

        switch (breakpoint) {
            case Breakpoints.XSmall: // mobile

                return {
                    header: cmsIds.MobileHeader,
                    easierRow: cmsIds.MobileEasierRow,
                    saferRow: cmsIds.MobileSaferRow,
                    gantry: cmsIds.MobileGantry,
                    signageChanges: cmsIds.MobileSignageChanges,
                    signageChangesExpanded: cmsIds.MobileSignageChangesExpanded,
                    faqTitle: cmsIds.MobileFAQTitle,
                    tollPolicyRoadWay:cmsIds.MobileTollPolicyRoadWay
                };

            case Breakpoints.Small: // small tablet

                return {
                    header: cmsIds.TabletSmallHeader,
                    easierRow: cmsIds.TabletSmallEasierRow,
                    saferRow: cmsIds.TabletSmallSaferRow,
                    gantry: cmsIds.TabletSmallGantry,
                    signageChanges: cmsIds.TabletSmallSignageChanges,
                    signageChangesExpanded: cmsIds.TabletSmallSignageChangesExpanded,
                    faqTitle: cmsIds.TabletSmallFAQTitle,
                    tollPolicyRoadWay:cmsIds.TabletSmallTollPolicyRoadWay

                };

            case Breakpoints.Medium: // large tablet

                return {
                    header: cmsIds.TabletLargeHeader,
                    easierRow: cmsIds.TabletLargeEasierRow,
                    saferRow: cmsIds.TabletLargeSaferRow,
                    gantry: cmsIds.TabletLargeGantry,
                    signageChanges: cmsIds.TabletLargeSignageChanges,
                    signageChangesExpanded: cmsIds.TabletLargeSignageChangesExpanded,
                    faqTitle: cmsIds.TabletLargeFAQTitle,
                    tollPolicyRoadWay:cmsIds.TabletLargeTollPolicyRoadWay

                };

            case Breakpoints.Large: // desktop
            case Breakpoints.XLarge: // desktop

                return {
                    header: cmsIds.DesktopHeader,
                    easierRow: cmsIds.DesktopEasierRow,
                    saferRow: cmsIds.DesktopSaferRow,
                    gantry: cmsIds.DesktopGantry,
                    signageChanges: cmsIds.DesktopSignageChanges,
                    signageChangesExpanded: cmsIds.DesktopSignageChangesExpanded,
                    faqTitle: cmsIds.DesktopFAQTitle,
                    tollPolicyRoadWay:cmsIds.DesktopTollPolicyRoadWay

                };


            default:
                break;
        }

    }

    mapSiteCoreReq(cmsIdArray: string[]) {

        const reqs: { itemId: string }[] = [];

        cmsIdArray.forEach(id => {
            const req = { itemId: id };
            reqs.push(req);
        });

        return reqs;
    }


    parseResponse(res) {
        const parsedResponses = [];
        if (res.responses && res.responses.length > 0) {

            const responses: any[] = res.responses;
            responses.forEach(response => {
                const cmsRes = response.cmsResponse.toString();
                const cmsJson = JSON.parse(cmsRes);

                cmsJson.Image = this.cmsUtilService.parseAllImageAttributes(cmsJson.Image).image;

                parsedResponses.push(cmsJson);
            });

            const resMap = new Map<string, any>();
            parsedResponses.forEach(parsedRes => {
                resMap.set(parsedRes.ItemID.toUpperCase(), parsedRes);
            });

            return resMap;
        }
    }

    getTexts(cmsRes) {
        const texts = [
            cmsRes.ContentText1 ? cmsRes.ContentText1 : '',
            cmsRes.ContentText2 ? cmsRes.ContentText2 : '',
            cmsRes.ContentText3 ? cmsRes.ContentText3 : ''
        ];
        return texts.filter(text => text !== '');
    }

    parseData(cmsObj, resMap: Map<string, any>) {

        return {
            header: {
                about: {
                    image: resMap.get(cmsObj.header).Image,
                    texts: this.getTexts(resMap.get(cmsObj.header))

                },
                benefits: {
                    easier: {
                        image: resMap.get(cmsObj.easierRow).Image,
                        texts: this.getTexts(resMap.get(cmsObj.easierRow))

                    },
                    safer: {
                        image: resMap.get(cmsObj.saferRow).Image,
                        texts: this.getTexts(resMap.get(cmsObj.saferRow))

                    }
                },
                gantry: {
                    image: resMap.get(cmsObj.gantry).Image,
                    texts: this.getTexts(resMap.get(cmsObj.gantry))

                }
            },
            signage: {
                content: {
                    image: [resMap.get(cmsObj.signageChanges).Image],
                    texts: this.getTexts(resMap.get(cmsObj.signageChanges))
                },
                expanded: {
                    content: {
                        image: resMap.get(cmsObj.signageChangesExpanded).Image,
                        texts: this.getTexts(resMap.get(cmsObj.signageChangesExpanded))
                    },
                    children: this.getSignageExpanded(resMap.get(cmsObj.signageChangesExpanded))
                }
            },
            tollPolicyRoadWay: {
                image: [resMap.get(cmsObj.tollPolicyRoadWay).Image],
                texts: this.getTexts(resMap.get(cmsObj.tollPolicyRoadWay))
            },
            faq: {
                title: resMap.get(cmsObj.faqTitle).LongDescription
            }
        } as IQueryAet;

    }

    getSignageExpanded(cmsRes) {
        const signageExpandedChildren: IContent[] = [];
        cmsRes.Children.forEach(child => {
            signageExpandedChildren.push({
                image: this.cmsUtilService.parseAllImageAttributes(child.Image).image,
                texts: this.getTexts(child)
            });

        });

        return signageExpandedChildren;
    }

}

