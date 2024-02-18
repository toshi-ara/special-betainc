# Regularized incomplete Beta function

> Evaluates the regularized [incomplete beta function](https://en.wikipedia.org/wiki/Incomplete_beta_function)

The [incomplete beta function](https://en.wikipedia.org/wiki/Beta_function)
 is defined as

```math
\mathrm{B}(x; a, b) = \int_0^x t^{a-1}(1-t)^{b-1}\,\mathrm{d}t
```

The **regularized incomplete beta function**
 (or **regularized beta function** for short) is defined
 in terms of the incomplete beta function and the complete beta function:

```math
\mathrm{I}_{x}(a, b) = \dfrac{\mathrm{B}(x; a, b)}{\mathrm{B}(a, b)}
```


This package is a rewrite of
 [jstat](https://www.npmjs.com/package/jstat)
 in Typescript.
This package supports both CommonJs and ES Modules.


## Installation

``` bash
$ npm install @toshiara/special-betainc
```


## Usage

``` javascript
// for CommonJs
const { betainc } = require('@toshiara/special-betainc');

// for ES Modules
import { betainc } from '@toshiara/special-betainc';
```

### betainc(x, a, b)

Evaluates the regularized lower
[incomplete beta function](https://en.wikipedia.org/wiki/Incomplete_beta_function)
 for inputs `x`, `a > 0` and `b > 0`.

```javascript
betainc(0.001, 1.1, 2);
// returns 0.001051941884660282

betainc(0.1, 1, 2)
// returns 0.18999999999999992

betainc(0.4, 1.5, 2.5)
// returns 0.5731324201681518

betainc(0.8, 3, 4)
// returns 0.98304

betainc(0.999, 4.5, 3.5)
// returns 0.9999999988252123
```


## License

[MIT license](http://opensource.org/licenses/MIT).

