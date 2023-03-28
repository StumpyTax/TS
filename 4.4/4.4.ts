import {Job} from "./Job";
import {Person} from "./Person";



let job1=new Job("водонос",12121);
let job2=new Job("Недоблогер",-2);
let job3=new Job("Машина",753159);

let person1=new Person("Guts",job1);
let person2=new Person("Griffit",job2);

person1.work();
person2.work();

person1.job=job3;
person2.job=job3;

person1.work();
person2.work();