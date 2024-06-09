enum UserRole {
    USER = 'user',
    ADMIN = 'admin'
}

// аккуратно!
// typeof взять нельзя
// нельзя использовать цикл in по ключам
const enum UserRole1 {
    USER = 'user',
    ADMIN = 'admin'
}

// хак через объекты, чтобы передать строку
const UserRoleObj = {
    ADMIN: 'admin',
    USER: 'user'
} as const

type userRoleType = typeof UserRoleObj[keyof typeof UserRole];

function fn(role: userRoleType) {

}

fn('admin')

