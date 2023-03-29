type Todo1 ={
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T,K extends keyof T> =Readonly<Pick<T,K>> &Omit<T,K>; 


let todo1: MyReadonly2<Todo1, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false, 
};


todo1.title = "Hello" // Error: cannot reassign a readonly property
todo1.description = "barFoo" // Error: cannot reassign a readonly property
todo1.completed = true // OK

