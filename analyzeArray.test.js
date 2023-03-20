import { analyzeArray } from "../analyzeArray";

test("Analyze array",() => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({min: 1, max: 8, average: 4, length: 6});
})
