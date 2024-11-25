const arr = [1, 2, 3, 4, 5, 6];
const avg = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
alert(avg(arr));