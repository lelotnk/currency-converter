import Conversion from "../core/Contracts/Conversion";
import CurrencyConverter from "../core/Contracts/Converter";
import Amount from "../core/Values/Amount";
import Currency from "../core/Values/Currency";

export default class BCBConverter implements CurrencyConverter {

    // https://www.bcb.gov.br/estabilidadefinanceira/cotacoestodas
    private currencies: Array<{bcb_code: string, code: string}> = [
        {bcb_code: "790", code: "BRL"},
        {bcb_code: "005", code: "AFN"},
        {bcb_code: "009", code: "ETB"},
        {bcb_code: "015", code: "THB"},
        {bcb_code: "020", code: "PAB"},
        {bcb_code: "027", code: "VES"},
        {bcb_code: "030", code: "BOB"},
        {bcb_code: "035", code: "GHS"},
        {bcb_code: "040", code: "CRC"},
        {bcb_code: "045", code: "SVC"},
        {bcb_code: "051", code: "NIO"},
        {bcb_code: "055", code: "DKK"},
        {bcb_code: "060", code: "ISK"},
        {bcb_code: "065", code: "NOK"},
        {bcb_code: "070", code: "SEK"},
        {bcb_code: "075", code: "CZK"},
        {bcb_code: "090", code: "GMD"},
        {bcb_code: "095", code: "DZD"},
        {bcb_code: "100", code: "KWD"},
        {bcb_code: "105", code: "BHD"},
        {bcb_code: "115", code: "IQD"},
        {bcb_code: "125", code: "JOD"},
        {bcb_code: "130", code: "LYD"},
        {bcb_code: "132", code: "MKD"},
        {bcb_code: "133", code: "RSD"},
        {bcb_code: "134", code: "SDG"},
        {bcb_code: "135", code: "TND"},
        {bcb_code: "136", code: "SSP"},
        {bcb_code: "138", code: "XDR"},
        {bcb_code: "139", code: "MAD"},
        {bcb_code: "145", code: "AED"},
        {bcb_code: "149", code: "STN"},
        {bcb_code: "150", code: "AUD"},
        {bcb_code: "155", code: "BSD"},
        {bcb_code: "160", code: "BMD"},
        {bcb_code: "165", code: "CAD"},
        {bcb_code: "170", code: "GYD"},
        {bcb_code: "173", code: "NAD"},
        {bcb_code: "175", code: "BBD"},
        {bcb_code: "180", code: "BZD"},
        {bcb_code: "185", code: "BND"},
        {bcb_code: "190", code: "KYD"},
        {bcb_code: "195", code: "SGD"},
        {bcb_code: "197", code: "CLF"},
        {bcb_code: "200", code: "FJD"},
        {bcb_code: "205", code: "HKD"},
        {bcb_code: "210", code: "TTD"},
        {bcb_code: "215", code: "XCD"},
        {bcb_code: "220", code: "USD"},
        {bcb_code: "230", code: "JMD"},
        {bcb_code: "235", code: "LRD"},
        {bcb_code: "245", code: "NZD"},
        {bcb_code: "250", code: "SBD"},
        {bcb_code: "255", code: "SRD"},
        {bcb_code: "260", code: "VND"},
        {bcb_code: "275", code: "AMD"},
        {bcb_code: "295", code: "CVE"},
        {bcb_code: "325", code: "ANG"},
        {bcb_code: "328", code: "AWG"},
        {bcb_code: "345", code: "HUF"},
        {bcb_code: "363", code: "CDF"},
        {bcb_code: "365", code: "BIF"},
        {bcb_code: "368", code: "KMF"},
        {bcb_code: "370", code: "XAF"},
        {bcb_code: "372", code: "XOF"},
        {bcb_code: "380", code: "XPF"},
        {bcb_code: "390", code: "DJF"},
        {bcb_code: "398", code: "GNF"},
        {bcb_code: "406", code: "MGA"},
        {bcb_code: "420", code: "RWF"},
        {bcb_code: "425", code: "CHF"},
        {bcb_code: "440", code: "HTG"},
        {bcb_code: "450", code: "PYG"},
        {bcb_code: "460", code: "UAH"},
        {bcb_code: "470", code: "JPY"},
        {bcb_code: "482", code: "GEL"},
        {bcb_code: "490", code: "ALL"},
        {bcb_code: "495", code: "HNL"},
        {bcb_code: "500", code: "SLL"},
        {bcb_code: "503", code: "MDL"},
        {bcb_code: "506", code: "RON"},
        {bcb_code: "510", code: "BGN"},
        {bcb_code: "530", code: "GIP"},
        {bcb_code: "535", code: "EGP"},
        {bcb_code: "540", code: "GBP"},
        {bcb_code: "545", code: "FKP"},
        {bcb_code: "560", code: "LBP"},
        {bcb_code: "570", code: "SHP"},
        {bcb_code: "575", code: "SYP"},
        {bcb_code: "585", code: "SZL"},
        {bcb_code: "603", code: "LSL"},
        {bcb_code: "608", code: "TMT"},
        {bcb_code: "622", code: "MZN"},
        {bcb_code: "625", code: "ERN"},
        {bcb_code: "630", code: "NGN"},
        {bcb_code: "635", code: "AOA"},
        {bcb_code: "640", code: "TWD"},
        {bcb_code: "642", code: "TRY"},
        {bcb_code: "660", code: "PEN"},
        {bcb_code: "665", code: "BTN"},
        {bcb_code: "670", code: "MRO"},
        {bcb_code: "671", code: "MRU"},
        {bcb_code: "680", code: "TOP"},
        {bcb_code: "685", code: "MOP"},
        {bcb_code: "706", code: "ARS"},
        {bcb_code: "715", code: "CLP"},
        {bcb_code: "720", code: "COP"},
        {bcb_code: "721", code: "COU"},
        {bcb_code: "725", code: "CUP"},
        {bcb_code: "730", code: "DOP"},
        {bcb_code: "735", code: "PHP"},
        {bcb_code: "741", code: "MXN"},
        {bcb_code: "745", code: "UYU"},
        {bcb_code: "755", code: "BWP"},
        {bcb_code: "760", code: "MWK"},
        {bcb_code: "766", code: "ZMW"},
        {bcb_code: "770", code: "GTQ"},
        {bcb_code: "775", code: "MMK"},
        {bcb_code: "778", code: "PGK"},
        {bcb_code: "780", code: "LAK"},
        {bcb_code: "785", code: "ZAR"},
        {bcb_code: "795", code: "CNY"},
        {bcb_code: "796", code: "CNH"},
        {bcb_code: "800", code: "QAR"},
        {bcb_code: "805", code: "OMR"},
        {bcb_code: "810", code: "YER"},
        {bcb_code: "815", code: "IRR"},
        {bcb_code: "820", code: "SAR"},
        {bcb_code: "825", code: "KHR"},
        {bcb_code: "828", code: "MYR"},
        {bcb_code: "830", code: "RUB"},
        {bcb_code: "831", code: "BYN"},
        {bcb_code: "835", code: "TJS"},
        {bcb_code: "840", code: "MUR"},
        {bcb_code: "845", code: "NPR"},
        {bcb_code: "850", code: "SCR"},
        {bcb_code: "855", code: "LKR"},
        {bcb_code: "860", code: "INR"},
        {bcb_code: "865", code: "IDR"},
        {bcb_code: "870", code: "MVR"},
        {bcb_code: "875", code: "PKR"},
        {bcb_code: "880", code: "ILS"},
        {bcb_code: "892", code: "KGS"},
        {bcb_code: "893", code: "UZS"},
        {bcb_code: "905", code: "BDT"},
        {bcb_code: "912", code: "WST"},
        {bcb_code: "913", code: "KZT"},
        {bcb_code: "915", code: "MNT"},
        {bcb_code: "920", code: "VUV"},
        {bcb_code: "930", code: "KRW"},
        {bcb_code: "946", code: "TZS"},
        {bcb_code: "950", code: "KES"},
        {bcb_code: "955", code: "UGX"},
        {bcb_code: "960", code: "SOS"},
        {bcb_code: "975", code: "PLN"},
        {bcb_code: "978", code: "EUR"},
    ];

