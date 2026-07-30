function Log(target: Function, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);
    const original = target;

    function replacementMethod(this: any, ...args: any[]) {
        console.log(`Called ${methodName} with args:`, args);
        return original.call(this, ...args);
    }

    return replacementMethod;
}

class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3);