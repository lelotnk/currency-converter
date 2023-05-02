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