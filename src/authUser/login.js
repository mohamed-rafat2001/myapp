import { useState } from "react"
// import { login } from '../sevices/Users'
// import { useNavigate } from "react-router-dom"
// import { storeToken } from '../sevices/localStore'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/actions/userAction'

function LoginFunc() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const state = useSelector((state) => state)
    // const nav = useNavigate()
    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()
        dispatch(loginAction({ email, password }))
        console.log(state)
        // nav('/profile')
        // login().then((Response) => {
        //     if (Response.data.status === 'success') {
        //         storeToken(Response.data.data.token)
        //         nav('/profile')
        //     }
        //     else {
        //         console.log(Response.data.message)
        //     }
        // }).catch((e) => { console.log(e.response.data.message) })

    }
    return (
        <form onSubmit={submit}>
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                </div>

                <div className="col">
                    <a href="#!">Forgot password?</a>
                </div>
            </div>

            <button type="submite" className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                </button>
            </div>
        </form>
    )
}
export default LoginFunc