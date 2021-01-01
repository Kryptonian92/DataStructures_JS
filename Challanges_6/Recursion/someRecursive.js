// function which accepts an array and a callback
// the function returns true if a single value in the array
// returns true when passed to the callback.
// otherwise it returns false

function someRecursive(arr, callback){
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}
someRecursive([1,2,3,4], isOdd)

// Needs work!