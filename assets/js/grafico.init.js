
/*********************************** GRÁFICO DE BARRAS ***********************************/
$(function() {
//-------------
//- GRÁFICO DE HORÁRIOS -
//-------------
    var horarioChartCanvas = $('#horarios2').get(0).getContext('2d');
    var horarioChart = new Chart(horarioChartCanvas);
    var horarioChartData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(26, 188, 156,0.6)",
                strokeColor: "#1ABC9C",
                pointColor: "#1ABC9C",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#1ABC9C",
                data: [65, 59, 80, 81, 56, 55, 40]
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
    horarioChart.Bar(horarioChartData, horarioChartOptions);
    //-------------
    //- TESTE RODRIGO -
    //-------------
    var testeChartCanvas = $('#testeChart').get(0).getContext('2d');
    var testeChart = new Chart(testeChartCanvas);
    var testeChartData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [
            {
                label: 'Electronics',
                fillColor: 'rgba(210, 214, 222, 1)',
                strokeColor: 'rgba(210, 214, 222, 1)',
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [80, 51, 120, 1, 23, 75, 10]
            },
            {
                label: 'Digital Goods',
                fillColor: 'rgba(60,141,188,0.9)',
                strokeColor: 'rgba(60,141,188,0.8)',
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: [200, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    testeChartData.datasets[1].fillColor = '#00a65a';
    testeChartData.datasets[1].strokeColor = '#00a65a';
    testeChartData.datasets[1].pointColor = '#00a65a';
    var testeChartOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        responsive: true,
        maintainAspectRatio: true
    };

    testeChartOptions.datasetFill = false;
    testeChart.Bar(testeChartData, testeChartOptions);

    //-------------
    //- MEU GRAFICO -
    //-------------
    var areaChartCanvas = $('#areaChart').get(0).getContext('2d');
    var areaChart = new Chart(areaChartCanvas);

    var areaChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Electronics',
                fillColor: 'rgba(210, 214, 222, 1)',
                strokeColor: 'rgba(210, 214, 222, 1)',
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Digital Goods',
                fillColor: 'rgba(60,141,188,0.9)',
                strokeColor: 'rgba(60,141,188,0.8)',
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

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
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>', //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        responsive: true
    };

    //Create the line chart
    areaChart.Line(areaChartData, areaChartOptions);



}

);