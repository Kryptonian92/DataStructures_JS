//write a function called same, which accepts two array
//which returns true if every value in the array has it's
//corresponding value squared

function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i=0; i<arr1.length; i++){
        //index of is bacially a loop, making it O(N^2)
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3, 2], [5,5, 1, 4, 4])

//refactored

function same2(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for( let val of arr){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true
}