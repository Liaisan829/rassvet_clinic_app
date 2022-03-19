import {useState} from "react";

const Login = () => {
    const [logins, setLogin] = useState<any>();

    const handleGetReviews = () => {
        // Client-side request are mocked by `mocks/browser.js`.
        fetch('/login')
            .then((res) => res.json())
            .then(setLogin)
    }

    return (
        <>
            <h1>Login page</h1>
            <button onClick={handleGetReviews}>Load login</button>
            {logins && (
                <ul>
                    <li key={logins.id}>
                        <p>{logins.firstName}</p>
                        <p>{logins.lastName}</p>
                    </li>
                </ul>
            )}
        </>
    );
}
export default Login;