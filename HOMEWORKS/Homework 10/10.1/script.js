const obj = {
  name: "Artem",
  age: 18,
  hobbies: ["Gym", "Learning languages", "Reading"],
  location: "Romania",

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Location: ${this.location}, Hobbies: ${this.hobbies.join(", ")}`);
  }
};

obj.getInfo(); 
