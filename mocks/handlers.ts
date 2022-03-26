import {rest} from 'msw'
import user from "../pages/user";
import usersStore from "../stores/usersStore";
import Users from "../stores/usersStore";

export const handlers = [
    rest.get('/login', (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('is-authenticated', 'true')
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json({
                id: 1,
                firstName: 'John',
                lastName: 'Maverick',
            })
        )
    }),



]