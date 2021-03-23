import { BlasaUtils } from './blasa-utils';

export class StringUtils {

    public static readonly EMPTY = '';

    public static equals(value1: string, value2: string): boolean {
        return value1 === value2;
    }

    public static equalsIgnoreCase(value1: string, value2: string): boolean {
        return value1.toUpperCase() === value2.toUpperCase();
    }

    public static isEmpty(value: string): boolean {
        return BlasaUtils.isNullOrUndefined(value) || value.length === 0;
    }

    public static isNotEmpty(value: string): boolean {
        return !this.isEmpty(value);
    }

}
