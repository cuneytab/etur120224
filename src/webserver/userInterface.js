import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

import { getUserInformation, 
         createUser,
         updateUser,
         deleteUser } from "../services/users-service.js"

import cors from '@fastify/cors';

fastify.register(cors, {
    origin: '*'
});

const userProperties = {
    userID: { type: 'string' },
    userName: { type: 'string' },
    email: { type: 'string' },
    role: { type: 'string' },
}

const userSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                userProperties
            },
            required: ['userID', 'userName', 'email', 'role']
        }
    }
};

const optsUser = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    userProperties,
                }
            }
        }
    }
}

// get user information
fastify.get("/getUserInformation/:id", optsUser, async function handler(request, reply) {
    const aUserId = request.params.id;
    const user = getUserInformation(aUserId);

    reply.send(user);
});

// create user 
fastify.post("/createUser", userSchema, async function handler(request, reply) {
    const newUser = createUser(request.body.userId,
                               request.body.userName,
                               request.body.userEmail,
                               request.body.role);

    reply.send(newUser);
});

// update user
fastify.patch("/updateUser", userSchema, async function handler(request, reply) {
    const updatedUser = updateUser(request.body.userId,
                                    request.body.userName,
                                    request.body.userEmail,
                                    request.body.role);

    reply.send(updatedUser);
});

// delete user
fastify.delete("/deleteUser/:id", async function handler(request, reply) {
    const aUserId = request.params.id;
    const deletedUserId = deleteUser(aUserId);

    reply.send(deletedUserId);
});





