export class Report {

    constructor(
        public income: number,
        public burden: number,
    ) {
    }

    public static fromObject(obj: any): Report {
        return new Report(
            obj.income,
            obj.burden,
        );
    }
}
