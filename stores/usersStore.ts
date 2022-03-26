// const users = [
//     {
//         email: 'Akhmetova',
//         password: "Liaisan"
//     },
//
// ]
//
// export default users;

interface User {
    email: string,
    password: string
}

const usersStore: Map<number, User> = new Map();

export default usersStore;