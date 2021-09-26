import { BlasaUtils } from './blasa-utils';
import * as moment from 'moment';

export class DateUtils {

    public static transform(date: Date, format: string = 'DD-MM-yyyy'): string {
        if (BlasaUtils.isNullOrUndefined(date)) {
            return null;
        }
        return moment(date).format(format);
    }

}
