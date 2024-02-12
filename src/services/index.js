import { getAllCustomers } from './customers.js';
import { createCustomer } from './customers.js';
import { deleteCustomer } from './customers.js';
import { readCustomer } from './customers.js';


createCustomer('ETUR-CN-34623', 'Marry Jane', 'Jake Sully', 'j.k@planb.com', 'developer', 'm.j@planb.com');
createCustomer('ETUR-CN-34623', 'Marry Jane', 'Jake Sully', 'j.k@planb.com', 'developer', 'm.j@planb.com' );

const kunden = getAllCustomers();
// console.log('Customer: ', kunden);



const gelesenerKunde = readCustomer('ETUR-CN-34623');
console.log(gelesenerKunde)
/* console.log("gelesenerKunde", gelesenerKunde)
deleteCustomer(2);
const kunden2 = getAllCustomers();
console.log('Customer: ', kunden2); */

