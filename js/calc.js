google.load("visualization", "1", {
    packages: ["corechart"]
});
var years = [];
var sales = [];
document.getElementById("data_tab").style.display = 'none';
$('#calcbt').click(function() {
    years = [];
    sales = [];
    document.getElementById("data_tab").style.display = 'block';
    document.getElementById("tbl_body").innerHTML = '';
    var timestep_start = 0;
    var firstValue = parseFloat($('#inputAsset').val());
    var secondValue = parseFloat($('#inputDrift').val());
    var thirdValue = parseFloat($('#inputVolatility').val());
    var fourthValue = parseFloat($('#inputTimestep').val());
    years.push(0);
    sales.push(firstValue);
    if (timestep_start === 0) {
        $('#tbl_body').append("<tr> <td>" + timestep_start + "</td> <td>" + firstValue + "</td> </tr>");
    }
    while (timestep_start < 4) {
        firstValue = firstValue * ((1 + secondValue * fourthValue) + (thirdValue * Math.sqrt(fourthValue)) * ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 6));
        timestep_start = Math.round((timestep_start + fourthValue) * 100) / 100;
        $('#tbl_body').append("<tr><td>" + timestep_start + "</td><td>" + firstValue + "</td></tr>");
        years.push(timestep_start);
        sales.push(firstValue);
        if (timestep_start == 4) {
            $('#data').append("</tbody>" + "</table>");
        }
    }
    drawChart();
});