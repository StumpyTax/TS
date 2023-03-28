import {ICanFly} from "./interfaces/ICanFly"
import {ICanRun} from "./interfaces/ICanRun"
import {ICanSwim} from "./interfaces/ICanSwim"


export abstract class Human implements ICanSwim,ICanRun,ICanFly{
  abstract fly(): void;
  abstract run(): void;
  abstract swim(): void;
}