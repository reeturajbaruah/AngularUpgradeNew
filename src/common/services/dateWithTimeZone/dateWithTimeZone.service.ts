import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateWithTimeZoneService {

  constructor() { }

  private standardize(date: string, format: string): string {
    return moment(new Date(date)).format(format);
  }

  private toCentral(date: string, format: string): string {
    return moment.tz(date, 'America/Chicago').format(format);
  }

  public withoutOffsetToCentral(date: string, format: string): string {
    return this.toCentral(this.standardize(date, 'YYYY-MM-DDTHH:mm:ss'), format);
  }

  public withOffsetToCentral(date: string, format: string): string {
    return this.toCentral(this.standardize(date, 'YYYY-MM-DDTHH:mm:ssZ'), format);
  }

}
