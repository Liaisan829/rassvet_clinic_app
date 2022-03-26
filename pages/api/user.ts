import {rest} from "msw";
import Users from "../../stores/usersStore";

rest.get('/api/user', (req, res, ctx) => {
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
    const user = Users.get(0);
    if (!user) return res();
    // If authenticated, return a mocked user details
    return res(
        ctx.status(200),
        ctx.json({
            username: user.email,
            password: user.password
        }),
    )
})