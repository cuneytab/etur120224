const customerSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                customerId: { type: 'string' },
                customerName: { type: 'string' },
                userIds: { type: 'array' },
                contactPersonId: { type: 'string' },
                customerEmail: { type: 'string' },
            },
            required: ['customerId', "customerName", "userIds", "contactPersonId", "customerEmail"]
        }
    }
}

const opts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        customerId: { type: 'string' },
                        customerName: { type: 'string' },
                        userIds: { type: 'array' },
                        contactPersonId: { type: 'string' },
                        customerEmail: { type: 'string' },
                    }
                }
            }
        }
    }
}

