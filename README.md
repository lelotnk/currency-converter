# Currency Converter

Conversor de moedas utilizando a API do Banco Central do Brasil


```
import { Converter } from '@lelotnk/currency-converter';

Converter.convert("USD", "BRL", 1)
    .then(response =>  console.log(response));
```

```
const { Converter } = require('@lelotnk/currency-converter');

Converter.convert("USD", "BRL", 1)
    .then(response =>  console.log(response));
```

### Result

```
{
  codeFrom: 'USD',
  codeTo: 'BRL',
  amountFrom: 1,
  amountTo: 5.0001,
  rate: 5.0001
}
```