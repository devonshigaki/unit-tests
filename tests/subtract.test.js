const math = require('../src/math'); test('subtracts 5 - 2 to equal 3', () => { const subtractMock = jest.fn(math.subtract); expect(subtractMock(5, 2)).toBe(3); expect(subtractMock).toHaveBeenCalledWith(5, 2); });
