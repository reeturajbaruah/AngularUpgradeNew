import { StateConfig } from 'common/interfaces';
import { AuthResolve, CmsResolve } from 'common/resolvers';
import { userRoles } from 'constants/module';
import { NewsCmsIds, NewsRoutes, NewsStateNames } from './news.constants';


export const NewsRoutesStateConfig: StateConfig[] = [

    {
        name: NewsStateNames.News.toString(),
        url: NewsRoutes.News.toString(),
        settings: {},
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('newsCms', { mergeParams: true, ItemId: NewsCmsIds.pageCmsId }),

        ],
    },

    {
        name: NewsStateNames.NewsArticle.toString(),
        url: NewsStateNames.NewsArticle.toString(),
        params: {
            CmsId: null
        },
        settings: {
            isHybrid: false
        },
        resolve: [
            AuthResolve(userRoles.anonymous),
            CmsResolve('newsArticleCms', { mergeParams: true, ItemId: NewsCmsIds.pageCmsId })
        ]
    }

];


