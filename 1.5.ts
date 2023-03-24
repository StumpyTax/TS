function sqrNumbers(a:number):string{
  let strs:string[]=a.toString().split('');
  let res:string=strs[0]=='-'?'-':'';
  for(let i=strs[0]=='-'?1:0;i<strs.length;i++){
    res+=(Number(strs[i])**2).toString();
  }
  return res;
}

console.log(sqrNumbers(224433)); 
console.log(sqrNumbers(0)); 
console.log(sqrNumbers(-1235)); 
console.log(sqrNumbers(-257)); 
