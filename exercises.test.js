const {MyFunctions,Calculator,capitalize} = require('./exercises.js');
/*********************************
             Exercise 1
 *********************************/
//Exercise 1.1
test('(Exercise 1.1) \"Shoul be\" has 9 chars', () => {
    expect(MyFunctions.stringLength('Should be')).toBe(9);    
});

//Exercise 1.2
test('(Exercise 1.2) Compiling stringLength goes as expected', () => {
    expect(() => {
        MyFunctions.stringLength('This is a large string test');
    }).toThrow('Value out of range!');
});

/*********************************
             Exercise 2
 *********************************/
test('(Exercise 2) UnaCadenaInvertida should be aditrevnIanedaCanU', () => {
    expect(MyFunctions.reverseString('UnaCadenaInvertida')).toBe('aditrevnIanedaCanU');    
});

/*********************************
             Exercise 3
 *********************************/
describe('(Exercise 3) Calculator operations', () =>{
    test('(Exercise 3.1) add 3 + 4 is equal to 7', () => {
        expect(Calculator.add(3,4)).toBe(7);
    });
    
    test('(Exercise 3.2) substract 3 - 4 is equal to -1', () => {
        expect(Calculator.subtract(3,4)).toBe(-1);
    });
    
    test('(Exercise 3.3) divide 4 / 4 is equal to 1', () => {
        expect(Calculator.divide(4,4)).toBe(1);
    });
    
    test('(Exercise 3.4) divide 4 / 0 throw error(Division by 0)', () => {
        expect(() => {
            Calculator.divide(4,0);
        }).toThrow('Division by 0');
    });
    
    test('(Exercise 3.5) multiply 3 * 4 is equal to 12', () => {
        expect(Calculator.multiply(3,4)).toBe(12);
    });
});

/*********************************
             Exercise 4
 *********************************/
test('(Exercise 4) capitalize(\"hola\") should be Hola)', () => {
    expect(capitalize('hola')).toBe('Hola');
});