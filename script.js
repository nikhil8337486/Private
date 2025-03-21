document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
    const numberInput = document.getElementById("numberPlate");
    const resultDiv = document.getElementById("result");

    searchBtn.addEventListener("click", async function () {
        const numberPlate = numberInput.value.trim();
        if (numberPlate === "") {
            resultDiv.innerHTML = "<p style='color: red;'>Please enter a number plate!</p>";
            return;
        }

        // ✅ Correct API URL
        const apiUrl = `https://vehicleapiinformation.raghavnikhil015.workers.dev/?numberPlate=${numberPlate}`;

        try {
            resultDiv.innerHTML = "<p>Fetching data...</p>"; // Show loading text
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // ✅ Check if API returned valid data
            if (!data || Object.keys(data).length === 0) {
                resultDiv.innerHTML = "<p style='color: red;'>No data found for this number plate!</p>";
                return;
            }

            // ✅ Formatting output properly
            resultDiv.innerHTML = `
                <h2>Vehicle Details</h2>
                <p><strong>Registration Number:</strong> ${data.registrationNumber || "N/A"}</p>
                <p><strong>Owner Name:</strong> ${data.ownerName || "N/A"}</p>
                <p><strong>Manufacturer:</strong> ${data.manufacturer || "N/A"}</p>
                <p><strong>Model:</strong> ${data.model || "N/A"}</p>
                <p><strong>Fuel Type:</strong> ${data.fuelType || "N/A"}</p>
                <p><strong>Registration Date:</strong> ${data.registrationDate || "N/A"}</p>
                <p><strong>Address:</strong> ${data.address || "N/A"}</p>
            `;
        } catch (error) {
            console.error("Error fetching data:", error);
            resultDiv.innerHTML = `<p style='color: red;'>Error fetching data. Please try again!</p>`;
        }
    });
});
