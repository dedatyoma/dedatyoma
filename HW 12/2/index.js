const clickCounts = {};
function clicked(buttonText) {
  if (!clickCounts[buttonText]) {
    clickCounts[buttonText] = 0;
  }
  clickCounts[buttonText]++;
  if(clickCounts[buttonText] === 1){
    alert(`You clicked ${clickCounts[buttonText]} time.`);
  } else {
    alert(`You clicked ${clickCounts[buttonText]} times.`);
  }
}