"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betainc = void 0;
const special_gammaln_1 = require("@toshiara/special-gammaln");
// Returns the incomplete beta function I_x(a,b)
function betainc(x, a, b, { upper = false } = {}) {
    if (x < 0 || x > 1) {
        // return false;
        return 0;
    }
    // Factors in front of the continued fraction.
    const bt = (x === 0 || x === 1) ? 0 :
        Math.exp((0, special_gammaln_1.gammaln)(a + b) - (0, special_gammaln_1.gammaln)(a) - (0, special_gammaln_1.gammaln)(b) +
            a * Math.log(x) + b * Math.log(1 - x));
    if (upper) {
        [a, b] = [b, a];
        x = 1 - x;
    }
    if (x < (a + 1) / (a + b + 2)) {
        // Use continued fraction directly.
        return bt / a * betacf(x, a, b);
    }
    else {
        // else use continued fraction after making the symmetry transformation.
        return 1 - bt / b * betacf(1 - x, b, a);
    }
}
exports.betainc = betainc;
;
// Evaluates the continued fraction for incomplete beta function
// by modified Lentz's method.
function betacf(x, a, b) {
    const EPS = 1e-16;
    const fpmin = 1e-30;
    const qab = a + b;
    const qap = a + 1;
    const qam = a - 1;
    let c = 1;
    let d = 1 - qab * x / qap;
    // These q's will be used in factors that occur in the coefficients
    if (Math.abs(d) < fpmin) {
        d = fpmin;
    }
    d = 1 / d;
    let h = d;
    for (let m = 1; m <= 1000; m++) {
        let m2 = 2 * m;
        let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
        // One step (the even one) of the recurrence
        d = 1 + aa * d;
        if (Math.abs(d) < fpmin) {
            d = fpmin;
        }
        c = 1 + aa / c;
        if (Math.abs(c) < fpmin) {
            c = fpmin;
        }
        d = 1 / d;
        h *= d * c;
        aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
        // Next step of the recurrence (the odd one)
        d = 1 + aa * d;
        if (Math.abs(d) < fpmin) {
            d = fpmin;
        }
        c = 1 + aa / c;
        if (Math.abs(c) < fpmin) {
            c = fpmin;
        }
        d = 1 / d;
        let del = d * c;
        h *= del;
        if (Math.abs(del - 1.0) < EPS) {
            break;
        }
    }
    return h;
}
;
