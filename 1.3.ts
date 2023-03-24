
//Оба участка кода считают мужчин старше 18 лет в массиве.
//Первый участок кода требует поля isMale типа boolean и age типа number.
//Второй участок кода написан со строгой типизацией и требует чтобы на вход подавался массив с элементами типа Human
// function someFunc(data) {
//   return data.reduce((acc, current) => {
//     acc + Number(current.age > 18 && current.isMale)}, 0);
//   };


type Human = {
  name: string,
  age: number,
  gender: 'male' | 'female',
}
function someFun1c(data:Human[]): number {
return data.reduce((acc: number, current: Human) => 
      acc + Number(current.age > 18 && current.gender === 'male'), 0);
}