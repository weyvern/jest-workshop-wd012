import { add, substract, multiply } from './utils';

describe('Utils', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      const result = add(1, 2);
      expect(result).toBe(3);
    });
  });
  describe('substract', () => {
    it('substract the second number out of the first', () => {
      const result = substract(2, 1);
      expect(result).toBe(1);
    });
    it('substract the second number out of the first when the first is negative', () => {
      const result = substract(-2, 1);
      expect(result).toBe(-3);
    });
  });
  describe('multiply', () => {
    it('mutliplies first argument times the second', () => {
      const result = multiply(3, 3);
      expect(result).toBe(9);
    });
  });
});
