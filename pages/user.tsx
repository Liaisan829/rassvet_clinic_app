import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const User = () => {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        fetch('/user')
            .then((res) => res.json())
            .then(setUser)
    }, [])

    return (
        <>
            <h1>Users</h1>
            {user && (
                <ul>
                    <li>
                        {user.username}
                    </li>
                </ul>
            )}
        </>
    );
}
export default User;