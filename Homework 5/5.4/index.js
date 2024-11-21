let shouldCheck = true;
do {
    const digit = prompt("Enter your digit");
    let isPrime = true;

    if (digit && Number.parseInt(digit)) {
        for(let i = 2; i <= Math.sqrt(Number.parseInt(digit)); i++) {
            if (digit % 1 === 0) {
                isPrime = false;
            }
        }
    } else {
        if (digit === null) break;

        alert("You enter invalid digit");
        continue;
    }
    alert(`Digit ${digit} is ${isPrime ? "prime" : "not prime"}`)
    shouldCheck = confirm("Do you want to check another digit?");
} while(shouldCheck);
