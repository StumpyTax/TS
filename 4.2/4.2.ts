import { OrderItem } from "./OrderItem";
import { Product } from "./Product";
import { SaleItem } from "./SaleItem";
import { SaleWithRestrItem } from "./SaleWithCountRestrItem";
import { WithTranspItem } from "./WithTranspItem";


let items:OrderItem[]=[];

for(let i=0;i<6;i++){
  if(i<2)
    items.push(new SaleItem(new Product(i.toString(),i+22+17*i),i+i*4+222,20));
  else
    if(i<4)
      items.push(new SaleWithRestrItem(new Product(i.toString(),i*20+50),i*i,20,5))
    else
      items.push(new WithTranspItem(new Product(i.toString(),i*20+50),i*i,20))
}

items
.forEach(x => {
  x.log();
});
console.log('\n');

for(let i=0;i<5;i++)
  for(let j=0;j<5-i;j++){
    if(items[j].compare(items[j+1])===-1){
      let temp:OrderItem=items[j];
      items[j]=items[j+1];
      items[j+1]=temp;
  }
}

items.forEach(x=>{
  x.log();
})