const message = prompt('Enter yor strinng');
const chars = prompt('Enter some chars for removing');


// function foo(string: string, arr: Array<string>): string
function foo(string, arr) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!arr.includes(string[i])) {
      result += string[i];
    }
  }
  return result;
}

const result = foo(message, chars.split(''));

alert(result);