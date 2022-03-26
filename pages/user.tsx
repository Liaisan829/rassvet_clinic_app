import {useEffect, useState} from "react";
import {rest} from "msw";

const User = () => {
    useEffect(() => {
        fetch("/api/user").then(r => {
            console.log(r);
            return r.json()
        }).then(s => {
            console.log(s.body);
            setNewUser(s.body)
        })
    }, [])

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