document.addEventListener('DOMContentLoaded', function() {
    fetchCustomers();
});

function fetchCustomers() {
    fetch('http://localhost:3000/getCustomers')
        .then(response => response.json())
        .then(data => {
            console.log('DATA', data)
            data.forEach(customer => createCustomerCard(customer));
        })
        .catch(error => console.error('Fehler beim Abrufen der Kunden:', error));
}

function createCustomerCard(customer) {
    const userContainer = document.querySelector('.customers-user__container');

    // Erstellen der Nutzerkarte für jeden Kunden
    const userDiv = document.createElement('div');
    userDiv.className = 'customers-user';

    // Ähnlich wie Ihr HTML, füllen Sie die Details für jeden Kunden
    userDiv.innerHTML = `
        <div class="customers-image" style="color: white; padding: 10px">
            ${customer.customerID}
        </div>
        <div class="customers-user__content">
            <div class="customers-text">
                <span class="customers-name">${customer.customerName}</span>
                <p class="customers-username">${customer.customerEmail}</p>
            </div>
            <div class="customers-tooltip-container">
                <div class="customers-tooltip">
                    <div class="customers-profile">
                        <div class="customers-user">
                            <div class="customers-details" style="color: white;">
                                ${customer.contactPerson.contactPersonName}
                                <div class="customers-username">${customer.contactPerson.contactPersonEmail}</div>
                                <div class="customers-about">${customer.contactPerson.contactPersonPosition}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="customers-text">
                    <a class="customers-icon" href="#">
                        <div class="customers-layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="customers-tooltipSVG">
                                <div style="font-size: small">Kontakt</div>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `;

    userContainer.appendChild(userDiv);
}
