const user = {
    userID: null,
    userName: null,
    email: null,
    role: null
}

let users = [];

users.push(
    {
        userID: "ETUR-UN-00001",
        userName: "Mario Silva",
        email: "mario.silva@pb.com",
        role: "PM"
    },
    {
        userID: "ETUR-UN-00002",
        userName: "Jone Dummy",
        email: "jone.dummy@pb.com",
        role: "Dev"
    },
    {
        userID: "ETUR-UN-00003",
        userName: "Derek Doruk",
        email: "derek.doruk@plana.com",
        role: "Customer"
    }
);

// get operations

export function getUserInformation(userId) {

}

export function getUsersFromCompany(customerId) {

}

// post operations

export function createUser(userId, userName, userEmail, role) {

}

// patch operations

export function updateUser(userId, userName, userEmail, role) {

}

// delete operations

export function deleteUser(userId) {

}

