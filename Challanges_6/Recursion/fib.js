// fibonacci with recursion..nuff said
// Starts with 1 and every number there after is 
// equal to the sum of the previous two numbers, 1,1,2,3,5

function fib(){
    if (n <= 2) return 1; 
    return fib(n-1) + fib(n-2);
}
fib(5)