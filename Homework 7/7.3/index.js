function printChoice() {
  let attempt = 0;
  let userInput;

  while (attempt < 10) {
      userInput = prompt("Введіть число більше за 100");

      if (userInput === null) {
          console.log("Введення числа було скасовано");
          return;
      }

      userInput = Number(userInput);

      if (userInput > 100) {
          console.log(`Останнє число: ${userInput}`);
          return;
      }

      attempt++;
      if (attempt < 10) {
          alert("Число має бути більше 100. Спробуй ще раз");
      }
  }

  console.log(`Останнє число після 10 спроб: ${userInput}`);
}

printChoice();
