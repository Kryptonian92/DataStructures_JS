// Write a recursive function which accepts a number and 
// returns the factorial. eg. 4! = 4 * 3 * 2 * 1 = 24

function factorial(num){
    if (num < 0) return 0;
    if (num <= 1) return 1;
    return num * factorial(num-1);
}