import * as some from "../strings";

test("Take string and return string capitalized", () => {
    expect(some.capitalize("bebeto")).toMatch(/Bebeto/);
})

test("Take a string and return it reversed", () => {
    expect(some.reversed("bebeto")).toMatch(/otebeb/);
})
