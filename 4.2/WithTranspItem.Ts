import {OrderItem} from "./OrderItem";
import { Product } from "./Product";

export class WithTranspItem extends OrderItem{
  exps:number;
  
  constructor(product:Product,count:number,exps:number){
    super(product,count);
    this.exps=exps;
  }

  getCost(): number {
    return (this.product.price+this.exps)*this.count;
  }
  static isWithRestrItem(object:unknown): object is WithTranspItem{
    return object instanceof WithTranspItem;
  }
}