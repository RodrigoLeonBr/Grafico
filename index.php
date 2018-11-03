<?php
include_once('./classes/Traffic.php');
$t = new Traffic();
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" />
        <title>Home</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    </head>
    <body>
        <div class="container-fluid">

            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <canvas id="horarios" class="chart"></canvas>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>

        </div>
        <script type="text/javascript" src=assets/js/jquery.min.js"></script>
        <script type="text/javascript" src=assets/js/Chart.min.js"></script>
        <script type="text/javascript" src=assets/js/chart.init.js"></script>
    </body>
</html>