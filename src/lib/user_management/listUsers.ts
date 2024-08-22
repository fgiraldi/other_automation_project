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
// up._init()
//     .then(() =>
//         up.listUsers().then(r =>
//             r.filter(u =>
//                 Object.keys(user)
//                     .filter(k => user[k].length > 0)
//                     .every(k =>
//                         typeof u[k] == 'string'
//                             ? u[k].includes(user[k])
//                             : u[k] == user[k]
//                     )
//             )
//         )
//     )
//     .then(j =>
//         j.forEach(element => {
//             console.log(up.decryptUserData(element));
//         })
//     );
// //helpful just to get a specific user
// // .then(() => up.getUser('314'))
// // .then(() => up.removeUser('6022'))
// // .then(console.log);
