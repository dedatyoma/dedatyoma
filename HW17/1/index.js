class Calculator {
  constructor(total = 0) {
    this.total = total;
  }

  add(a, b) {
    if (b !== undefined) {
      return a + b; 
    }
    this.total += a; 
    return this.total;
  }

  subtract(a, b) {
    if (b !== undefined) {
      return a - b;
    }
    this.total -= a;
    return this.total;
  }

  multiply(a, b) {
    if (b !== undefined) {
      return a * b;
    }
    this.total *= a;
    return this.total;
  }

  divide(a, b) {
    if (b !== undefined) {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }
    if (a === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.total /= a;
    return this.total;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3));       // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6));  // 18
console.log(calc.divide(8, 2));    // 4

