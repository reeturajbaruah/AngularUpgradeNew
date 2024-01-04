import { Type } from '@angular/core';
import { DateRange as DateRangeType } from '@angular/material/datepicker';

export enum FilterName {
    Transaction,
    Vehicle,
    DateRange
}

export interface IType {
    component: Type<any>;
}

export interface IFilter {
    name: FilterName;
    type: IType;
    order: number;
    defaultVal?: any;
}

export enum SortFilterName {
    Date = 'Date'
}

export interface ISortFilter {
    name: SortFilterName;
    type: IType;
    order: number;
    defaultVal?: string;
    sortOrder: SortOder.Descending;
}

export enum SortOder {
    Ascending,
    Descending
}

export interface IFilterCategories {
    filteredBy?: IFilter[];
    sortedBy?: ISortFilter[];
}

export enum EventType {
    Filter,
    SortFilter
}

export interface IFilterEvent {
    name: FilterName;
    value: string | DateRangeType<Date>;
    eventType: EventType.Filter;
}

export interface ISortFilterEvent {
    name: SortFilterName;
    value: string;
    eventType: EventType.SortFilter;
    sortOder: SortOder;
}
