/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ret(param) {
    var valores = [];
    $.each(param, function(key, val) {
        valores.push(val);
    });

    return valores;
}

$(function() {
    /* ChartJS
     * -------
     * Here we will create a few charts using ChartJS
     */

//--------------------------------------------------------------------
//- GRAFICO DE LINHA POR HORA -
//--------------------------------------------------------------------

    var areaChartCanvas = $('#horas').get(0).getContext('2d');
    areaChartCanvas.canvas.height = 130;
    var areaChart = new Chart(areaChartCanvas);
    var periodo = '-3 days';
    $.getJSON("classes/Relatorios.php/trafegoporhora/" + periodo, function(resposta) {

        var areaChartData = {
            labels: Object.keys(resposta),
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(34, 167, 240,0.2)",
                    strokeColor: "#22A7F0",
                    pointColor: "#22A7F0",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#22A7F0",
                    data: ret(resposta)
                }
            ]

        }

        var areaChartOptions = {
            showScale: true,
            scaleShowGridLines: false,
            scaleGridLineColor: 'rgba(0,0,0,.05)',
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            bezierCurve: true,
            bezierCurveTension: 0.3,
            pointDot: false,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
            maintainAspectRatio: true,
            responsive: true
        }

        //Create the line chart
        areaChart.Line(areaChartData, areaChartOptions)
    });
//--------------------------------------------------------------------
//- GRÁFICO DE BARRA SEMANAL -
//--------------------------------------------------------------------
    var horarioChartCanvas = $('#semanal').get(0).getContext('2d');
    horarioChartCanvas.canvas.height = 130;
    var horarioChart = new Chart(horarioChartCanvas);
    $.getJSON("classes/Relatorios.php/trafego_semanal/", function(resposta) {
        var horarioChartData = {
            labels: Object.keys(resposta),
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(26, 188, 156,0.6)",
                    strokeColor: "#1ABC9C",
                    pointColor: "#1ABC9C",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#1ABC9C",
                    data: ret(resposta)
                }
            ]
        };
        var horarioChartOptions = {
            scaleBeginAtZero: true, //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleShowGridLines: true, //Boolean - Whether grid lines are shown across the chart
            scaleGridLineColor: 'rgba(0,0,0,.05)', //String - Colour of the grid lines
            scaleGridLineWidth: 1, //Number - Width of the grid lines
            scaleShowHorizontalLines: true, //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowVerticalLines: true, //Boolean - Whether to show vertical lines (except Y axis)
            barShowStroke: true, //Boolean - If there is a stroke on each bar
            barStrokeWidth: 2, //Number - Pixel width of the bar stroke
            barValueSpacing: 5, //Number - Spacing between each of the X value sets
            barDatasetSpacing: 1, //Number - Spacing between data sets within X values
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
            responsive: true, //Boolean - whether to make the chart responsive
            maintainAspectRatio: true
        };
        horarioChartOptions.datasetFill = false;
        horarioChart.Bar(horarioChartData, horarioChartOptions)
    });
//--------------------------------------------------------------------
//- GRÁFICO DE PIZZA -
//--------------------------------------------------------------------
    var pieChartCanvas = $('#plataforma').get(0).getContext('2d');
    pieChartCanvas.canvas.height = 130;
    var pieChart = new Chart(pieChartCanvas);
    var periodo = '-90 days';

    $.getJSON("classes/Relatorios.php/trafego_por_plataforma/" + periodo, function(resposta) {

        var PieData = resposta;
        var pieOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: '#fff',
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50, // This is 0 for Pie charts
            animationSteps: 100,
            animationEasing: 'easeOutBounce',
            animateRotate: true,
            animateScale: false,
            responsive: true,
            maintainAspectRatio: true,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
        };
        pieChart.Doughnut(PieData, pieOptions);
    });

//--------------------------------------------------------------------
//- GRÁFICO DE PIZZA NAVEGADOR-
//--------------------------------------------------------------------
    var navChartCanvas = $('#navegador').get(0).getContext('2d');
    navChartCanvas.canvas.height = 130;
    var navChart = new Chart(navChartCanvas);
    var periodo = '-90 days';

    $.getJSON("classes/Relatorios.php/trafego_por_navegador/" + periodo, function(resposta) {

        var navData = resposta;
        var navOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: '#fff',
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50, // This is 0 for Pie charts
            animationSteps: 100,
            animationEasing: 'easeOutBounce',
            animateRotate: true,
            animateScale: false,
            responsive: true,
            maintainAspectRatio: true,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
        };
        navChart.Doughnut(navData, navOptions);
    });


