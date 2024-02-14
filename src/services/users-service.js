import { checkUserIdFormat } from './validation-service.js';

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

// local operations

function getUserIndexById(aUserId) {
    const index = users.findIndex(
      (user) => user.userId === aUserId
    );
    return index;
  }

// get operations

export function getUserInformation(aUserId) {
    const filteredUser = users.filter(
        (user) => users.userId === aUserId
      );
      return filteredUser;
}

// post operations

export function createUser(userId, userName, userEmail, role) {
    const userIdValid = checkUserIdFormat(userId);
    if (userIdValid) {
        const index = getUserIndexById(userId);
        if (index === -1) {
            users.push({
                userId,
                userName,
                userEmail,
                role,
            });

            const newUser = getUserInformation(userId);
            return newUser;
        } else {
            console.log("User existiert bereits");
        }
    }
}

// patch operations

export function updateUser(userId, userName, userEmail, role) {
    const userIdValid = checkUserIdFormat(userId);
    if (userIdValid) {
        const index = getUserIndexById(userId);
        if (index !== -1) {
            users[index].userName = userName;
            users[index].userEmail = userEmail;
            users[index].role = role;

            return users[index];
        } else {
            console.log("User existiert nicht");
        }
    }
}

// delete operations

export function deleteUser(aUserId) {
    const userIdValid = checkUserIdFormat(aUserId);
    if (userIdValid) {
        const index = getUserIndexById(aUserId);
        if (index !== -1) {
            users.splice(index, 1);
            return aUserId;
        } else {
            console.log("User existiert nicht");
        }
    }
}

