function sumAll(a,b){

    if(a===b){
        console.log(a | b)
        return (a | b)
    }
    var sum = 0;

    for(var i=a; i<b+1; i++){
        sum+=i
    }
    console.log("sum is " + sum);
    return sum;
}
sumAll(-1,0)

// function sumAll(a,b){

//     var sum = 0;
//     if(a===b) return a;
//     if(a >= b) return
//     return sumAll(a) + 1;
// }
// sumAll(-1,0)