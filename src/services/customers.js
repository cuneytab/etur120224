const customer = {
    customerID: null,
    customerName: null,
    contactPerson: {
        personName: null,
        personEmail: null,
        personPosition: null
    },
    customerEmail: null
}

let customers = [];

customers.push({ customerID: 1, 
                 customerName: 'John Doe', 
                 contactPerson: {personName: 'Some One', 
                                 personEmail: 'someone@planb.com', 
                                 personPosition: 'ceo'}, 
                 customerEmail: 'anemail@planb.com' });

function getCustomerIndexById(newCustomerID) {
    const index = customers.findIndex(customer => customer.customerID === newCustomerID);
    return index
}

function checkCustomerIdFormat(customerId) {
    const pattern = /ETUR-CN-\w+/;
    const isValid = pattern.test(customerId)
    if (isValid === false) {
        console.log('No valid Customer Id Format')
    } else {
        return isValid;
    }
}

export function getAllCustomers() {
    return customers;
}

export function createCustomer(customerID, customerName, contactPersonName, contactPersonEmail, contactPersonPosition, customerEmail) {
    customers.push({ customerID, customerName, contactPerson: {contactPersonName, contactPersonEmail, contactPersonPosition}, customerEmail });
}

export function deleteCustomer(newCustomerID) {
    const index = getCustomerIndexById(newCustomerID)
    if (index !== -1) {
        customers.splice(index, 1);
    } else {
        console.log(`Kein Kunde mit ID gefunden.`);
    }
}

export function readCustomer(newCustomerID) {
    const customerIdValid = checkCustomerIdFormat(newCustomerID);
    if (customerIdValid === true) {
        const index = getCustomerIndexById(newCustomerID)
        return customers[index];
    }
    
}