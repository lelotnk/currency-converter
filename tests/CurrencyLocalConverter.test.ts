import ConvertCurrencies from "../src/core/UseCases/ConvertCurrencies";
import LocalConverter from "../src/services/LocalConverter";

test('It should convert USD to BRL', async function(){

    const converter = new LocalConverter();

    const convertCurrenciesUseCase = new ConvertCurrencies(converter);

    const {codeFrom, codeTo, amountFrom, amountTo, rate} = await convertCurrenciesUseCase.execute("USD", "BRL", 1);

    expect(codeFrom).toBe('USD');
    expect(codeTo).toBe('BRL');
    expect(amountFrom).toBe(1);
    expect(amountTo).toBe(5);
    expect(rate).toBe(5);
});

test('It should convert BRL to USD', async function(){

    const converter = new LocalConverter();

    const convertCurrenciesUseCase = new ConvertCurrencies(converter);

    const {codeFrom, codeTo, amountFrom, amountTo, rate} = await convertCurrenciesUseCase.execute("BRL", "USD", 5);

    expect(codeFrom).toBe('BRL');
    expect(codeTo).toBe('USD');
    expect(amountFrom).toBe(5);
    expect(amountTo).toBe(1);
    expect(rate).toBe(0.2);
});

test('It should convert BRL to ARS', async function(){

    const converter = new LocalConverter();

    const convertCurrenciesUseCase = new ConvertCurrencies(converter);

    const {codeFrom, codeTo, amountFrom, amountTo, rate} = await convertCurrenciesUseCase.execute("BRL", "ARS", 5);

    expect(codeFrom).toBe('BRL');
    expect(codeTo).toBe('ARS');
    expect(amountFrom).toBe(5);
    expect(amountTo).toBe(300);
    expect(rate).toBe(60);
});

test('It should convert ARS to BRL', async function(){

    const converter = new LocalConverter();

    const convertCurrenciesUseCase = new ConvertCurrencies(converter);

    const {codeFrom, codeTo, amountFrom, amountTo, rate} = await convertCurrenciesUseCase.execute("ARS", "BRL", 300);

    expect(codeFrom).toBe('ARS');
    expect(codeTo).toBe('BRL');
    expect(amountFrom).toBe(300);
    expect(amountTo).toBe(5.01);
    expect(rate).toBe(0.0167);
});