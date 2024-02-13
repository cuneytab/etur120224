function createCustomer() {
    let newCustomer = {
        customerID: document.getElementById('customerIDInput').value,
        customerName: document.getElementById('customerNameInput').value,
        contactPerson: {
            contactPersonName: document.getElementById('contactPersonNameInput').value,
            contactPersonEmail: document.getElementById('contactPersonEmailInput').value,
            contactPersonPosition: document.getElementById('contactPersonPositionInput').value,
        },
        customerEmail: document.getElementById('customerEmailInput').value,
    };
    
    // Target URL for the POST request
    const url = 'http://127.0.0.1:3000/createCustomerById';

    // Options for the POST request
    const options = {
        method: 'POST', // Request method
        headers: {
            'Content-Type': 'application/json' // Content type
        },
        body: JSON.stringify(newCustomer)
    };

    // Sending the POST request
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            // You can handle the error message here in case of failure
        });   
}

function verifyCustomerIDFormat() {
    let customerId = document.getElementById('verifyCustomerIDFormat').value;
    
    const url = 'http://127.0.0.1:3000//verifyCustomerId/' + customerId;

    const options = {
        method: 'GET'
    }

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            // You can handle the error message here in case of failure
        });

    console.log(result);
    if (result == true) {
        document.getElementById("result").innerText = "Geeignet!"
    } else {
        document.getElementById("result").innerText = "Nicht geeignet!"
    }
}