    async requestBCB(url: string): Promise<string> {
        const options = {
            method: 'GET',
            headers: {
                "Accept": "application/xml",
                "Content-Type": "application/xml"
            }
        };

        const response = await fetch(url, options);
        return await response.text();
    }

    async getLastQuotationDate(quotationDate: string) {
        let url = `https://www3.bcb.gov.br/bc_moeda/rest/cotacao/fechamento/ultima/1/220/${quotationDate}`;

        const lastQuotation = await this.requestBCB(url);

        const lastDateMatch = lastQuotation.match(/\<dataHoraCotacao\>(\d{4}\-\d{2}\-\d{2})T([0-9:.-]+)\<\/dataHoraCotacao\>/);

        if (!lastDateMatch)
            throw new Error("Could not get the BCB last quotation");

        return lastDateMatch[1]; // YYYY-MM-DD
    }

    async getBCBConversion(codeFrom: string, codeTo: string, amountFrom: number, date?: Date): Promise<{amountTo: number, rate: number}> {

        if (!date) {
            date = new Date();
        }

        let quotationDate = date.toISOString().substring(0, 10); // YYYY-MM-DD

        quotationDate = await this.getLastQuotationDate(quotationDate);

        const url = `https://www3.bcb.gov.br/bc_moeda/rest/converter/1/1/220/790/${quotationDate}`;

        const responseText = await this.requestBCB(url);

        const responseMatch = responseText.match(/\<valor-convertido\>([0-9.]+)\<\/valor-convertido\>/);

        if (!responseMatch)
            throw new Error("Could not get the response value");

        const amountTo = Number(responseMatch[1]);

        const rate = amountTo / amountFrom;

        return {amountTo, rate};
    }

    private getBCBCodes(currencyCodeFrom: string, currencyCodeTo: string) {
        const BCBCodeFrom = this.currencies.find(item => item.code === currencyCodeFrom);
        const BCBCodeTo = this.currencies.find(item => item.code === currencyCodeTo);

        if (!BCBCodeFrom || !BCBCodeTo)
            throw new Error("Could not find BCB currency code");
        
        return [BCBCodeFrom, BCBCodeTo];
    }

    async convert(currencyFrom: Currency, currencyTo: Currency, amountFrom: Amount, date?: Date): Promise<Conversion> {

        try {

            const [BCBCodeFrom, BCBCodeTo] = this.getBCBCodes(currencyFrom.getCode(), currencyTo.getCode());

            const BCBConversion = await this.getBCBConversion(BCBCodeFrom.bcb_code, BCBCodeTo.bcb_code, amountFrom.getValue(), date);

            return Promise.resolve({
                codeFrom: currencyFrom.getCode(),
                codeTo: currencyTo.getCode(),
                amountFrom: amountFrom.getValue(),
                amountTo: BCBConversion.amountTo,
                rate: BCBConversion.rate
            });

        } catch (error) {
            console.error(error);
            return Promise.reject({error: 'Could not get data from BCB.'});
        }
    }
}