const users = [
    { role: 'Admin',id: 1 },
    { role: 'User', id: 2 },
    { role: 'Enroly', id: 3 },
    { role: 'Agent', id: 4 },
    { role: 'Admin', id: 5 },
    { role: 'Student', id: 6 },
];

const findAdmins = (users) => {
    return users
        .filter(obj => obj.role === 'Admin')
        .map(admin => admin.id);
}

console.log(findAdmins(users));
   