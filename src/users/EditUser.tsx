import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {UserDTO} from "./User";

// interface EditUserParams {
//     id: number;    // TODO @aerenkov how to add reference to User.id
// }

// export default function EditUser({id}: EditUserParams) {  // TODO @aerenkov how to define id
export default function EditUser() {

    let navigate = useNavigate();

    const {id} = useParams(); // TODO @aerenkov how to define id

    const [user, setUser] = useState<UserDTO>({
        name: "",
        username: "",
        email: ""
    });

    const {name, username, email} = user;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.put(`http://localhost:8081/user/${id}`, user);
        navigate("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8081/user/${id}`);
        setUser(result.data);
    }

    return (<div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit User</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type={"text"} className="form-control"
                               placeholder="Enter you name" name="name"
                               value={name} onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">
                            Username
                        </label>
                        <input type={"text"} className="form-control"
                               placeholder="Enter you username" name="username"
                               value={username} onChange={onInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input type={"text"} className="form-control"
                               placeholder="Enter you e-mail address" name="email"
                               value={email} onChange={onInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>);
}