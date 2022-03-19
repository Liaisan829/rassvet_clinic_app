import {rest} from 'msw'
import user from "../pages/user";

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
    rest.get('/user', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const isAuthenticated = sessionStorage.getItem('is-authenticated')
        if (!isAuthenticated) {
            // If not authenticated, respond with a 403 error
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }
        // If authenticated, return a mocked user details
        return res(
            ctx.status(200),
            ctx.json({
                username: 'admin',
            }),
        )
    }),
    rest.post("/signIn", (req, res, ctx) => {
        if (typeof req.body === "string") {
            const {user} = JSON.parse(req.body);
            console.log('user', user);

            return res(
                ctx.json({
                    id: Math.random(),
                    user
                })
            )
        }
    })
]