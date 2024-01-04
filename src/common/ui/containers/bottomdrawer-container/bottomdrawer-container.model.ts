export interface IBDConfig {
    headers: IBDHeader[];
    data: IBDRow[];
}

export interface IBDHeader {
    label: string;
    fxFlexValue: string;
    position: number;
    isPrimary: boolean;
}

export interface IBDRow {
    columns: IBDColumn[];
    content: string;
    isSelected: boolean;
}

export interface IRowFxFlexValue {
    fxFlexValue: string;
    isPrimary: boolean;
}

export interface IBDColumn {
    label: string;
    isPrimary: boolean;
}
