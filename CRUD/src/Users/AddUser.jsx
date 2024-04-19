import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    userName: '',
    email: ''
  })

  const { name, userName, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/add-user", user)
    navigate('/')
  }
  return (
    <div className='container'>
      <div className="row">

        <div className="col-md-6 offset-md-3 py-4 mt-2 rounded shadow border">

          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmitFunction(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className='form-label'>Name</label>
              <input
                className='form-control'
                type="text"
                value={name}
                name='name'
                onChange={(e) => onInputChange(e)}
                placeholder='Enter Name'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UserName" className='form-label'>UserName</label>
              <input
                className='form-control'
                type="text"
                value={userName}
                name='userName'
                onChange={(e) => onInputChange(e)}
                placeholder='Enter Username'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className='form-label'>Email</label>
              <input
                className='form-control'
                type="text"
                value={email}
                name='email'
                onChange={(e) => onInputChange(e)}
                placeholder='Enter Email'
              />
            </div>
            <button className='btn btn-outline-primary' type='submit'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' type='button' to='/'>Cancel</Link>
          </form>

        </div>

      </div>
    </div>
  )
}
