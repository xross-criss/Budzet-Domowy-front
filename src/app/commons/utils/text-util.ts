export class TextUtil {

    public static pad(num: number | string, size: number): string {
        let s = num + '';
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    }

}
