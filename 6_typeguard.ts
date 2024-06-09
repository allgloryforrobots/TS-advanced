type CarBrand = 'bmw' | 'lada' | 'toyota'

interface CarBase {
    year: number
    brand: CarBrand
}

interface Bmw extends CarBase {
    climateControl: boolean
    brand: 'bmw'
}

interface Lada extends CarBase {
    conditioner?: boolean
    brand: 'lada'
}

interface Toyota extends CarBase {
    cruiseControl: boolean
    brand: 'toyota'
}

// union type
type Car = Bmw | Lada // если добавим Toyota, то exhaustiveCheck выбросит ошибку