document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    fetch('https://api.sardorsohinazarov.uz/api/Auth/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error from response');
        }
        return response.json();
    })
    .then(data => {
        fetch('https://api.sardorsohinazarov.uz/api/Devices/GetAll', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + data.accessToken
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error from response');
            }
            return response.json();
        })
        .then(data => {
            var deviceList = document.getElementById('device-list');
            deviceList.innerHTML = '<h1>List of Cars:</h1>';
            var table = document.createElement('table');
            var thead = document.createElement('thead');
            var tbody = document.createElement('tbody');

            var headerRow = document.createElement('tr');
            var headers = ['ID', 'CarName', 'Phone Number', 'Car Number'];
            headers.forEach(headerText => {
                var th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            data.forEach(device => {
                var tr = document.createElement('tr');
                var values = [device.id, device.fullName, device.phoneNumber, device.carNumber]; 
                values.forEach(value => {
                    var td = document.createElement('td');
                    td.textContent = value;
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);

            deviceList.appendChild(table);
            alert('You logged in!');
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    })
    .catch(error => {
        console.error('Fetch error:', error);
        alert('Login failed. Please try again.');
    });
});