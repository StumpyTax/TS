function digitalRoot(a:number):number{
  while(~~(a/10)!=0){
    let res:number=0;
    let temp:number=a;
    while(~~(temp/10)!=0){
      res+=temp%10;
      temp=~~(temp/10);
    }
    a=res+temp;
  }

  return a;
}

console.log(digitalRoot(942));//?
console.log(digitalRoot(0));
console.log(digitalRoot(-942));
console.log(digitalRoot(9849));