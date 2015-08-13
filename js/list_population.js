var addnw = 'Add New';

$(document).ready(function() {

    document.getElementById('savetop').style.display = 'none';

    $(".dropdown-menu").on('click', 'li a', function() {
        $(this).parents(".btn-group").find('.datbtn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".btn-group").find('.datbtn').val($(this).data('value'));
        document.getElementById('savetop').style.display = 'none';

    });
    $.getJSON('data.json', function(data) {
        $.each(data, function(index, d) {
            $('#dropmen').append("<li><a id=dl-" + d.Company + ">" + d.Company + "</a></li>");
            $(".dropdown-menu").on('click', 'li a', function() {
                if ($(this).text() == d.Company) {
                    $('#inputAsset').val(d.Asset);
                    $('#inputDrift').val(d.Drift);
                    $('#inputVolatility').val(d.Volatility);
                    $('#inputTimestep').val(d.Timestep);
                };
            });
        });
        $('#dropmen').append("<li class=\"divider\"></li><li><a id=dl-" + "new" + ">" + addnw + "</a></li>");
    });



});
$(".dropdown-menu").on('click', 'li a', function() {
    if ($(this).text() == addnw) {
        document.getElementById('savetop').style.display = 'block';
        $('#inputAsset').val('');
        $('#inputDrift').val('');
        $('#inputVolatility').val('');
        $('#inputTimestep').val('');
    };
});



$('#save').click(function() {
    if ($('#inputAsset') !== null || $('#inputDrift') !== null || $('#inputVolatility') !== null || $('#inputTimestep') !== null) {

    };
});