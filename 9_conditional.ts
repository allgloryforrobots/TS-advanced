// Условные типы
type Conditional<T> = T extends string ? number : boolean;

const value: Conditional<string> = 5

type Data = { value: string }
type Model = { model: string }
type DataOrModel<T> = T extends string ? Data : Model

function todo<T>(arg: T): DataOrModel<T> {
    throw Error('Not implemented');
}

const valueTodo = todo('123')
valueTodo.value // string

const numTodo = todo(123)
numTodo.model

