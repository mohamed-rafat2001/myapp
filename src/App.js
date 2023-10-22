import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginFunc from './authUser/login';
import Profile from './components/profile';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginAction } from './store/actions/userAction'

function App() {
  // const state = useSelector((state) => state)
  // const dispatch = useDispatch()
  // console.log(state)
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(loginAction({ name: 'mohamed', email: 'ohamed20rafat' }))}>click</button>
      {state.map(e => <h1>{e.name}</h1>)} */}
      <Routes>
        <Route path='/' element={<LoginFunc />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
