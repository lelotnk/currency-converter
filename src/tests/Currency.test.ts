import Currency from "../core/Values/Currency";

test('It should create a Currency', function(){

    const currency = new Currency('BRL');

    expect(currency.getCode()).toBe('BRL');

});

test('It should not create a Currency', function(){

    expect(() => new Currency('R$')).toThrowError()

});