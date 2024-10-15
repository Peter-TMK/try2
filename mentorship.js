// const name1 = "Dunsin";
// const name2 = "Ayanfe";
// const name3 = "Sherif";

// console.log(name1, name2, name3);

////////////////// Array ///////////////

// const names = ["Dunsin", "Ayanfe", "Sherif"];
// console.log(names);
// console.log(names[2]);
// console.log(names[0]);
// console.log(names[1]);

const fruits = ["pawpaw", "mango", ["orange", "banana", "lemon"]];
// console.log("Ayanfe's result: ", fruits[2][2]);
////////////////// Object ///////////////

// console.log(student.grade);
// console.log(student.name);

// let students = [
//   {
//     name: "John",
//     age: 13,
//     grade: "year 9",
//   },
//   {
//     name: "Jane",
//     age: 11,
//     grade: "year 7",
//   },
//   {
//     name: "Ade",
//     age: 14,
//     grade: "year 10",
//   },
// ];

// const newStudent = {
//   name: "Femi",
//   age: 9,
//   grade: "year 8",
// };

// students.push(newStudent);
// students.pop();

// The above code is an Array of objects

// console.log(students[2]);
// console.log(students[2].age);

// console.log(students);

// Function vs Method

// console.log("Baloon".length);
// console.log(2345.length)

// console.log(Math.sqrt(16));
// console.log("hello".sqrt());

// Higher-Order-Functions
// forEach, Filter and map

// students.forEach((student) => console.log(student.name));

// const filteredStudents = students.filter((student) => student.age < 13);
// console.log(filteredStudents);

// const mappedStudents = filteredStudents.map(
//   (filteredStudent) => filteredStudent.age + 1
// );

// console.log(mappedStudents);

let students = [
  {
    name: "John",
    age: 13,
    grade: "year 9",
  },
  {
    name: "JanE",
    age: 11,
    grade: "year 7",
  },
  {
    name: "Ade",
    age: 14,
    grade: "year 10",
  },
];

const newStudents = [
  {
    name: "Femi",
    age: 9,
    grade: "year 8",
  },
  {
    name: "James",
    age: 11,
    grade: "year 10",
  },
];

// Take-Home Exercises
// 1] Log out only students whose names contain an 'e'.
// 2] Attempt to log all students whose grades are lower than 'year 10'.
// 3] Add 2 new students data to the students data.

students.forEach((student) => {
  if (student.name.includes("e") || student.name.toUpperCase().includes("E")) {
    console.log(student.name);
  }
});

// console.log("Mentorship".includes("f"));

// students.forEach((student) => {
//   if (student.name.toLowerCase().includes("e")) {
//     console.log(student.name);
//   }
// });

// console.log(typeof "year 10".split(" ")[0]);
// console.log("year 10".split(" ")[1]);

// const arr = ["a", "b"];
// console.log(...arr);

// const newArrStudent = [...students, ...newStudents];
// console.log(newArrStudent);
