const { workerData } = require("worker_threads")

// given two SVGStringList, write a function to
// determine if the second string is an anagram of the first.
// An anagram is a workerData, phrase or name formed by 
// rearranging the leters of another, such as cinemaa
// formed by icaeman.

function anagram(first, second){

    //edge case to check the length of the inputs
    if(first.length !== second.length){
        console.log("false")
        return false;
    }

    //frequency counter object
    const lookup = {};

    for(let i=0; i<first.length; i++){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++){
        let letter = second[i];

        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    console.log("True")
    return true;
}
anagram("iceman", "cinema")