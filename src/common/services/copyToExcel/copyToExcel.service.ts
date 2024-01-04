import { Inject, Injectable } from '@angular/core';
import { WindowRef } from 'common/providers';

@Injectable()
export class CopyToExcelService {

    constructor(@Inject(WindowRef) private window: Window
    ) { }

    getDataForExcel(rawData: any[], cols: string[]) {
        const doctype = this.window.document.implementation.createDocumentType(
            'html',
            '-//W3C//DTD XHTML 1.0 Strict//EN',
            'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'
        );

        const dom = document.implementation.createDocument(
            'http://www.w3.org/1999/xhtml',
            'html',
            doctype
        );

        const newHeadRow = this.getExcelTblHeadRow(cols);

        const newRows = this.getExcelTblRows(rawData, cols);

        const newTbl = '<table>' + newHeadRow + newRows.join('') + '</table>';

        return newTbl;
    }

    private getExcelTblRows(rawData: any[], cols: string[]) {
        const newRows = [];

        rawData.forEach(obj => {
            const newTDs = [];

            cols.forEach(col => {
                const newTd = '<td>' + (obj[col] === undefined ? ' ' : obj[col]) + '</td>';
                newTDs.push(newTd);
            });

            const newRow = '<tr>' + newTDs.join('') + '</tr>';

            newRows.push(newRow);
        });

        return newRows;
    }


    private getExcelTblHeadRow(cols: string[]) {
        const newHeadCols = [];

        if (cols.length > 0) {

            cols.forEach(col => {
                const newCol = '<td>' + col.toUpperCase() + '</td>';
                newHeadCols.push(newCol);
            });

            return '<tr>' + newHeadCols.join('') + '</tr>';


        }
    }

}
