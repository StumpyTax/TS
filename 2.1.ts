function arrayDif(a:Array<any>,b:Array<any>):Array<any>{
  let res:Array<any>=new Array<any>();
  for(let i=0;i<a.length;i++){
    if(!b.some((c)=>c==a[i] && typeof(c)==typeof(a[i]))){
      res.push(a[i])
    }
  }
  return res;
}

console.log(arrayDif([1,2,6,7,8,1,1],[1,7]));
console.log(arrayDif([1,2,6,7,8,1,1,2,2,2,2,2,3,3,3,1,1,1,0,0,0,"string"],[1,7]));
console.log(arrayDif([1,2,6,7,"str",1,"string"],['str',1]));
console.log(arrayDif([1,"a","a",7,8,1,2],["a",1]));
console.log(arrayDif([false,2,6,7,8,1,true],[true,7]));
console.log(arrayDif([1,2,6,7,8,1,1],[1,7]));
console.log(arrayDif([1,2,6,7,8,1,1],[1,7]));