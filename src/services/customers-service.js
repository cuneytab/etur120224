import { checkCustomerIdFormat } from './validation-service.js';

const customer = {
  customerId: null,
  customerName: null,
  userIds: [],
  contactPersonId: null,
  customerEmail: null,
};

let customers = [];

customers.push({
  customerId: "ETUR-CN-0001",
  customerName: "PlanA.",
  userIds: [
    "ETUR-UN-00001",
    "ETUR-UN-00002",
    "ETUR-UN-00003",
  ],
  contactPersonId: "ETUR-UN-00003",
  customerEmail: "info@plana.com",
});

// local operations

function getCustomerIndexById(aCustomerId) {
  const index = customers.findIndex(
    (customer) => customer.customerId === aCustomerId
  );
  return index;
}

// get operations

export function getCustomerInformation(aCustomerId) {
  const filteredCustomer = customers.filter(
    (customer) => customer.customerId === aCustomerId
  );
  return filteredCustomer;
}

export function getAssignedCustomers(aUserId) {
  const filteredCustomers = customers.filter(
    (customer) => customer.userIds.includes(aUserId)
  );
  return filteredCustomers;
}

// post operations

export function createCustomer(
  customerId,
  customerName,
  userIds,
  contactPersonId,
  customerEmail,
) {
  const customerIdValid = checkCustomerIdFormat(customerId);
  if (customerIdValid) {
    const index = getCustomerIndexById(customerId);
    if (index === -1) {
      customers.push({
        customerId,
        customerName,
        userIds,
        contactPersonId,
        customerEmail,
      });
      
      const newCustomer = getCustomerInformation(customerId);
      return newCustomer;
    } else {
      console.log("Kunde existiert bereits");
    }
  }
}

// patch operations

export function updateCustomer(
  customerId,
  customerName,
  userIds,
  contactPersonId,
  customerEmail,
) {
  const customerIdValid = checkCustomerIdFormat(customerId);
  if (customerIdValid) {
    const index = getCustomerIndexById(customerId);
    if (index !== -1) {
      customers[index].customerName = customerName;
      customers[index].userIds = userIds;
      customers[index].contactPersonId = contactPersonId;
      customers[index].customerEmail = customerEmail;

      return customers[index];
    } else {
      console.log("Kunde existiert nicht");
    }
  }
}

// delete operations

export function deleteCustomer(aCustomerId) {
  const customerIdValid = checkCustomerIdFormat(aCustomerId);
  if (customerIdValid) {
    const index = getCustomerIndexById(aCustomerId);
    if (index !== -1) {
      customers.splice(index, 1);
      return aCustomerId; 
    } else {
      console.log(`Kein Kunde mit ID gefunden.`);
    }
  }
}

