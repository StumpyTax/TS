type Person = {
  name: string,
  age: number,
}

type Bridge = {
  city: string,
  age: number,
}

type Wine = {
  manufacturer: string,
  age: number,
  grade: string,
}


function getOldest<T extends {age:number}>(items: T[]): T {
  return items.sort((a, b) => b.age - a.age)[0];
}

let persons:Person[]=[{name:"Kot",age:12},{name:"Shrek",age:37},{name:"Zaba",age:128}];
let wines:Wine[]=[{manufacturer:"Kot",age:12,grade:"hz"},{manufacturer:"Shrek",age:37,grade:"hz"},{manufacturer:"Zaba",age:128,grade:"hz"}];
let bridges:Bridge[]=[{city:"Kot",age:12},{city:"Shrek",age:37},{city:"Zaba",age:128}];


console.log(getOldest(persons));
console.log(getOldest(wines));
console.log(getOldest(bridges));