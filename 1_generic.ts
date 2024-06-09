const cars: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
const cars2: Array<string> = ['a', 'b', 'c'];

const promise = new Promise<string>(resolve => {
    setTimeout(() => resolve('promise resolved'), 100);
})
promise.then((value) => console.log(value.trim()))

const promise2: Promise<number> = new Promise(resolve => {})


function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Alex'}, {age: 26})
const merged2 = mergeObjects({model: 'Ford'}, {year: 2010})

// merged.name
// merged2.model

// ===========
interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length}  символов`
    }
}

// ====================
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R): any {
    return obj[key];
}

const person = {
    name: 'Alex',
    age: 18
}
getObjectValue(person, 'age')
// getObjectValue(person, 'job') error

// =========
class Collection<T extends number | string | boolean> {
    private readonly _items: T[] = []

    constructor(readonly array: T[] = []) {
        this._items = array
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items.filter(el => el !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['a', 'b'])
strings.add('1')
const numbers = new Collection([1, 1]) // автоопределение

// const objs = new Collection([{a: 1}, {a: 2}, {a: 3}]) // error

// ===============
interface ICar {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): ICar {
    const car: Partial<ICar> = {}

    if (model.length > 3) car.model = model
    if (year > 2000) car.year = year

    return car as ICar
}

//============
const carsStrings: Readonly<Array<string>> = ['a', 'b', 'c', 'd', 'e', 'f']
// carsStrings.push('a') // error
const numsArr: Readonly<number[]> = [1, 2, 3, 4, 5]
// numsArr.push(2, 3, 4, 5) error


















//





















//