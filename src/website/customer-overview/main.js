function createCustomer() {
    let newCustomer = {
        customerID: document.getElementById('customerIDInput').value,
        customerName: document.getElementById('customerNameInput').value,
        contactPerson: {
          personName: document.getElementById('contactPersonNameInput').value,
          personEmail: document.getElementById('contactPersonEmailInput').value,
          personPosition: document.getElementById('contactPersonPositionInput').value,
        },
        customerEmail: document.getElementById('customerEmailInput').value,
      };
    
    function postData() {
        // Target URL for the POST request
        var url = 'http://127.0.0.1:3000/createCustomerById';
    
        // Options for the POST request
        var options = {
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
                return response.json();
            })
            .then(data => {
                console.log('Response received:', data);
                // You can handle the response data here if the request is successful
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                // You can handle the error message here in case of failure
            });
    }    
}

