import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class SaleWithRestrItem extends OrderItem{
  
  sale:number;

  constructor(product:Product,count:number,sale:number,private readonly restr:number){
    super(product,count);
    this.sale=sale;
  }

  getCost(): number {
    if(this.count>=this.restr){
      return Math.round(this.count*this.product.price*(1-this.sale/100));
    }
    else
      return this.count*this.product.price;
  }

  static isSaleWithRestrItem(object:unknown): object is SaleWithRestrItem{
    return object instanceof SaleWithRestrItem;
  }
}