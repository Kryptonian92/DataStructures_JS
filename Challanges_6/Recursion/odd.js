// collect all of the odd values in an array

function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !==0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}