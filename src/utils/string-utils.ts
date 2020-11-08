export class StringUtils {

    public static equals(value1: string, value2: string) {
        return value1 === value2;
    }

    public static equalsIgnoreCase(value1: string, value2: string) {
        return value1.toUpperCase() === value2.toUpperCase();
    }

}
