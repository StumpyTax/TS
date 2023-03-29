function capitalize(a:string):string{
  let words:string[]=a.split(' ');
  if(a=='')
    return a
  return words.map((x:string,index:number,array:string[])=>index!==array[0].length?x.charAt(0).toLocaleUpperCase()+x.slice(1):"").join(' ');
}

console.log(capitalize("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили"));
console.log(capitalize("+++нее волнуйтесь_не---_работает////eсл//бы\\всё работало, вас бы уволили"));
console.log(capitalize("фывафывафываю,,,,       =авфыа"));
console.log(capitalize("волнуйся:- -,работай   -"));
console.log(capitalize("")); 