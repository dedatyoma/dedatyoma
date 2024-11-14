const message1 = prompt('Write here');
const message2 = prompt('Write here');
const message3 = prompt('Write here');

let messages = [message1, message2, message3];

messages.sort(() => 0.5 - Math.random());
alert(messages);