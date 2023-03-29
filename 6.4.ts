type X = { 
  x: { 
    a: 1
    b: 'hi'
        z: string
  }
  y: string
}


type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}
type DeepReadonly<T>={
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

type Todo = DeepReadonly<X>; // should be same as `Expected`


const test: Todo = {
    x: {
        a: 1,
        b: 'hi',
        z: 'try change me too',
    },
    y: 'try change me',
};


test.y = 'changed'; // Error
test.x.z = 'changed'; // Error