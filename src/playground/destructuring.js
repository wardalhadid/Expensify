// const person = {
// name: 'Andrew',
// age: 27,
// location: {
//   city: 'Philidelphia',
//   temp: 92
// }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp:temperature} = person.location;

// if(city && temperature) {
//   console.log(`it's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'self-Published'} = book.publisher

// console.log(publisherName); // Penguin || self-Published
// 

// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state='New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (HOT)', '$2.00', '$2.50', '$2.75'];

const [name,,medium] = item;

console.log(`A medium ${name} costs ${medium}`);


const Destructuring = () => (
  <p>destructuring</p>
);

export default Destructuring;