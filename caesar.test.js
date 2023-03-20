import {caesarCipher} from "../caesar";

test("Return with shift of 1", () => {
    expect(caesarCipher("carlos", 1)).toMatch(/dbsmpt/);
})

test("Return with shift superior to 1", () => {
    expect(caesarCipher("carlos", 10)).toMatch(/mkbuyc/);
})

test("Works with more than one word", () => {
    expect(caesarCipher("como estas amigo", 1)).toMatch(/dpnp ftubt bnjhp/)
})

test("Works with upper and lowecase characters", () => {
    expect(caesarCipher("Como Estas Pa", 1)).toMatch(/Dpnp Ftubt Qb/);
})

test("Function respect punctuation", () => {
    expect(caesarCipher("Como- Estas: Pa.", 1)).toMatch(/Dpnp- Ftubt: Qb./)
})
