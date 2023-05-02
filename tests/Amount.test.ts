import Amount from "../src/core/Values/Amount";

test('It should create an Amount instance', function(){

    const amount = new Amount(123.45);

    expect(amount.getValue()).toBe(123.45);

});

test('It should not create an Amount instance', function(){

    expect(() => new Amount(0)).toThrowError()
    expect(() => new Amount(-123.45)).toThrowError()
    expect(() => new Amount(Infinity)).toThrowError()
    expect(() => new Amount(-Infinity)).toThrowError()

});