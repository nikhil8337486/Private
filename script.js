document.getElementById("search-btn").addEventListener("click", function() {
    let numberPlate = document.getElementById("vehicle-number").value;
    if (!numberPlate) {
        alert("Please enter a vehicle number");
        return;
    }
    
    let url = `https://vehicleapiinformation.raghavnikhil015.workers.dev/?numberPlate=${numberPlate}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error fetching data!";
        });
});

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

Telegram.WebApp.ready();
