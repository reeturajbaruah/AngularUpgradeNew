import { Injectable } from '@angular/core';
import { StateRegistry, StateService } from '@uirouter/core';
import { FutureRoutesService } from 'common/services/futureRoutes.service';
import { isObject } from 'common/utilities/object';
import { LinkAuthorizationService } from 'menu/services';
import { from, fromEventPattern, Observable, of } from 'rxjs';
import { concatMap, debounceTime, combineLatest, merge } from 'rxjs/operators';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { PaymentPlanRoutes, stateNames, urlPaths } from 'paymentplans/constants';
import { UserRoles } from 'constants/userRoles.constants';



export interface CmsMenuLink {
    Url: string;
    Label: string;
    Children: CmsMenuLink[];
}

export interface LinkInfo {
    url: string;
    label: string;
    hasChildren: boolean;
    name: string;
    external: boolean;
    authorizedChildren: LinkInfo[];
    collapse?: boolean;
    level?: number;
}

interface Route {
    name: string;
    url: string;
}

interface AngjsRoute extends Route {
    data?: { authorizedRoles?: string[] };
}

interface AngularRoute extends Route {
    resolve?: { authorizedRoles?: string[] }[];
}

type UrlInfoDictionary = Map<string, { name: string; authorizedRoles: string[] }>;

@Injectable()
export class MenuLinkMapperService {

    constructor(
        private authService: AuthenticationService,
        private stateRegistry: StateRegistry,
        private stateService: StateService,
        private futureRoutes: FutureRoutesService,
        private linkAuthorizationService: LinkAuthorizationService,
        private userRoles: UserRoles
    ) { }

    private getUrlPath(url: string) {
        try {
            return new URL(url, 'https://hctra.org').pathname.toLowerCase();
        } catch {
            //IE does not support URL
            return url.toLowerCase();
        }
    }

    private getAuthorizedRoles({ data, resolve }: AngularRoute & AngjsRoute): string[] {

        const angularAuthRoles = Array.isArray(resolve)
            && resolve
                .map(x => x.authorizedRoles)
                .find(authorizedRoles => Array.isArray(authorizedRoles));

        const angularjsAuthRoles = isObject(data)
            && Array.isArray(data.authorizedRoles)
            && data.authorizedRoles;

        return [...(angularAuthRoles || angularjsAuthRoles || [])];
    }

    private getFullUrl(name: string, stateNamesMap: Map<string, string>): string {

        const splitName = name.split('.');
        let fullName = '';
        let fullUrl = '';

        for (const part of splitName) {
            fullName += part;

            fullUrl += stateNamesMap.get(fullName) || '';

            fullName += '.';
        }

        return this.getUrlPath(fullUrl);
    }

    private get urlInfoMap() {

        const allRoutes = [
            ...this.stateService.get(),
            //possible duplicates will be taken care of by the Maps below
            //addFutureRoutes last so lazyRoutes get overwritten by furture routes
            // lazy { name: MissedAToll.**, url: /MissedAToll}
            // future { name: MissedAToll.Landing , url: /MissedAToll}
            ...this.futureRoutes.get()
        ]
            .filter(currentState => currentState.name)
            .filter(currentState => currentState.url);

        const stateNamesMap = allRoutes.reduce((acc, curr) => {

            acc.set(curr.name, curr.url);

            return acc;
        }, new Map<string, string>());

        return allRoutes
            .map(currentState => ({
                name: currentState.name,
                fullUrl: this.getFullUrl(currentState.name, stateNamesMap),
                authorizedRoles: this.getAuthorizedRoles(currentState as AngjsRoute & AngularRoute)
            }))
            .filter(({ fullUrl }) => fullUrl)
            .reduce((acc, { name, fullUrl, authorizedRoles }) => {

                acc.set(fullUrl, { name, authorizedRoles });
                return acc;

            }, new Map() as UrlInfoDictionary );


    }

    private async mapFilterHelper(links: CmsMenuLink[], urlInfoMap: UrlInfoDictionary) {

        //stack overflow not really possible with the shallow depth of our menu 
        //however still await here to prevent stackoverflow
        //the await below and the remote possibility of stackoverflow is the only reason this method is async
        const result: LinkInfo[] = await [];

        for (const { Label: label, Url: url, Children } of links.filter(x => x.Label)) {


            if (url && url.toLowerCase().startsWith('http')) {
                //external link
                result.push({
                    url,
                    label,
                    external: true,
                    hasChildren: false,
                    authorizedChildren: [],
                    name: null
                });
                continue;
            }

            // if(url == '/Procurement') {
            //     debugger;
            // }

            const hasChildren = Children.length > 0;
            const authorizedChildren = hasChildren ? await this.mapFilterHelper(Children, urlInfoMap) : [];
            const hasAuthorizedChildren = authorizedChildren.length > 0;

            let authorizedRoles: string[];
            let name: string;

            if (hasChildren) {
                authorizedRoles = [];
                name = null;
            } else {
                const urlInfo = urlInfoMap.get(this.getUrlPath(url));

                if (urlInfo) {
                    authorizedRoles = urlInfo.authorizedRoles;
                    name = urlInfo.name;
                } else {
                    //this has to be a CMS page, it came from CMS! But not registered?
                    authorizedRoles = [this.userRoles.anonymous];
                    name = label;
                }   
            }

            //const { authorizedRoles, name } = (!hasChildren && urlInfoMap.get(this.getUrlPath(url))) || { authorizedRoles: [] as string[], name: null };


            //maybe add another condition for cms visibility? if cms has authorized roles
            //think about it later
            const isLinkAuthorized = hasChildren
                ? hasAuthorizedChildren
                : this.linkAuthorizationService.isAllowed({ url, authorizedRoles });

            if (isLinkAuthorized) {
                result.push({
                    label,
                    url: hasChildren
                        ? `#${label || ''} sub menu`
                            .trim()
                            .toLowerCase()
                            .split(/\s+/).join('-')
                        : url,
                    name,
                    hasChildren,
                    authorizedChildren,
                    external: false
                });
            }
        }

        
        if(this.authService.isAuthenticated()){
            if (result && result[0]?.authorizedChildren) {
                for (const link of result[0].authorizedChildren) {
                    if (link.label === 'Payment Plans') {
                        link.url = urlPaths.accountOverviewSummary;
                        link.name = stateNames.AccountOverviewSummary;
                    }
                }
            }}

   

        return result;
    }

    public async mapFilter(links: CmsMenuLink[]) {

        return this.mapFilterHelper(links, this.urlInfoMap);       

    }

    public getMapFilterObservable(links: Observable<CmsMenuLink[]>, debounce = 100): Observable<LinkInfo[]> {

        return (of('now'))
            .pipe(
                merge(this.authService.isAuthenticated$),
                merge(fromEventPattern(
                    handler => this.stateRegistry.onStatesChanged(handler),
                    (_, remove) => remove())),

                combineLatest(links),

                //debounce as onStatesChanges emits rapdily on page load (lot of dynamic states)
                debounceTime(debounce),
                concatMap(([, linksValue]) => from(this.mapFilter(linksValue)))
            );
        
    }
}
