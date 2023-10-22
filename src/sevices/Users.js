import tokenInterceptor from './tokenInterceptore'
const login = (data) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return tokenInterceptor.post('/login', data)
}
export {
    login
}