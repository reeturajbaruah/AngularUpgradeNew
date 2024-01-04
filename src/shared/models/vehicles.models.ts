import { IEZTag } from 'shared/vehicle-info';

export interface ITagsOrdered {
    title: string;
    tags: [{
        title: string;
        ezTags: IEZTag[];
        isPlate?: boolean;
    }];
}

