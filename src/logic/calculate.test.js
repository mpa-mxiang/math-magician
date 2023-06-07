import calculate from './calculate';

describe('Calculator', () => {
  it('should clear the calculator data when AC button is clicked', () => {
    const obj = {
      total: '100',
      next: '50',
      operation: '+',
    };

    const result = calculate(obj, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

});
