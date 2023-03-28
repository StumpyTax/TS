import { OrderItem } from "./OrderItem";

export class Product{
  private _name:string;

  get name():string{
    return this._name;
  }

  set name(name:string){
    this._name=name;
  }
  private _price:number;

  get price():number{
    return this._price;
  }

  set price(price:number){
    if(price>=0)
      this._price=price;
    
  }
  constructor(name:string,price:number){
    this._name=name;
    this._price=price;
  }

  static log(obj:OrderItem){
    let s:any[]=Object.values(obj);
    s.push(obj.getCost())
    for(let i=0;i<s.length;i++){
      if(typeof s[i]=="object")
        s[i]=Object.values(s[i]).join(';');
    }
    console.log(s.join(";"));
    
  }
}


