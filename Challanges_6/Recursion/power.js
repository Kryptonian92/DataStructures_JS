// Function which accepts a base and exponent and
// returns the power of the base to the exponent.
// Don't worry about negative bases and exponents

function power(base, expo){
    if(expo === 0) return 1;
    return base * power(base,expo-1);
}

power(2,3)