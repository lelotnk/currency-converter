import Amount from "../Values/Amount";
import Currency from "../Values/Currency";
import Conversion from "./Conversion";

export default interface CurrencyConverter {
    convert(currencyFrom: Currency, currencyTo: Currency, amountFrom: Amount, date?: Date): Promise<Conversion>;
}