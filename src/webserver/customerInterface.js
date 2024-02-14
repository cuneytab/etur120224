import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

import { getCustomerInformation, 
         getAssignedCustomers, 
         createCustomer,
         updateCustomer,
         deleteCustomer } from "../services/customers-service.js";

import cors from '@fastify/cors';

fastify.register(cors, {
    origin: '*'
  });

const customerProperties = {
    customerId: { type: 'string' },
    customerName: { type: 'string' },
    userIds: { type: 'array' },
    contactPersonId: { type: 'string' },
    customerEmail: { type: 'string' },
}

const customerSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                customerProperties,
            },
            required: ['customerId', "customerName", "userIds", "contactPersonId", "customerEmail"]
        }
    }
}

const optsCustomer = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    customerProperties,
                }
            }
        }
    }
}

const optsCustomers = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        customerProperties,
                    }
                }
            }
        }
    }
}

// get customer information
fastify.get("/getCustomerInformation/:id", optsCustomer, async function handler(request, reply) {
    const aCustomerId = request.params.id;
    const customer = getCustomerInformation(aCustomerId);

    reply.send(customer);
});

// get assigned customers
fastify.get("/getAssignedCustomers/:id" , optsCustomers, async function handler(request, reply) {
    const aUserId = request.params.id;
    const customers = getAssignedCustomers(aUserId);

    reply.send(customers);
});

// create customer
fastify.post("/createCustomer", customerSchema, async function handler(request, reply) {
    const newCustomer = createCustomer(request.body.customerId,
                                       request.body.customerName,
                                       request.body.userIds,
                                       request.body.contactPersonId,
                                       request.body.customerEmail);

    reply.send(newCustomer);
});

// update customer 
fastify.patch("/updateCustomer", customerSchema, async function handler(request, reply) {
    const updatedCustomer = updateCustomer(request.body.customerId,
                                           request.body.customerName,
                                           request.body.userIds,
                                           request.body.contactPersonId,
                                           request.body.customerEmail);

    reply.send(updatedCustomer);
});

// delete customer
fastify.delete("/deleteCustomer/:id", async function handler(request, reply) {
    const aCustomerId = request.params.id;
    const deletedCustomerId = deleteCustomer(aCustomerId);

    reply.send(deletedCustomerId);
});



// Run the server!
try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
