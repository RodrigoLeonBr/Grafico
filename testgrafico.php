<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Teste de Gráficos com BD Mysql</title>
        <!-- Tell the browser to be responsive to screen width -->
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <!-- Bootstrap 3.3.7 -->
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="assets/css/font-awesome.min.css">
        <!-- Estilos próprios -->
        <link rel="stylesheet" href="assets/css/style.css">
    </head>
    <body>
        <div class="container-fluid">
            <!-- Content Wrapper. Contains page content -->
            <div class="col-md-12">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <h1>
                        ChartJS
                        <small>Busca no Mysql e geração de gráfico e estatísticas</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Charts</a></li>
                        <li class="active">ChartJS</li>
                    </ol>
                </section>

                <!-- Main content -->
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-8">
                            <h3>Páginas Mais Visitadas</h3>
                        </div>
                        <div class="col-md-4">
                            <select class="form-control col-md-6" id="pages-select">
                                <option value="-24 hours" selected>Últimas 24 horas</option>
                                <option value="-7 days">Últimos 7 dias</option>
                                <option value="-15 days">Últimos 15 dias</option>
                                <option value="-30 days">Últimos 30 dias</option>
                            </select>
                        </div>
                    </div>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Página</th>
                                <th>Views</th>
                            </tr>
                        </thead>
                        <tbody id="pages">

                        </tbody>
                    </table>
                </div>

                <div class="row">

                    <!-- LINHA -->
                    <div class="col-md-6">
                        <canvas id="horas" class="chart"></canvas>
                    </div>
                    <!-- TESTE CHART -->
                    <div class="col-md-6">
                        <canvas id="semanal" class="chart"></canvas>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <canvas id="plataforma" class="chart"></canvas>
                    </div>
                    <div class="col-md-6">
                        <canvas id="navegador" class="chart"></canvas>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <canvas id="mensal" class="chart"></canvas>
                    </div>

                </div>


                <!-- /.row -->
            </div>
            <!-- /.content-wrapper -->


        </div>
        <!-- ./wrapper -->

        <!-- jQuery 3 -->
        <script src="assets/js/jquery.min.js"></script>
        <!-- Bootstrap 3.3.7 -->
        <script src="assets/js/bootstrap.min.js"></script>
        <!-- ChartJS -->
        <script src="assets/js/Chart.js"></script>
        <!-- page script -->

        <script type="text/javascript" src="assets/js/grafico2.js"></script>
        <script type="text/javascript" src="assets/js/tabelas.init.js"></script>
    </body>
</html>
