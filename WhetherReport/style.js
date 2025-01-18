document.getElementById('firstSection').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    
    if (location) {
        console.log(`Fetching weather data for: ${location}`);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e40d8bfc07f177183111a3101fc564c4&units=metric`)
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                document.querySelector('#secondSection p').innerText = data.weather[0].description;
                document.querySelector('#temperature h1').innerText = `${data.main.temp}°C`;
                document.querySelector('#humidity h1').innerText = `${data.main.humidity}%`;
            })
            .catch(error => {
                console.error('Error:', error);
                if (error.cod && error.message) {
                    alert(`Error: ${error.message} - ${error.cod}`);
                } else {
                    alert('Could not fetch weather data. Please check the location entered.');
                }
            });
    } else {
        alert('Please enter a location');
    }
});
