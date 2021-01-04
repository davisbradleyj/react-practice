const CEILING = 100;

function primeTest(testValue) {
    let isPrime = true;
    for ( let i = 2; i<testValue; i++ ) {
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
    // will skip right back to the top of the loop, not executing anything that follows in codeblock
    if (result == false) {
        continue;
    }
    // Essentially, anytime you need to terminate a loop => break
    // Anytime you want to avoid a certain condition in a loop => continue
    console.log(i + " is a prime number.");
}
