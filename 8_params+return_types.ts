interface User {
    id: string,
    data: string
}

function fn(arg1: string, arg2: boolean): User {
    return { id: '1', data: 'value' }
}

// вернуть тип функции (например для библиотечной функции)
type FnResult = ReturnType<typeof fn>;

// объект подхватил поля
// const obj: FnResult = {
//
// }

// вернуть типы аргументов из функции
type FnArguments = Parameters<typeof fn>

const args: FnArguments = ['f', true]
