function sum(number) {
  if (!sum.total) {
    sum.total = 0;
}
sum.total += number;
return sum.total;
}
console.log(sum(0)); 
console.log(sum(5)); 
console.log(sum(8)); 
console.log(sum(6)); 