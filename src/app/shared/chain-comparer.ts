export class ChainComparer<T> {
    private getTarget: (T) => unknown;
    private previous: ChainComparer<T>;
    constructor(private a: T, private b: T) {
    }

    compareBy(getTarget: (T) => unknown) {
        let result = new ChainComparer<T>(this.a, this.b);
        result.getTarget = getTarget;
        result.previous = this;
        return result;
    }

    evaluate(): number {
        const previous = this.previous?.evaluate();
        if (!!previous)
            return previous;

        if (!!this.getTarget) {
            if (this.getTarget(this.a) < this.getTarget(this.b))
                return -1;
            if (this.getTarget(this.a) > this.getTarget(this.b))
                return 1;
        }
        return 0;
    }
}
