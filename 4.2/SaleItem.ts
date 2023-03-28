import {OrderItem} from "./OrderItem";
import {Product} from "./Product";


export class SaleItem  extends OrderItem{
  sale:number;

  constructor(product:Product,count:number,sale:number){
    super(product,count);
    this.sale=sale;
}
  getCost(): number {
    return (this.product.price-this.sale)*this.count;
  }

  static isSaleItem(object:unknown): object is SaleItem{
    return object instanceof SaleItem;
  }
}