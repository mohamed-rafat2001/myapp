const login = 'login'
export function loginAction(data) {
    return {
        type: login,
        payload: data
    }
}