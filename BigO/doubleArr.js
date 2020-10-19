// algo to double values
// 
function doubleArr (arr) {
    var newArr = []
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}
console.log(`New double array is: ${(doubleArr([1,2,3]))}`);

