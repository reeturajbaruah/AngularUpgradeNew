import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-timezone';

@Pipe({ name: 'dateWithTimeZone' })
export class DateWithTimeZonePipe implements PipeTransform {

    private getDateFormat(formatAlias: string): string {
        return {

            accountHeader: 'MMMM DD, YYYY z',
            dateTimeFull: 'MM/DD/YYYY hh:mm:ss A z',
            dateTimeNoSeconds: 'MM/DD/YYYY hh:mm A z',
            date1: 'MMM DD, YYYY z',
            date2: 'MM/DD/YYYY z',
            date3: 'MM/DD/YYYY',
            date4: 'MMM D, YYYY',
            time1: 'hh:mm:ss A z',
            //date4: 'MM/DD/YY z',
            //dateTime1: 'MM/DD/YY hh:mm:ss A z',
            //dateTime2: 'MM/DD/YYYY - HH:mm z',
            dateTime3: 'MMM D, YYYY h:mm:ss A z',
            dateTime4: 'MMM D, YYYY h:mm A z',
            dateTime5: 'MM/DD/YY hh:mm A z',
        }[formatAlias] || formatAlias;
    }

    public transform = (date: Date | number | string, formatAlias?: string, timezone?: string) => date
            ? moment
                .tz(date, timezone || 'America/Chicago')
                .format(this.getDateFormat(formatAlias))
            : date;
}
