import { betainc } from "../dist/esm/index.js";


let digits = 15;

test("Check betainc function", () => {
    // results by beta_inc(a, b, x, 1 - x) in Julia SpecialFunction package
    expect(betainc(0.001, 1.1, 2)).toBeCloseTo(0.0010519418846602815, digits);
    expect(betainc(0.1, 1, 2)).toBeCloseTo(0.1899999999999995, digits);
    expect(betainc(0.4, 1.5, 2.5)).toBeCloseTo(0.5731324201681522, digits);
    expect(betainc(0.8, 3, 4)).toBeCloseTo(0.98304, digits);
    expect(betainc(0.999, 4.5, 3.5)).toBeCloseTo(0.9999999988252123, digits);

    expect(betainc(0.001, 1.1, 2, { upper: true }))
        .toBeCloseTo(0.9989480581153397, digits);
    expect(betainc(0.1, 1, 2, { upper: true }))
        .toBeCloseTo(0.81000, digits);
    expect(betainc(0.4, 1.5, 2.5, { upper: true }))
        .toBeCloseTo(0.4268675798318478, digits);
    expect(betainc(0.8, 3, 4, { upper: true }))
        .toBeCloseTo(0.01696, digits);
    expect(betainc(0.999, 4.5, 3.5, { upper: true }))
        .toBeCloseTo(1.1747876832799147e-9, digits);
});

