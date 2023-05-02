import Conversion from "../core/Contracts/Conversion";
import CurrencyConverter from "../core/Contracts/Converter";
import Amount from "../core/Values/Amount";
import Currency from "../core/Values/Currency";

export default class ConvertCurrencies {

    converter: CurrencyConverter;

    constructor(converter: CurrencyConverter) {
        this.converter = converter;
    }

    async execute(currencyCodeFrom: string, currencyCodeTo: string, amount: number, date?: string): Promise<Conversion> {

        const currencyFrom = new Currency(currencyCodeFrom);
        const currencyTo = new Currency(currencyCodeTo);
        const currencyAmount = new Amount(amount);

        let quotationDate = undefined;

        if (date && (new Date(date)).toISOString().substring(0, 10) === date) {
            quotationDate = new Date(date);
        }

        const conversion = this.converter.convert(currencyFrom, currencyTo, currencyAmount, quotationDate);

        return conversion;
    }
}