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
