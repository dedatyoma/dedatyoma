const book = {
  contacts: [
    {
      name: "Сергій",
      phone: "+380999999999",
      email: "example@email.com",
    },
  ],

  find: function (name) {
    return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || null;
  },

  add: function (contact) {
    const existingContact = this.find(contact.name);
    if (existingContact) {
      console.log(`Контакт з іменем "${contact.name}" існує.`);
      return;
    }

    this.contacts.push(contact);
    console.log(`Контакт "${contact.name}" додано.`);
  },
};

console.log("Пошук контакту 'Сергій':", book.find("Сергій"));

book.add({
  name: "Олена",
  phone: "+380987654321",
  email: "olena@email.com",
});
console.log("Контакти після додавання:", book.contacts);

book.add({
  name: "Сергій",
  phone: "+380123456789",
  email: "serhii-new@email.com",
});

console.log("Пошук контакту 'Іван':", book.find("Іван"));
