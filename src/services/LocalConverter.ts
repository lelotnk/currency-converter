import Conversion from "../core/Contracts/Conversion";
import CurrencyConverter from "../core/Contracts/Converter";
import Amount from "../core/Values/Amount";
import Currency from "../core/Values/Currency";

export default class LocalConverter implements CurrencyConverter {

    private currencies = [
        {code: "USD", rateToBuyUSD: 1.00000, rateToSellUSD: 1.00000},
        {code: "BRL", rateToBuyUSD: 0.20000, rateToSellUSD: 5.00000},
        {code: "ARS", rateToBuyUSD: 0.00334, rateToSellUSD: 300.00000},
    ];

    convert(from: Currency, to: Currency, amountFrom: Amount): Promise<Conversion> {

        const codeFrom = this.currencies.find(currency => currency.code === from.getCode());
        const codeTo = this.currencies.find(currency => currency.code === to.getCode());

        if (!codeFrom || !codeTo) {
            throw Error("Currency not found");
        }

        const amountTo = amountFrom.getValue() * codeFrom.rateToBuyUSD * codeTo.rateToSellUSD;
        const rate = amountTo / amountFrom.getValue();

        return Promise.resolve({
            codeFrom: codeFrom.code,
            codeTo: codeTo.code,
            amountFrom: amountFrom.getValue(),
            amountTo,
            rate
        });
    }
}