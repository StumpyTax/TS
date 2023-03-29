function capitalize1(a:string):string{
  return a.split(' ').map(x=>x.charAt(0).toLocaleUpperCase()+x.slice(1)).join(' ');
}

console.log(capitalize1("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили"));
console.log(capitalize1("+++нее волнуйтесь_не---_работает////eсл//бы\\всё работало, вас бы уволили"));
console.log(capitalize1("фывафывафываю,,,,       =авфыа"));
console.log(capitalize1("волнуйся:- -,работай   -"));
console.log(capitalize1(""));