import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const results = await axios.get('http://localhost:8080/getUsers')
        console.log(results.data);
        setUsers(results.data)
    }

    return (
        <div className='container'>
            <div className="py-4">
                <table className="table border shadow">
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
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
