//Factorial, 4! = 4 * 3 * 2 * 1

// Iteratively
function factorial(num){
    let total = 1;
    for(let i = num; i > 0; i--){
        total *= i
    }
    console.log("total: " + total);
    return console.log("total: " + total);
}

//Recursively
function factorial(num){
    if(num === 1)
    return num * factorial(num -1)
}