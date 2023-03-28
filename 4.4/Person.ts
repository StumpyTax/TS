import { Job } from "./Job";

export class Person{
  private _job:Job;
  private _name:string;

  set job(obj:Job){
    this._job=obj
  }
  constructor(name:string,job:Job){
    this._job=job;
    this._name=name;
  }

  getSalary():number{
    return this._job.salary;
  }
  work():void{
    this._job.work(this._name)
  }
}