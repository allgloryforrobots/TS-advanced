/// <reference path="4_namespace_export.ts" />

namespace Form {
    class MyForm {
        private type: Type = 'inline'
        private state: State = 'active'

        constructor(public email: string) {}

        getInfo(): IInfo {
            return {
                type: this.type,
                state: this.state,
            }
        }
    }

    const form = new MyForm('a@gmail.com')
}


// без импорта
namespace Form1 {
    type Type1 = 'inline1' | 'block1'
    const a: Type1 = 'inline1'
}

// const b: Type1 = 's' // error


