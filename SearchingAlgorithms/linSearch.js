// returns the index at which the value exists
// If the value does not exist, return -1

// iterate through arr
// compare arr[i] and val
// return i
function linearSearch(arr, val){

    for(var i=0; i<arr.length; i++){
        if(arr[i] === val){
            console.log(i);
            return(i)
        }
    }
    console.log("-1")
    return -1;
}
linearSearch([1,4,3], 8)
