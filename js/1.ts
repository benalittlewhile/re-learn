export {};

let admin, name;
name = "John";
admin = name;
//console.log(admin);

const PLANET_NAME = "Earth";
const visitorName = "James";

// let temp = 1;
// let tertiary = -1;

// prefix notation: perform the addition then return the result, also increment
// the value in-place
// let prefix = ++tertiary; // prefix = 0, tertiary = 0
// console.log(`tertiary is ${tertiary}`); // 0
// // postfix notation: return the base value, then increment the base in-place
// let postfix = tertiary++; // postfix = 0? tertiary = 1
// console.log(`tertiary is ${tertiary}`); // 0
// [prefix, postfix, tertiary].map((item) => console.log(item));

// // temp = 1
// // prefix = 1, t = 2, 1 != 2 => tertiary = 9
// (prefix = temp++) == 2 ? (tertiary = 2) : (tertiary = 9);

// console.log(` tertiary became: ${tertiary}`);
// [temp, tertiary, prefix].map((item) => {
//   console.log(item);
// });

// const userAnswer = prompt("What is the 'official' name of JS?");
// if (userAnswer.toLowerCase() == "Ecmascript".toLowerCase()) {
//   alert("Correct");
// } else {
//   alert("incorrect");
// }

// the bad way would be

// this is clever, but not useful. Do not do this.
// prompt("What is... ?") == "Ecmascript" ? alert("correct") : alert("incorrect");

// another example of the above
// let result (a + b < 4) ? 'Below' : 'Over';

// another
// message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Director"
//     ? "Greetings"
//     : login === ""
//     ? "No Login"
//     : "";

let banana = 2;

function edit(banana) {
  banana = 4;
}

edit(banana);
console.log(banana); // prints 2
const smolEx = {
  15: "yes",
  Ben: "yessir",
  Allonsy: "kinda",
  0: "0",
};

for (let key in smolEx) {
  console.log(`${key}: ${smolEx[key]}`);
}

const Ben = {
  name: "bwah",
  arrow() {
    const arrowFunc = () => console.log(this?.name);
    arrowFunc(); // logs bwah
  },
  notArrow() {
    function not() {
      console.log(this?.name);
      console.log(typeof this);
      console.log(this);
    }
    not();
  },
};

Ben.arrow();
Ben.notArrow();
