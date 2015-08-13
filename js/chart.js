function drawChart() {
    google.setOnLoadCallback(drawChart);
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Time');
    data.addColumn('number', 'Asset price');
    for (i = 0; i < years.length; i++) data.addRow([years[i],
        sales[i]
    ]);
    // Create and draw the visualization.
    var options = {
        legend: {
            position: 'none'
        },
        vAxis: {
            title: "Asset Price"
        },
        hAxis: {
            title: "Time"
        }
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}