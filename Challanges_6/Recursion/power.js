// Function which accepts a base and exponent and
// returns the power of the base to the exponent.
// Don't worry about negative bases and exponents

function power(base, expo){
    if(expo === 0) return 1;
    return base * power(base,expo-1);
        // base * power(2,2) - > 4
        //     base * power (2,1) -> 2
        //         base * power (2,0) -> returns 1
}

power(2,3)