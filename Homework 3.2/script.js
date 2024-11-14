let line1 = prompt("Write here", "");
let line2 = prompt("Write here", "");
let line3 = prompt("Write here", "");

let order = Math.floor(Math.random() * 6);

if (order === 0) {
    console.log(`${line1} ${line2} ${line3}`);
} else if (order === 1) {
    console.log(`${line1} ${line3} ${line2}`);
} else if (order === 2) {
    console.log(`${line2} ${line1} ${line3}`);
} else if (order === 3) {
    console.log(`${line2} ${line3} ${line1}`);
} else if (order === 4) {
    console.log(`${line3} ${line1} ${line2}`);
} else if (order === 5) {
    console.log(`${line3} ${line2} ${line1}`);
}