import { BlasaUtils } from './blasa-utils';

export class ArrayUtils {

  public static readonly EMPTY = [];

  public static contains(array: any[], element: any): boolean {
    if (ArrayUtils.isEmpty(array)) {
      return false;
    }
    return array.indexOf(element) >= 0;
  }

  public static isEmpty(array: any[]): boolean {
    return BlasaUtils.isNullOrUndefined(array) || array.length === 0;
  }

  public static isNotEmpty(array: any[]): boolean {
    return !ArrayUtils.isEmpty(array);
  }

}
