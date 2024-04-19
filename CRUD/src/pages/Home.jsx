import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const results = await axios.get("http://localhost:8080/getUsers");
        console.log(results.data);
        setUsers(results.data)
    }

    //delete the user
    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

    return (
        <div>
            <table className="table shadow mt-4 py-4">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-primary mx-2'>View</button>
                                    <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2'onClick={()=>{deleteUser(user.id)}} >Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
