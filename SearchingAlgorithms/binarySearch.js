// accepts a sorted arr and val
// returns index at which the val exists
// otherwise, return -1

function binarySearch(arr, elem){
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]){
            end = middle - 1;
        } else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start, middle, end);
    if(arr[middle] == elem){
        return middle;
    }
    return -1;
}
binarySearch([2,5,6,9,13,15,28,30], 28)