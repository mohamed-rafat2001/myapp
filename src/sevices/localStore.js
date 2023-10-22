export function storeToken(token) {
    if (!localStorage.getItem('token')) {
        localStorage.setItem('token', JSON.stringify(token))
    }

}
export function getToken() {
    localStorage.getItem('token')
}