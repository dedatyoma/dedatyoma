let savedLink = "";
function sendLink() {
  const userInput = prompt('Enter your link');
  if (userInput) {
    try {
      const url = new URL(userInput);
      savedLink = url.href;
      alert(`Link has been saved ${savedLink}`);
    } catch {
      alert('Invalid link format. Try again.');
    }
  } else {
    alert('Link was not entered.');
  }
}
  function toLink() {
    if(savedLink) {
      window.location.href = savedLink;
    } else {
      alert('In the beginning, enter your link');
    }
}