// Function that returns the product of all numbers of given array

function productOfArray(arr){
    if (arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1)); //Getting fancy!
}