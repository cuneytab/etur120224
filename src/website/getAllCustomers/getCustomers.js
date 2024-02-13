document.addEventListener('DOMContentLoaded', function() {
    fetchCustomers();
});

function fetchCustomers() {
    fetch('http://localhost:3000/getCustomers')
        .then(response => response.json())
        .then(data => {
            data.forEach(customer => createCustomerCard(customer));
        })
        .catch(error => console.error('Fehler beim Abrufen der Kunden:', error));
}

function createCustomerCard(customer) {
    const userContainer = document.querySelector('.user__container');

    // Erstellen der Nutzerkarte für jeden Kunden
    const userDiv = document.createElement('div');
    userDiv.className = 'user';

    // Ähnlich wie Ihr HTML, füllen Sie die Details für jeden Kunden
    userDiv.innerHTML = `
        <div class="image" style="color: white; padding: 10px">
            ${customer.id}
        </div>
        <div class="user__content">
            <div class="text">
                <span class="name">${customer.name}</span>
                <p class="username">${customer.email}</p>
            </div>
            <div class="tooltip-container">
                <div class="tooltip">
                    <div class="profile">
                        <div class="user">
                            <div class="details" style="color: white;">
                                Kontakt Person Name: ${customer.contactPerson.name}
                                <div class="username">${customer.contactPerson.email}</div>
                                <div class="about">${customer.contactPerson.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text">
                    <a class="icon" href="#">
                        <div class="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="tooltipSVG">
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
