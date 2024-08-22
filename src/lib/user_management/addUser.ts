// import UserProvider from '../UserProvider';

// const args = process.argv.slice(2);
// const user = {
//     id: '',
//     username: '',
//     password: '',
//     role: '',
//     availability: '',
//     institution: '',
//     department: '',
//     lms: '',
// };

// args.forEach(a => {
//     user[a.substr(0, a.indexOf('='))] = a.slice(a.indexOf('=') + 1);
// });

// const up = new UserProvider();
// up._init().then(
//     async () =>
//         await up.addUser(
//             user.id,
//             user.username,
//             user.password,
//             user.role,
//             user.availability,
//             user.institution,
//             user.department,
//             user.lms
//         )
// );
