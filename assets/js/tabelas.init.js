function page_views() {
    $(".pagetr").remove();

    var periodo = $("#pages-select").val();

    $.getJSON("classes/Relatorios.php/trafego_por_pagina/" + periodo, function(resposta) {

        var i = 1;
        $.each(resposta, function(key, val) {
            var container = '<tr class="pagetr">';
            container += '<td>' + i + '</td>';
            container += '<td>' + key + '</td>';
            container += '<td>' + val + '</td>';
            container += '</tr>';
            i++;

            $("#pages").append(container);
        });

    });
}

page_views();

$("#pages-select").change(function() {
    page_views();
});