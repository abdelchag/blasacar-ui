import { Injectable } from '@angular/core';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const wscols = this.autofitColumns(json);

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    worksheet['!cols'] = wscols;

    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().toLocaleDateString() + EXCEL_EXTENSION);
  }

  private autofitColumns(json: any[]): any[] {
    const wscols: any[] = [];
    for (let i = 0; i < json.length; i++) {
      const value = <any>Object.values(json[i]);
      const keys = <any>Object.keys(json[i]);
      for (let j = 0; j < value.length; j++) {
        if (typeof value[j] === 'number') {
          wscols[j] = { width: 10 };
        } else {
          let objectMaxLength = wscols[j] ? wscols[j].width : keys[j].length + 1;
          objectMaxLength = objectMaxLength >= (value[j].length + 3) ? objectMaxLength : value[j].length + 3; // in case it's caps
          wscols[j] = { width: objectMaxLength };
        }
      }
    }
    return wscols;
  }
}
