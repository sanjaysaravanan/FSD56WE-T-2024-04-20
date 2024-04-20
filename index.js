const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ msg: "Promised Resolved" });
  }, 10000);
});

// p1.then((res) => {
//   console.log(res);
// });

// Global Await
// const res = await p1;

const resolvePromise = async () => {
  const res = await p1;
  console.log(res);

  console.log("Line 18");
};

await resolvePromise();

console.log("Line 23");

const getAllCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({}),
  });

  const data = await res.json();
  console.log(data);
};

getAllCountries();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// create a new list with numbers from 1 - 20

// spreading
const newArr = [...arr, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(newArr);

const obj = { name: "sam", age: 30, sex: "male" };

// create an obj with above obj values and height: 180cm, weight: 85kgs

const obj2 = { ...obj, height: "180cm", weight: "85kgs" };

// rest operation

// using destructure  taking only the age value into a variable age
//    LHS                   RHS
const { age, ...restObj } = obj2;

console.log(age, restObj);

const student = { id: 1, name: "sam", class: 12, age: 16 };

function displayStudent({ name, ...restStu }) {
  console.log("name", name);
  console.log(restStu);
  // Object.keys(restStu).forEach((key) => {
  //   console.log(key, restStu[key]);
  // });

  for (let key in restStu) {
    console.log(key, restStu[key]);
  }
}

//              RHS
displayStudent(student);
