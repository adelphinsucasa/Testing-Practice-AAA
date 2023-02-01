var MyFunctions = {
/*********************************
             Exercise 1
 *********************************/
    stringLength : ((string) => {
    if ((string.length < 1) || (string.length > 10)){
        throw new Error('Value out of range!');
    }else{
        return string.length;
    }
}),

/*********************************
             Exercise 2
 *********************************/
reverseString :  ((string) => {
    return string.split("").reverse().join("");
})
};

/*********************************
             Exercise 3
 *********************************/
var Calculator = {
    add: ((a,b) => {
        return a + b;
    }),
    
    subtract: ((a,b) => {
        return a - b;
    }),
    
    divide: ((a,b) => {
        if (b === 0){
            throw new Error('Division by 0');
        }else{
            return a / b;
        }
    }),
    
    multiply: ((a,b) => {
        return a * b;
    }),
}

/*********************************
             Exercise 4
 *********************************/
const capitalize = ((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
});

module.exports = {MyFunctions, Calculator,capitalize};
