function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
				borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
    });
}

$("#renderBtn").click(
    function () {
        console.log("In my Chart");
        data = [4, 5, 3, 12, 2, 8, 7];
        labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        renderChart(data, labels);
    }
);