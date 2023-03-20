export function analyzeArray(array) {
    let min;
    let max;
    let average = array.reduce((a, b ) => a + b) / array.length;
    let length = array.length;
    const sort = () => {
        let res = array.sort((a, b) => a - b);
        min = res[0];
        max = res[res.length - 1];
    };
    sort(array);

    return {min, max, average, length};
}
