import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function EditUser() {
    let navigate = useNavigate()
    
    //get the relevent id from the link
    const { id } = useParams();

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
        await axios.put(`http://localhost:8080/user/${id}`, user)
        Swal.fire({
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        navigate('/')
    }


    //calling the getUser function when page loading
    useEffect(() => {
        getUser()
    }, [])

    //get the object relevent to the id 
    const getUser = async () => {
        const results = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(results.data); //set the relevent object to the user object then its auto loaded to the relevent input fields
    }




    return (
        <div className='container'>
            <div className="row">

                <div className="col-md-6 offset-md-3 py-4 mt-2 rounded shadow border">

                    <h2 className="text-center m-4">Edit User</h2>

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
                                required
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
                                required
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
                                required
                            />
                        </div>
                        <button className='btn btn-outline-primary' type='submit'>Update</button>
                        <Link className='btn btn-outline-danger mx-2' type='button' to='/'>Cancel</Link>
                    </form>

                </div>

            </div>
        </div>
    )
}
