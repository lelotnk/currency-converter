export default class Amount {
    private amount: number;

    constructor(amount: number) {

        if (!this.isNatural(amount))
            throw new Error("Could not parse the amount");

        this.amount = amount;
    }

    isNatural(amount: number): boolean {
        if (!/([0-9.]+)/.test(amount.toString()) || !(amount > 0)) {
            return false;
        }
        return true;
    }

    getValue() {
        return this.amount;
    }
}