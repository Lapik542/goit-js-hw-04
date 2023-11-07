function calcAverageCalories(days) {
}
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// const cars = [
//    { model: 'BMW', price: 10000 },
//    {model: 'AUDI', price: 12000 },
//    {model: 'VOLVO', price: 16000 },
// ]
// const name = [
//    {model: 'Alex', age: 16},
//    {model: 'Sofia', age: 20},
//    {model: 'Margo', age: 17},
// ]
// const num = [
//    {model: '10'},
//    {model: '100'},
//    {model: '1000'},
// ]

// for (const key in name) {
//    if (Object.hasOwnProperty.call(name, key)) {
//       const element = name[key];
//       console.log(element.age);
      
//    }
// }
