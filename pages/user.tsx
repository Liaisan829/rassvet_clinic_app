import {useState} from "react";

const User = () => {
    const [newUser, setNewUser] = useState<any>();

    return (
        <>
            <h1>Users</h1>
            {newUser && (
                <ul>
                    <li>
                        {newUser.email},
                        {newUser.password}
                    </li>
                </ul>
            )}
        </>
    );
}
export default User;