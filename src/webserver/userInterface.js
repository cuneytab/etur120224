const userSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                userID: { type: 'string' },
                userName: { type: 'string' },
                email: { type: 'string' },
                role: { type: 'string' }
            },
            required: ['userID', 'userName', 'email', 'role']
        }
    }
};

const opts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        userID: { type: 'string' },
                        userName: { type: 'string' },
                        email: { type: 'string' },
                        role: { type: 'string' },
                    }
                }
            }
        }
    }
}

// get user information




