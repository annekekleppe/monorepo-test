export class Teller {
    current: number = 0;

    increase(): number {
        this.current++;
        console.log("Value of current: " + this.current);
        return this.current;
    }
}
