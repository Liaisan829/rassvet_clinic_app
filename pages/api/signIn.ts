import {rest} from "msw";
import users from "../../stores/usersStore";

export const signInHandler = (
    rest.post("/api/signIn", (req, res, ctx) => {
            sessionStorage.setItem('is-authenticated', 'true')

            if (typeof req.body === "string") {
                const {user} = JSON.parse(req.body);
                console.log(user);
                users.set(0, user);
            }
            return res(
                ctx.status(200)
            )
        }
    )
)