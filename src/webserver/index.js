import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});
import { getAllCustomers, createCustomer, deleteCustomer, readCustomer } from '../services/customers.js';

import cors from '@fastify/cors'

fastify.register(cors, {
  origin: '*'
});

createCustomer('ETUR-CN-34623', 'Marry Jane', 'Jake Sully', 'j.k@planb.com', 'developer', 'm.j@planb.com');
createCustomer('ETUR-CN-34624', 'Marry Jane', 'Jake Sully', 'j.k@planb.com', 'developer', 'm.j@planb.com');
createCustomer('ETUR-CN-34625', 'Marry Jane', 'Jake Sully', 'j.k@planb.com', 'developer', 'm.j@planb.com');
console.log('Test');

const contactPersonSchema = {
  type: 'object',
  properties: {
    contactPersonName: { type: 'string' },
    contactPersonEmail: { type: 'string' },
    contactPersonPosition: { type: 'string' },
  },
  required: ['contactPersonName', 'contactPersonEmail', 'contactPersonPosition']
};
const customerSchema = {
  schema: {
    body: {
      type: 'object',
      properties: {
        customerID: { type: 'string' },
        customerName: { type: 'string'},
        contactPerson: contactPersonSchema,
        customerEmail: { type: 'string' },
      },
      required: ['customerID', 'customerName', 'contactPerson', 'customerEmail']
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
            customerID: { type: 'string' },
            customerName: { type: 'string'},
            contactPerson: {
              contactPersonName: { type: 'string' },
              contactPersonEmail: { type: 'string' },
              contactPersonPosition: { type: 'string' },
            },
            customerEmail: { type: 'string' },
          }
        }
      }
    }
  }
}

// Get all customers
fastify.get("/getCustomers", opts, async function handler(request, reply) {
    const customers = getAllCustomers();
  return customers;
});

// Get Customer By Id
fastify.get("/getCustomerById/:id", opts, async function handler(request, reply) {
    const customerId = request.params.id;
    const customer = readCustomer(customerId)
    console.log(customer)
    reply.send(customer);
  //return customer;
});

// Create Customer By Id
fastify.post("/createCustomerById", customerSchema, async function handler(request, reply) {
  createCustomer(request.body.id, request.body.name, request.body.contactPerson.contactPersonName, request.body.contactPerson.contactPersonEmail, request.body.contactPerson.contactPersonPosition, request.body.customerEmail);
});

// Delete Customer By Id
fastify.delete("/deleteCustomerById/:id", async function handler(request, reply) {
  deleteCustomer(request.params.id);
});


// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
