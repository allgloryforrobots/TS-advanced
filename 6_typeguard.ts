type CarType = 'bmw' | 'lada' | 'toyota'

interface CarBase {
    year: number
    brand: CarBrand
}

interface BmwBase extends CarBase {
    climateControl: boolean
    brand: 'bmw'
}

interface Bmwx5 extends BmwBase {
    value: string
    model: 'x5'
}

interface Bmwx7 extends BmwBase {
    value: string
    model: 'x7'
}

type BmwType = Bmwx5 | Bmwx7

interface LadaBase extends CarBase {
    brand: 'lada'
    conditioner?: boolean
    model: 'priora' | 'vesta'
}

interface Vesta extends LadaBase {
    conditioner?: boolean
    model: 'vesta'
}

interface Priora extends LadaBase {
    conditioner?: boolean
    model: 'priora'
}

type LadaType = Vesta | Priora

type AllCars = LadaType | BmwType

// car is Vesta сохраняет правильный тип и включает автокомплит на конкретную моделт в блоке  if (isLadaVesta(car)) {
function isLadaVesta(car: AllCars): car is Vesta {
    return car.brand === 'lada' && car.model === 'vesta'
}

function isBmwX5(car: AllCars): car is Bmwx5 {
    return car.brand === 'bmw' && car.model === 'x5'
}


function fn(car: AllCars) {
    if (isLadaVesta(car)) {

    }

    if (isBmwX5(car)) {

    }
}













///



