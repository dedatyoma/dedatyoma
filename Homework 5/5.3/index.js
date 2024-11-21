const digit = prompt("Enter your digit");
if (digit && Number.parseInt(digit)) {
    for (let i = 1; i <= 100 && digit >= i ** 2; i++) {
        console.log(i);
    }
} else {
    alert("Please enter valid digit");
}