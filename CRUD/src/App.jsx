import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import NavBar from './layout/NavBar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './Users/AddUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/addUser' element={<AddUser></AddUser>}></Route>
        </Routes>
      </Router>


    </div>
  )
}

export default App
