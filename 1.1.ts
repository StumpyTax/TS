type Actor={
  name:string,
  firstName:string,
  country:string,
  city:string,
  hasOskar:boolean,
  filmsCount:number,
  age:number,
  languages:string[]
}
//Было бы правильно вынести в отдельный тип.
const actor:Actor = {
  name: 'Michael',
  firstName: 'Ivanov',
  country: 'Russia',
  city: 'Machachkala',
  hasOskar: false,
  filmsCount: 10,
  age: 14,//Возраст хранился в виде строки из-за чего неправильно выполняется функция
  languages: ['RU-ru', 'EN-us', 'TR-tr'],
};

//Слишком большое имя функции, не указан тип возвращаемого значения, не указан тип принимаемого значения.
const afterTwentyYears = (actor:Actor):number => {
  return actor.age + 20;
}
console.log(afterTwentyYears(actor)); 