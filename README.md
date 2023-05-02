# Currency Converter

Conversor de moedas utilizando a API do Banco Central do Brasil


```
import { Converter } from './dist/index';

Converter.convert("USD", "BRL", 1)
    .then(response =>  console.log(response));
```

```
const { Converter } = require('./dist');

Converter.convert("USD", "BRL", 1)
    .then(response =>  console.log(response));
```