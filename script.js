async function getVehicleDetails() {
    let numberPlate = document.getElementById("numberPlate").value;
    let apiUrl = `api-proxy.php?numberPlate=${numberPlate}`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        if (data.statusCode === 200) {
            let vehicle = data.response;
            let resultContainer = document.getElementById("result");

            // 🎨 **Styled Output Format**
            let detailsHTML = `
                <div class="section">
                    <h3>🚗 VEHICLE DETAILS</h3>
                    <p>🔹 <b>Registration Number:</b> ${vehicle.regNo || "N/A"}</p>
                    <p>🔹 <b>Registration Authority:</b> ${vehicle.regAuthority || "N/A"}</p>
                    <p>🔹 <b>Registration Date:</b> ${vehicle.regDate || "N/A"}</p>
                    <p>🔹 <b>Owner Name:</b> ${vehicle.owner || "N/A"}</p>
                    <p>🔹 <b>Father's Name:</b> ${vehicle.ownerFatherName || "N/A"}</p>
                    <p>🔹 <b>Address:</b> ${vehicle.presentAddress || "N/A"}</p>
                </div>

                <div class="section">
                    <h3>🚘 VEHICLE SPECIFICATIONS</h3>
                    <p>🛠 <b>Manufacturer:</b> ${vehicle.manufacturer || "N/A"}</p>
                    <p>🚘 <b>Model:</b> ${vehicle.vehicle || "N/A"}</p>
                    <p>📌 <b>Variant:</b> ${vehicle.variant || "N/A"}</p>
                    <p>⛽ <b>Fuel Type:</b> ${vehicle.fuelType || "N/A"}</p>
                    <p>🪑 <b>Seat Capacity:</b> ${vehicle.seatCapacity || "N/A"}</p>
                </div>

                <div class="section">
                    <h3>⚙️ TECHNICAL DETAILS</h3>
                    <p>🔧 <b>Chassis Number:</b> ${vehicle.chassis || "N/A"}</p>
                    <p>🔧 <b>Engine Number:</b> ${vehicle.engine || "N/A"}</p>
                    <p>📏 <b>Cubic Capacity:</b> ${vehicle.cubicCapacity || "N/A"} cc</p>
                </div>

                <div class="section">
                    <h3>📑 REGISTRATION & INSURANCE</h3>
                    <p>🛡 <b>Insurance Company:</b> ${vehicle.insuranceCompanyName || "N/A"}</p>
                    <p>🔖 <b>Policy Number:</b> ${vehicle.insurancePolicyNumber || "N/A"}</p>
                    <p>📆 <b>Insurance Valid Till:</b> ${vehicle.insuranceUpto || "N/A"}</p>
                </div>

                <div class="section">
                    <h3>💰 FINANCER DETAILS</h3>
                    <p>🏦 <b>Financer:</b> ${vehicle.financerName || "N/A"}</p>
                    <p>💵 <b>Financed:</b> Y</p>
                </div>

                <div class="section">
                    <h3>📍 OTHER INFORMATION</h3>
                    <p>🏭 <b>Manufacturing Year:</b> ${vehicle.manufacturingYear || "N/A"}</p>
                    <p>📌 <b>Pincode:</b> ${vehicle.pincode || "N/A"}</p>
                    <p>🕒 <b>Last Updated:</b> ${vehicle.eDate || "N/A"}</p>
                    <p>📅 <b>Data Status:</b> ${vehicle.dataStatus || "N/A"}</p>
                    <p>🛞 <b>Vehicle Type:</b> ${vehicle.vehicleType || "N/A"}</p>
                    <p>📅 <b>Reg Date:</b> ${vehicle.regDate || "N/A"}</p>
                    <p>🏢 <b>RTO Code:</b> ${vehicle.rtoCode || "N/A"}</p>
                    <p>📅 <b>Emission Date:</b> ${vehicle.eDate || "N/A"}</p>
                </div>

                <div class="section">
                    <h3>📢 STATUS</h3>
                    <p>✅ <b>RC Status: </b>Y </p>
                    <p>🕒 <b>Last Updated:</b> ${vehicle.lmDate || "N/A"}</p>
                </div>

                <div class="powered-by">
                    <p>⭒ <b>Powered By: <b>@VEHICLEINFOIND_BOT </p>
                </div>
            `;

            resultContainer.innerHTML = detailsHTML;
        } else {
            document.getElementById("result").innerHTML = `<h3 style="color:red;">❌ Vehicle Not Found!</h3>`;
        }
    } catch (error) {
        document.getElementById("result").innerHTML = `<h3 style="color:red;">⚠️ Error Fetching Data!</h3>`;
    }
}
