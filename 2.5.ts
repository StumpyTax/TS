function areEqual(a:object,b:object):boolean{
  let aKeys:string[]=Object.getOwnPropertyNames(a);
  let bKeys:string[]=Object.getOwnPropertyNames(b);
  if(aKeys.length!=bKeys.length){
    return false;
  }
  for(let i=0;i<aKeys.length;i++){
    
    if(((typeof(a[aKeys[i] as keyof object])==typeof(b[bKeys[i]as keyof object]) 
      && typeof(a[aKeys[i]as keyof object])=="object") 
      && !areEqual(a[aKeys[i]as keyof object],b[bKeys[i]as keyof object])) 
      ||(!(typeof(a[aKeys[i] as keyof object])==typeof(b[bKeys[i] as keyof object]) 
      && typeof(a[aKeys[i]as keyof object])=="object") 
      && a[aKeys[i] as keyof object]!=b[bKeys[i] as keyof object])){
        return false;
      }
  }
  return true;
}
type K={
  name:string,
  kik:number,
  o:boolean
}
type Kk={
  name:Kk|null,
  kik:number,
  o:boolean
}
let a:K={
  name:"fasdfa",
  kik:1,
  o:true
}
let b:K={
  name:"fasdfa",
  kik:2,
  o:true
}
let kk:Kk={
  name:{name:null,kik:1,o:true},
  kik:1222,
  o:true
}
// console.log(areEqual([1,2,3,4,5],[0,1,23]));
console.log(areEqual([a,b,a,b],[a,b,a,b]));
console.log(areEqual(a,a));
console.log(areEqual({a:1,ko:1},b));
console.log(areEqual([1,2],[1,2]));
console.log(areEqual([1,2],[2,1]));
console.log(areEqual(b,[1,3,3,5,4]));
console.log(areEqual(a,kk));