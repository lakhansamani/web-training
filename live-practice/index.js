import renderMembers, { renderMember } from './scripts/render_member.js';

///// Creating Objects and overriding methods
var car = {
  seats: 3,
  brand: 'Ford',
};
car.color = 'red';
car.calculatePrice = function () {
  return this.seats * 20000;
};
var car2 = Object.assign({}, car);
car2.calculatePrice = function () {
  return this.seats * 30000;
};

///// Creating arrays
let arr = [1, 2, 'hello', 'world', car, car2];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let sum = 0;
let concateString = '';
function logTypeOfElement(element) {
  if (typeof element === 'number') {
    sum += element;
  }
  if (typeof element === 'string' || typeof element === 'number') {
    concateString += element;
  }
  console.log(typeof element, element);
}
arr.forEach(logTypeOfElement);

console.log({ sum });
console.log({ concateString });

let arr2 = [1, 2, '3', '4'];
let sum2 = 0;
arr2.forEach((element) => {
  sum2 += parseInt(element);
});

let strArr = arr2.filter(function (item) {
  if (typeof item === 'string') {
    return true;
  }
  return false;
});

console.log(sum2);

//// Add event listener to button
let button = document.querySelector('#greet-btn');
button.addEventListener('click', function (e) {
  alert('hello world');
});

//// Dynamic list of members
const members = ['John', 'Jane', 'Jack'];
const membersList = document.getElementById('members-list');
// renderMembers(members, membersList);

//// Add new member
/// Hint Use `.value` property of input element to get the value of the input
// const addMemberBtn = document.getElementById('add-member-button');
// const memberInput = document.getElementById('member-name');
// addMemberBtn.addEventListener('click', function (e) {
//   const li = `<li>${memberInput.value}</li>`;
//   membersList.innerHTML += li;
//   members.push(memberInput.value);
//   memberInput.value = '';
// });

/// Search member
/// Add keyup event on search input
// const searchInput = document.getElementById('search-member');
// searchInput.addEventListener('keyup', function (e) {
//   const searchValue = e.target.value;
//   const filteredArr = members.filter(function (member) {
//     if (member.toLowerCase().includes(searchValue.toLowerCase())) {
//       return true;
//     }
//     return false;
//   });
//   if (filteredArr.length === 0 && searchValue !== '') {
//     membersList.innerHTML = '<li>No results found</li>';
//     return;
//   }
//   membersList.innerHTML = '';
//   // render the filtered list
//   filteredArr.forEach((member) => {
//     const li = `<li>${member}</li>`;
//     membersList.innerHTML += li;
//   });
// });

//// Clousers
function outer() {
  let a = 200;
  function inner() {
    console.log(a);
  }
  return inner;
}

const innerFunc = outer();
innerFunc();

//// getters and setters
var classObj = {
  name: 'John',
  age: 20,
  getAge: function () {
    return this.age;
  },
  setAge: function (age) {
    this.age = age;
  },
};

/// mutable and immutable
/// all premitive types are immutable
let a = 10; // -> x001
a = 'string'; // -> x002
/// all objects and arrays are mutable
let arrx = [1, 2, 3]; // -> x003
arrx.push(4); // -> x003
let arry = [...arrx]; // -> x004
let arrz = arrx.map(function (item) {
  return item;
});

let objx = {
  name: 'John',
}; // -> x004
objx.name = 'Jane'; // -> x004
let objB = objx; // -> x004
objB.name = 'Jack'; // -> x004
console.log(objx.name); // -> Jack

let objC = Object.assign({}, objx); // -> x005
let objD = { ...objx }; // -> x006

//// Promise example
const examplePromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([
      {
        id: 1,
        name: 'John',
        age: 20,
      },
      {
        id: 2,
        name: 'Jane',
        age: 21,
      },
    ]);
  }, 2000);
});

const examplePromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        feed: 'hello world',
      },
    ]);
  }, 1000);
});

// console.log(`executing promise 1`);
// examplePromise
//   .then((data) => {
//     console.log({ data });
//     console.log(`executing promise 2`);
//     return examplePromise2;
//   })
//   .then((promise2Data) => {
//     console.log({ promise2Data });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//// Async await example
async function getMembers() {
  try {
    // start loader
    const res = await fetch(
      `https://training-apis-production.up.railway.app/users`,
      {
        method: 'GET',
      }
    );
    if (res.status >= 400) {
      throw new Error('something went wrong');
    }
    const members = await res.json();
    renderMembers(members, membersList);
    // show members
  } catch (err) {
    console.error(err);
    // show error
  } finally {
    // hide loader
    console.log(`finally block`);
  }
}

async function getFeeds() {
  console.log(`executing promise 2`);
  try {
    const data2 = await examplePromise2;
    console.log({ data2 });
  } catch (err) {
    console.error(err);
  }
}

// Promise.all([getMembers(), getFeeds()]).then(() => {
//   console.log(`all promises resolved`);
// });

getMembers();

async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  try {
    const res = await fetch(
      `https://training-apis-production.up.railway.app/signup`,
      {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          posts: [],
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    console.log({ data });
    renderMember(data, membersList);
    form.reset();
  } catch (err) {
    console.error(err);
  } finally {
    console.log(`finally block`);
  }
}

const form = document.getElementById('add-member-form');
form.addEventListener('submit', handleSubmit);
