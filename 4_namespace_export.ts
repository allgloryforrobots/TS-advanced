namespace Form {
    export type Type = 'inline' | 'block'
    export type State = 'active' | 'advanced'

    export interface IInfo {
        type: Type
        state: State
    }

}
