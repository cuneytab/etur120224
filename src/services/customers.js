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

// get operations

function getCustomerInformation(aCustomerId) {
  const index = customers.findIndex(
    (customer) => customer.customerId === aCustomerId
  );
  return index;
}

export function getAssignedCustomers(aUserId) {

}

// post operations

export function createCustomer(
  customerID,
  customerName,
  contactPersonId,
  customerEmail,
  ...userIds
) {
  const customerIdValid = checkCustomerIdFormat(customerID);
  if (customerIdValid) {
    const index = getCustomerIndexById(customerID);
    if (index === -1) {
      customers.push({
        customerID,
        customerName,
        contactPerson: {
          contactPersonName,
          contactPersonEmail,
          contactPersonPosition,
        },
        customerEmail,
      });
    } else {
      console.log("Kunde existiert bereits");
    }
  }
}

export function deleteCustomer(newCustomerID) {
  const customerIdValid = checkCustomerIdFormat(newCustomerID);
  if (customerIdValid) {
    const index = getCustomerIndexById(newCustomerID);
    if (index !== -1) {
      customers.splice(index, 1);
    } else {
      console.log(`Kein Kunde mit ID gefunden.`);
    }
  }
}

export function readCustomer(newCustomerID) {
  const customerIdValid = checkCustomerIdFormat(newCustomerID);
  if (customerIdValid === true) {
    console.log("CustomerID valid");
    const index = getCustomerIndexById(newCustomerID);
    return customers[index];
  }
}

export function verifyCustomerIDFormat(newCustomerID) {
  const result = checkCustomerIdFormat(newCustomerID);
  console.log('CustomerID verifying: ', result);
  return result;
}
