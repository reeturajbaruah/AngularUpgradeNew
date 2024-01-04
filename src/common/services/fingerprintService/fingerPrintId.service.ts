import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FingerprintService {

  private fingerprintId: string;

  constructor() { }

  public setFingerprintId(fingerprintId: string): void {
    this.fingerprintId = fingerprintId || '';
  }

  public getFingerprintId(): string {
    return this.fingerprintId;
  }


}
