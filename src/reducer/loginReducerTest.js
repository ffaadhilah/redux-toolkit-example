import { LOGIN } from '../action/types'

// export default (loginn = 'NULL', action) => {
    // 'login' argument must the same with the return
export default (loginn = '', action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        default:
            return loginn
    }
}

