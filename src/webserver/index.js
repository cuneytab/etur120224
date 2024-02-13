import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});
import { getAllCustomers, createCustomer, deleteCustomer, readCustomer } from '../services/customers.js';
createCustomer('ETUR-CN-34623', 'Marry Jane', 'Jake Sully', 'j.k@planb.com', 'developer', 'm.j@planb.com');
createCustomer('ETUR-CN-34624', 'Marry Jane', 'Jake Sully', 'j.k@planb.com', 'developer', 'm.j@planb.com');
createCustomer('ETUR-CN-34625', 'Marry Jane', 'Jake Sully', 'j.k@planb.com', 'developer', 'm.j@planb.com');
console.log('Test');
// Get all customers
fastify.get("/getCustomers", async function handler(request, reply) {
    const customers = getAllCustomers();
  return customers;
});

// Get Customer By Id
fastify.get("/getCustomerById/:id", async function handler(request, reply) {
    const customerId = request.params.id;
    const customer = readCustomer(customerId)
    console.log(customer)
    reply.send(customer);
  //return customer;
});

// Create Customer By Id
fastify.post("/createCustomerById/:id", async function handler(request, reply) {
  return { hello: "world" };
});

// Delete Customer By Id
fastify.delete("/deleteCustomerById/:id", async function handler(request, reply) {
  return { hello: "world" };
});


// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
