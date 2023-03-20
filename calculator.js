export class Calculator {
    msg = "Please introduce two numbers";

    add(a, b) { 
        if(arguments.length !== 2 || arguments == null) return this.msg;
        return a + b
    }; 

    sub(a, b) { 
        if(arguments.length !== 2 || arguments == null) return this.msg;
        return a - b
    };

    divide(a, b) { 
        if(arguments.length !== 2 || arguments == null) return this.msg;
        return a / b
    };

    multiply(a, b) {
        if(arguments.length !== 2 || arguments == null) return this.msg;
        return a * b
    };
}
