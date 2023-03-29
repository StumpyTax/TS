function digitalRoot(a:number):number{
  let minus:number=1
  let b:number;
  if(a>=0)
    b=a;
  else{
    minus=-1;
    b=-a;
  }
  while(~~(b/10)!=0){
    b=b.toString().split('').reduce((acc:number,x:string)=>acc+Number(x),0);
  }
  return minus*b;
}

console.log(digitalRoot(942));//?
console.log(digitalRoot(0));
console.log(digitalRoot(-942));
console.log(digitalRoot(9849));
