import { login } from "../../sevices/Users"
import { storeToken } from '../../sevices/localStore'

function userReducer(state = [], action) {
    switch (action.type) {
        case 'login':
            return (
                login(action.payload).then((Response) => {
                    if (Response.data.status === 'success') {
                        storeToken(Response.data.data.token)
                        state.push(Response.data.data.user)
                    }

                }).catch((e) => { console.log(e.response.data.message) }))
        default:
            return state
    }
}
export {
    userReducer
}