const customer = {
  customerID: null,
  customerName: null,
  contactPerson: {
    contactPersonName: null,
    contactPersonEmail: null,
    contactPersonPosition: null,
  },
  customerEmail: null,
};

let customers = [];

customers.push({
  customerID: "ETUR-CN-34622",
  customerName: "John Doe",
  contactPerson: {
    contactPersonName: "Some One",
    contactPersonEmail: "someone@planb.com",
    contactPersonPosition: "ceo",
  },
  customerEmail: "anemail@planb.com",
});

function getCustomerIndexById(newCustomerID) {
  const index = customers.findIndex(
    (customer) => customer.customerID === newCustomerID
  );
  return index;
}

function checkCustomerIdFormat(customerId) {
  const pattern = /ETUR-CN-\w+/;
  const isValid = pattern.test(customerId);
  if (!isValid) {
    console.log("No valid Customer Id Format");
    return false;
  } else {
    return true;
  }
}

export function getAllCustomers() {
  return customers;
}

export function createCustomer(
  customerID,
  customerName,
  contactPersonName,
  contactPersonEmail,
  contactPersonPosition,
  customerEmail
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
  console.log(result);
  return result;
}
