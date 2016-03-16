class Calculator {
  constructor(name = 'untitled') {
    this.name = name;
    console.info(`new Calculator(${this.name});`);
  }
  /**
   * Addition the two provided numbers
   * @param n1 The first number
   * @param n2 The second number
   * @return The result number of the addition
   */
  add(n1, n2) {
    return (n1+n2);
  }
}

module.exports = Calculator;