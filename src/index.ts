import ConvertCurrencies from "./UseCases/ConvertCurrencies";
import BCBConverter from "./services/BCBConverter";

export class Converter {
    static async convert(currencyCodeFrom: string, currencyCodeTo: string, amount: number, date?: string) {
        const converter = new BCBConverter();

        const convertCurrenciesUseCase = new ConvertCurrencies(converter);

        return await convertCurrenciesUseCase.execute(currencyCodeFrom, currencyCodeTo, amount, date);
    }
}