import {Product} from "./Product"

export abstract class OrderItem{
  private _product:Product;

  get product():Product{
    return this._product;
  }

  set product(product:Product){
    this._product=product;
  }

  private _count:number;
  
  get count():number{
    return this._count;
  }

  set count(count:number){
    this._count=count;
  }
  
  constructor(product:Product,count:number){
    this._count=count;
    this._product=product;
  }
  log(){
    Product.log(this);
    console.log();
  }
  abstract getCost():number;

  compare(other: OrderItem):number{
    let costThis:number=this.getCost()
    let costOther:number=other.getCost()
    return (costThis-costOther)/Math.abs((costThis-costOther));

  /*   if(costThis>costOther)
      return 1;
    else
      if(costOther===costThis)
        return 0;
      else
        return -1; */
  }
}