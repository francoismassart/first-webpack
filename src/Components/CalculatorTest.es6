import { expect } from 'chai';
const Calculator = require('./Calculator');

describe('Calculator', () => {
  it('should add two numbers', () => {
    // Chai assertion...
    let calc = new Calculator('test');
    expect(calc.add(5, 3)).to.equal(8);

    let n = calc.add(5, 3);
    expect(n).to.be.a('number');
  });
});