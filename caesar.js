export function caesarCipher(str, shift){ 

    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
                "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v",
                "w", "x", "y", "z"];

    let strCopy = [];
    let key = (i, shift) => {return (i) + shift - 27};

    for (let char of str) {
        if(char == " ") strCopy.push(char);
        else if ((/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g).test(char)) strCopy.push(char);

        for(let i = 0; i < abc.length; i++){
            if (char === abc[i].toUpperCase()) {
                let item;
                if(i + shift > 27 ){
                    item = abc[key(i, shift)].toString();
                    strCopy.push(item.toUpperCase());
                }
                item = abc[(i + shift)].toString();
                strCopy.push(item.toUpperCase());
                
            } else if (char === abc[i]){
                if(i + shift > 27 ){
                    strCopy.push(abc[key(i, shift)]);
                }
                strCopy.push(abc[(i + shift)]);

            } 
        }
    }
    return strCopy.join("");
}

