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

// при добавлении нового типа делаем так, чтобы в todoSmtWithCar был обязательный кейс с обработкой
function exhaustiveCheck(param: never) {
    console.log('Обработайте значение: ' + param)
}

function todoSmtWithCar(car: Car) {
    switch (car.brand) {
        case 'bmw':
            // todo
            break
        case 'lada':
            // todo
            break
        default:
            // сюда код дойти не должен
            exhaustiveCheck(car)
            break
    }
}

