
interface Todo2 {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T,U extends keyof any>=Pick<T,Exclude<keyof T, U>>;


type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}