type Cat = {
  name: string,
  meow: () => string,
}

type Dog = {
  name: string,
  bark: () => string,
}

const cat: Cat = {
  name: 'Pushok',
  meow: () => 'meow!'
};

const dog: Dog = {
  name: 'Bobik',
  bark: () => 'bark!',
}

/*
Expected:

  whatDoesThePetSay(cat) -> 'meow'
  whatDoesThePetSay(dog) -> 'bark'

*/
/* function isCat(a:any):a is Cat{
  return 'name' in a && 'meow' in a;
}
function isDog(a:any):a is Dog{
  return 'name' in a && 'bark' in a;
}
function whatDoesThePetSay(pet: Dog | Cat): string {
  if(isCat(pet)){
    return pet.meow();
  }
  if(isDog(pet)){
    return pet.bark();
  }
  return "";
}
function whatDoesThePetSay(pet: Dog | Cat): string {
    if('meow' in pet ){
      return pet.meow();
    }
    if('bark' in pet){
      return pet.bark();
    }
    return "";
  } */
function whatDoesThePetSay(pet: Dog | Cat): string {
  if('meow' in pet ){
    return pet.meow();
  }
  if('bark' in pet){
    return pet.bark();
  }
  return "";
}

console.log(whatDoesThePetSay(cat));
console.log(whatDoesThePetSay(dog));