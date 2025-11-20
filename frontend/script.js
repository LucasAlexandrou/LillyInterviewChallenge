// Using asynchronous function to fetch medicines from the backend to prevent any UI freezing
async function fetchMedicines() {
    try {
        const response = await fetch("http://localhost:8000/medicines")
        const data = await response.json();
        displayMedicines(data.medicines);
    } catch (error) {
        console.error('Error fetching medicines', error);
    }
}

// Call the function to fetch medicines
fetchMedicines();

function displayMedicines(medicines) {
    let placeholder = document.querySelector("#medicineTableBody");
    let out = "";
    // Iterate through each medicine and create table rows
    for (let medicine of medicines) {
        // Check to make sure name and price are not empty, don't display empty entries
        if (!medicine.name == "" && !medicine.price == "") {
            out += `
                <tr>
                    <td>${medicine.name}</td>
                    <td>${medicine.price}</td>
                </tr>
            `;
        }
        
    }
    placeholder.innerHTML = out;
}

async function fetchAveragePrice() {
    try {
        const response = await fetch("http://localhost:8000/average_price")
        const data = await response.json();
        // After fetching the average price, display it in the designated area to 2 decimal places
        const averagePriceValue = document.getElementById("averagePriceValue");
        averagePriceValue.style.display = "block";
        averagePriceValue.innerText = `£${data.toFixed(2)}`;
    } catch (error) {
        console.error('Error fetching average price', error);
    }
}

// Call the function to fetch average price on page load
fetchAveragePrice();

document.getElementById("addMedicineBtn").addEventListener("click", async function() {
    const nameInput = document.getElementById("newMedicineName");
    const priceInput = document.getElementById("newMedicinePrice");

    // Validate inputs before sending to backend, particularly for price input
    if (!nameInput.checkValidity() || !priceInput.checkValidity()) {
        nameInput.reportValidity();
        priceInput.reportValidity();
        return;
    }

    // Capitalize the first letter of the medicine name to fit with existing entries
    const formattedName = nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1).toLowerCase();
    const price = priceInput.value;

    const medicineData = new FormData();
    medicineData.append("name", formattedName);
    medicineData.append("price", price);

    await fetch("http://localhost:8000/create", {
        method: "POST",
        body: medicineData
    });

    nameInput.value = "";
    priceInput.value = "";  
    
    // Refresh the medicine list and average price after adding a new medicine
    fetchMedicines();
    fetchAveragePrice();
});