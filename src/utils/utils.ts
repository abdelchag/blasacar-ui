export class Utils {

    public static isNullOrUndefined<T>(object: T | undefined | null): boolean {
        return object === undefined || object === null;
    }

    public static isArrayEmpty<T>(array: T[] | undefined | null): boolean {
        return this.isNullOrUndefined(array) || array.length === 0;
    }

}
