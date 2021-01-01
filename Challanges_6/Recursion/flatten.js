// function which acepts an array of arrays and returns 
// a new array with all values flattened

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
            if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
            } else {
                newArr.push(oldArr[i])
            }
        }
        return newArr;
}
flatten([1,2,[3,4],5])