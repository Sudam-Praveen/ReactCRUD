import React, { useState } from 'react'

export default function AddUser() {

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: ""
  })

  const { name, userName, email } = user;

  const onInputChange = (e) => {
    console.log(e);
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <div className="row">


        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

          <h2 className="text-center m-4">Register User</h2>

          <div className="mb-3">
            <label htmlFor="Name" className='form-label'>Name</label>
            <input
              onChange={(e) => onInputChange(e)}
              value={name}
              type="text"
              className='form-control'
              placeholder='Enter Name'
              name='name' />
          </div>

          <div className="mb-3">
            <label htmlFor="Username" className='form-label'>UserName</label>
            <input
              onChange={(e) => onInputChange(e)}
              value={userName}
              type="text"
              className='form-control'
              placeholder='Enter UserName'
              name='userName' />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className='form-label'>Email</label>
            <input
              onChange={(e) => onInputChange(e)}
              value={email}
              type="text"
              className='form-control'
              placeholder='Enter email'
              name='email' />
          </div>

          <button className='btn btn-outline-primary' type='submit'>Submit</button>

          <button className='btn btn-outline-danger mx-2' type='submit'>Cancel</button>

        </div>


      </div>
    </div>
  )
}
