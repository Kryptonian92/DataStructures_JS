// function which accepts a sorted array or integers.
// Find the first pair where the sum is zero. Return an
// array that includes both values that sum to zero or undefined
// if a pair does not exist
//  ([-3, -2, -1, 0, 1, 2, 3]) should return [-3, 3]

//Naive solution
// time complexity of O(N^2)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for( let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                console.log(`values are: ${arr[i], arr[j]}`)
                return arr[i], arr[j];
            }
        }
    }
}
sumZero([-3, -2, -1, 0, 1, 2, 3])

//refactored solution
// time complexity of O(N)
// space complexity of O(1)
function sumZeroFast(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}
sumZeroFast([-3, -2, -1, 0, 1, 2, 3]);

