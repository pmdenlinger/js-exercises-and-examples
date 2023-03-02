let person = {
  name: "Jason",
  age: 33,
  isMarried: true,
  working: function () {
    console.log("As a programmer and webdev");
  },
};

// Empty object using the new keyword
let empObj = new Object();



// Empty object using the object literal syntax
let emObj = {
  // Add new properties
  emObj.name = "Rick",
  console.log(emObj);
};


// Trailing comma at the end of last key-value pair is OK
let person2 = {
  firstName = "Thomas",
  lastName = "Jefferson",
  isDead: false,
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.isDead);

// Objects can be written in one line. Harder to read.
let person3 = { firstName: "Thomas", lastName: "J" };


