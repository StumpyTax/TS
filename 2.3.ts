function capitalize1(a:string):string{
  let res:string="";
  let sep:string[]=a.split(/[а-яА-ЯA-Za-zё]+/g);
  let prevLet:boolean=true;
  let words:string[]=a.split(/[^а-яА-ЯA-Za-zё]+/g).filter(x=>x);
  for(let i=0;i<words.length;i++){
    res+=sep[i]+words[i].charAt(0).toUpperCase()+words[i].slice(1)
  }
  if(words.length<sep.length){
    res+=sep.slice(words.length).join()
  }
  return res;
}

console.log(capitalize("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили"));
console.log(capitalize("+++нее волнуйтесь_не---_работает////eсл//бы\\всё работало, вас бы уволили"));
console.log(capitalize("фывафывафываю,,,,       =авфыа"));
console.log(capitalize("волнуйся:- -,работай   -"));
console.log(capitalize(""));