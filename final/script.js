document.addEventListener("DOMContentLoaded", function() {
    const companies = [
        { name: "Company A", sharePrice: 50 },
        { name: "Company B", sharePrice: 75 },
        { name: "Company C", sharePrice: 100 },
        { name: "Company D", sharePrice: 120 },
        { name: "Company E", sharePrice: 90 },
        { name: "Company F", sharePrice: 110 },
        { name: "Company G", sharePrice: 80 },
        { name: "Company H", sharePrice: 95 },
        { name: "Company I", sharePrice: 65 },
        { name: "Company J", sharePrice: 85 }
    ];

    let userBudget = 1000; // Initial budget for the user
    const stockTable = document.getElementById("stockTable").getElementsByTagName('tbody')[0];
    const budgetDisplay = document.getElementById("budgetDisplay");
    const portfolioDisplay = document.getElementById("portfolioDisplay");
    const sharesOwned = {}; // Object to store shares owned by the user

    // Function to update share prices randomly
    function updateSharePrices() {
        companies.forEach(company => {
            company.sharePrice += Math.random() * 2 - 1; // Change share price by a small random value
            company.sharePrice = Math.max(1, company.sharePrice); // Ensure share price doesn't go below 1
        });
    }

    // Function to calculate portfolio value based on user's shares
    function calculatePortfolioValue() {
        let totalValue = userBudget;
        companies.forEach(company => {
            const shares = sharesOwned[company.name] || 0;
            totalValue += shares * company.sharePrice;
        });
        return totalValue;
    }

    // Function to render table rows
    function renderTable() {
        stockTable.innerHTML = ""; // Clear existing rows
        companies.forEach(company => {
            const row = stockTable.insertRow();
            row.setAttribute("data-company", company.name);
            const shares = sharesOwned[company.name] || 0; // Get shares owned by the user
            row.innerHTML = `
                <td>${company.name}</td>
                <td>₹${company.sharePrice.toFixed(2)}</td>
                <td>${shares}</td>
                <td>
                    <button class="buy" data-company="${company.name}">Buy One Share</button>
                    <button class="sell" data-company="${company.name}">Sell One Share</button>
                </td>
            `;
        });

        // Update budget display
        budgetDisplay.textContent = `Budget: ₹${userBudget.toFixed(2)}`;

        // Update portfolio display
        const portfolioValue = calculatePortfolioValue();
        portfolioDisplay.textContent = `Portfolio: ₹${portfolioValue.toFixed(2)}`;
    }

    // Function to handle buy button click
    function handleBuyClick(event) {
        const companyName = event.target.getAttribute('data-company');
        const company = companies.find(c => c.name === companyName);
        const cost = company.sharePrice;
        if (cost <= userBudget) {
            userBudget -= cost;
            sharesOwned[companyName] = (sharesOwned[companyName] || 0) + 1; // Add one share to the owned shares
            console.log(`Buying one share of ${companyName}`);
        } else {
            console.log("Insufficient funds");
        }
        renderTable();
    }

    // Function to handle sell button click
    function handleSellClick(event) {
        const companyName = event.target.getAttribute('data-company');
        const company = companies.find(c => c.name === companyName);
        const earnings = company.sharePrice;
        if (sharesOwned[companyName] > 0) {
            userBudget += earnings;
            sharesOwned[companyName] -= 1; // Remove one share from owned shares
            console.log(`Selling one share of ${companyName}`);
        } else {
            console.log("You don't own any shares to sell");
        }
        renderTable();
    }

    // Attach event listener to table for handling buy and sell button clicks
    stockTable.addEventListener("click", function(event) {
        if (event.target.classList.contains("buy")) {
            handleBuyClick(event);
        } else if (event.target.classList.contains("sell")) {
            handleSellClick(event);
        }
    });

    // Initial render
    renderTable();

    // Update share prices every 3 seconds
    setInterval(function() {
        updateSharePrices();
        renderTable();
    }, 3000);
});


// graphs script ///////////////////////////////////////////////////////////////////////////////////////////////////

// Generate random values for demonstration
function generateRandomValue() {
    return Math.floor(Math.random() * 50000);
}

// Function to update values and redraw the chart
function updateValuesAndChart() {
    document.getElementById('value1').innerText = generateRandomValue();
    document.getElementById('value2').innerText = generateRandomValue();
    document.getElementById('value3').innerText = generateRandomValue();
    
    // Redraw chart with new data
    updateChart();
}


// Function to update chart data
function updateChart() {
    myChart.data.datasets[0].data.push(generateRandomValue());
    myChart.data.datasets[1].data.push(generateRandomValue());
    myChart.data.datasets[2].data.push(generateRandomValue());

    if (myChart.data.datasets[0].data.length > 10) {
        myChart.data.datasets[0].data.shift();
        myChart.data.datasets[1].data.shift();
        myChart.data.datasets[2].data.shift();
    }

    myChart.update();
}

// Initialize chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            label: 'Value 1',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }, {
            label: 'Value 2',
            data: [],
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1
        }, {
            label: 'Value 3',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Update values and chart every 2 seconds
setInterval(updateValuesAndChart, 2000);
