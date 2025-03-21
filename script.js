document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Script Loaded!");  // ✅ Check if script is running

    const searchBtn = document.getElementById("search-btn");  // ✅ Correct ID
    const numberInput = document.getElementById("vehicle-number");  // ✅ Correct ID
    const resultDiv = document.getElementById("result");

    if (!searchBtn || !numberInput || !resultDiv) {
        console.error("❌ Button or Input field not found!");
        return;
    }

    searchBtn.addEventListener("click", async function () {
        console.log("🔍 Search button clicked!");  // ✅ Debugging log

        const numberPlate = numberInput.value.trim();
        if (numberPlate === "") {
            console.warn("⚠️ Empty input!");
            resultDiv.innerHTML = "<p style='color: red;'>Please enter a number plate!</p>";
            return;
        }

        // ✅ API URL
        const apiUrl = `https://vehicleapiinformation.raghavnikhil015.workers.dev/?numberPlate=${numberPlate}`;
        console.log(`🌍 Fetching data from: ${apiUrl}`);

        try {
            resultDiv.innerHTML = "<p>Fetching data...</p>"; // ⏳ Loading text
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const textData = await response.text();
            console.log("📜 Raw Response:", textData);  // ✅ Print raw response

            let data;
            try {
                data = JSON.parse(textData);  // ✅ Convert to JSON
            } catch (error) {
                console.error("❌ Invalid JSON response:", textData);
                resultDiv.innerHTML = "<p style='color: red;'>Invalid response format!</p>";
                return;
            }

            if (!data || Object.keys(data).length === 0) {
                console.warn("⚠️ No data found!");
                resultDiv.innerHTML = "<p style='color: red;'>No data found for this number plate!</p>";
                return;
            }

            console.log("✅ Data Received:", data);  // ✅ Print data in console

            resultDiv.innerHTML = `
                <h2>🚗 Vehicle Details</h2>
                <p>🔹 <strong>Registration Number:</strong> ${data.registrationNumber || "N/A"}</p>
                <p>🔹 <strong>Owner Name:</strong> ${data.ownerName || "N/A"}</p>
                <p>🔹 <strong>Manufacturer:</strong> ${data.manufacturer || "N/A"}</p>
                <p>🔹 <strong>Model:</strong> ${data.model || "N/A"}</p>
                <p>🔹 <strong>Fuel Type:</strong> ${data.fuelType || "N/A"}</p>
                <p>🔹 <strong>Registration Date:</strong> ${data.registrationDate || "N/A"}</p>
                <p>🔹 <strong>Address:</strong> ${data.address || "N/A"}</p>
            `;
        } catch (error) {
            console.error("❌ Error fetching data:", error);
            resultDiv.innerHTML = `<p style='color: red;'>Error fetching data. Please try again!</p>`;
        }
    });
});