//--------------------------------------------------------------------
//- GRÁFICO DE BARRA MENSAL -
//--------------------------------------------------------------------
    var mensalChartCanvas = $('#mensal').get(0).getContext('2d');
    mensalChartCanvas.canvas.height = 70;
    var mensalChart = new Chart(mensalChartCanvas);
    $.getJSON("classes/Relatorios.php/trafego_mensal/", function(resposta) {
        var mensalChartData = {
            labels: Object.keys(resposta),
            datasets: [
                {
                    label: "Qualquer",
                    fillColor: "#C4BE15",
                    strokeColor: "#1ABC9C",
                    pointColor: "#1ABC9C",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#1ABC9C",
                    data: ret(resposta)
                }
            ]
        };
        var mensalChartOptions = {
            scaleBeginAtZero: true, //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleShowGridLines: true, //Boolean - Whether grid lines are shown across the chart
            scaleGridLineColor: 'rgba(0,0,0,.05)', //String - Colour of the grid lines
            scaleGridLineWidth: 1, //Number - Width of the grid lines
            scaleShowHorizontalLines: true, //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowVerticalLines: true, //Boolean - Whether to show vertical lines (except Y axis)
            barShowStroke: true, //Boolean - If there is a stroke on each bar
            barStrokeWidth: 2, //Number - Pixel width of the bar stroke
            barValueSpacing: 5, //Number - Spacing between each of the X value sets
            barDatasetSpacing: 1, //Number - Spacing between data sets within X values
            //String - A legend template
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
            responsive: true, //Boolean - whether to make the chart responsive
            maintainAspectRatio: true
        };
        mensalChartOptions.datasetFill = false;
        mensalChart.Bar(mensalChartData, mensalChartOptions)
    });
    //-------------
    //- LINE CHART -
    //--------------
    var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
    var lineChart = new Chart(lineChartCanvas)
    var lineChartOptions = areaChartOptions
    lineChartOptions.datasetFill = false
    lineChart.Line(areaChartData, lineChartOptions)

    //-------------
    //- PIE CHART -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas = $('#plataforma').get(0).getContext('2d');
    pieChartCanvas.canvas.height = 110;
    var pieChart = new Chart(pieChartCanvas)
    var PieData = [
        {
            value: 700,
            color: '#f56954',
            highlight: '#f56954',
            label: 'Chrome'
        },
        {
            value: 500,
            color: '#00a65a',
            highlight: '#00a65a',
            label: 'IE'
        },
        {
            value: 400,
            color: '#f39c12',
            highlight: '#f39c12',
            label: 'FireFox'
        },
        {
            value: 600,
            color: '#00c0ef',
            highlight: '#00c0ef',
            label: 'Safari'
        },
        {
            value: 300,
            color: '#3c8dbc',
            highlight: '#3c8dbc',
            label: 'Opera'
        },
        {
            value: 100,
            color: '#d2d6de',
            highlight: '#d2d6de',
            label: 'Navigator'
        }
    ]
    var pieOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: '#fff',
        //Number - The width of each segment stroke
        segmentStrokeWidth: 2,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 50, // This is 0 for Pie charts
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect
        animationEasing: 'easeOutBounce',
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        //String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    pieChart.Doughnut(PieData, pieOptions)

    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas = $('#barChart').get(0).getContext('2d')
    var barChart = new Chart(barChartCanvas)
    var barChartData = areaChartData
    barChartData.datasets[1].fillColor = '#00a65a'
    barChartData.datasets[1].strokeColor = '#00a65a'
    barChartData.datasets[1].pointColor = '#00a65a'
    var barChartOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,
        //String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        //Boolean - whether to make the chart responsive
        responsive: true,
        maintainAspectRatio: true
    }

    barChartOptions.datasetFill = false
    barChart.Bar(barChartData, barChartOptions)
})


