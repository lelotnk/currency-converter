import ConvertCurrencies from "../src/core/UseCases/ConvertCurrencies";
import BCBConverter from "../src/services/BCBConverter";

test('It should convert USD to BRL', async function(){

    const converter = new BCBConverter();

    const convertCurrenciesUseCase = new ConvertCurrencies(converter);

    const {codeFrom, codeTo, amountFrom, amountTo, rate} = await convertCurrenciesUseCase.execute("USD", "BRL", 1);
    
    expect(codeFrom).toBe('USD');
    expect(codeTo).toBe('BRL');
    expect(amountFrom).toBe(1);
    expect(amountTo).toBeGreaterThan(0);
    expect(rate).toBeGreaterThan(0);
});

test('It should convert USD to BRL at a specific date', async function(){

    const converter = new BCBConverter();

    const convertCurrenciesUseCase = new ConvertCurrencies(converter);

    const {codeFrom, codeTo, amountFrom, amountTo, rate} = await convertCurrenciesUseCase.execute("USD", "BRL", 1, "2023-04-14");
    
    expect(codeFrom).toBe('USD');
    expect(codeTo).toBe('BRL');
    expect(amountFrom).toBe(1);
    expect(amountTo).toBe(4.9449);
    expect(rate).toBe(4.9449);
});