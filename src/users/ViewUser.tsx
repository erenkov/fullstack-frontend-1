import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {UserDTO} from "./User";

// interface ViewUserParams {
//     id: number;    // TODO @aerenkov how to add reference to User.id
// }

// export default function ViewUser({id}: ViewUserParams) { // TODO @aerenkov how to define id
export default function ViewUser() {

    const [user, setUser] = useState<UserDTO>({
        name: "",
        username: "",
        email: ""
    });

    const {id} = useParams(); // TODO @aerenkov how to define id

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios(`http://localhost:8081/user/${id}`);
        setUser(result.data);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : {" " + user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name: </b>
                                    {" " + user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>UserName: </b>
                                    {" " + user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {" " + user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary mr-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}


