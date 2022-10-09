import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Counter from "../customcomponents/Counter";
import {User} from "../users/User";

// export default
const Home: React.FC = (props) => {

    // Array<User> / User[]
    const [users, setUsers] = useState<Array<User>>([]);

    // const {id} = useParams<string>();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/users");
        setUsers(result.data);
    }

    const deleteUser = async (id: User['id']) => {
        await axios.delete(`http://localhost:8081/user/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) =>
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary ms-2" to={`/viewuser/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary ms-2"
                                          to={`/edituser/${user.id}`}>Edit</Link>
                                    <button
                                        className="btn btn-danger ms-2"
                                        onClick={() => deleteUser(user.id)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <Counter className="mt-4" />
            </div>
        </div>
    );
}

export default Home;
