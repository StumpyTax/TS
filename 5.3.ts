
class MyArray<T>{
  public elements:T[]=[];
  constructor(elements?:T[]){
    if(elements!=undefined)
      this.elements=elements;
  }
  areElementsEqual(index1:number,index2:number){
    if(index1>=this.elements.length || index2>=this.elements.length || index1<0 || index2<0)
      throw new Error("Vne granits massiva");
    if(typeof this.elements[index1]==='object')
      return JSON.stringify(this.elements[index1])===JSON.stringify(this.elements[index2]);
    return this.elements[index1]===this.elements[index2];
  }

  static flatten<T>(ar:T[]):T{
    return ar.reduce((acc, val)=>
           acc.concat(val instanceof Array ? MyArray.flatten(val) : val),[]) as T;
  }
}

let a:MyArray<number>=new MyArray<number>([1,2,3,4,5,6,1]);
console.log(a.areElementsEqual(0,6));
/* console.log(a.areElementsEqual(0,9));*/
let b:MyArray<MyArray<number>>=new MyArray<MyArray<number>>([new MyArray<number>([1,2,3,4,]),new MyArray<number>([1,2,3,4]),new MyArray<number>([1])]);
console.log(b.areElementsEqual(0,1));
console.log(b.areElementsEqual(0,2));

console.log(MyArray.flatten(
  [[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []]));

console.log(MyArray.flatten(
    [["asdf"], [[["asdfasd"]],"bda"], "asddsaf"]));