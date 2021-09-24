
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
    $name_Month = $_POST['mes'];

    $identification = $_POST['identification'];
    $name = $_POST['name'];
    $plate = $_POST['plate'];
    $service = $_POST['service'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $dia = $_POST['dia'];
    $año = $_POST['año'];
    $hora = $_POST['hora'];

    if($name_Month == "Enero")
    {
        $mes = 1;
    }
    else if($name_Month == "Febrero")
    {
        $mes = 2;
    }
    else if($name_Month == "Marzo")
    {
        $mes = 3;
    }
    else if($name_Month == "Abril")
    {
        $mes = 4;
    }
    else if($name_Month == "Mayo")
    {
        $mes = 5;
    }
    else if($name_Month == "Junio")
    {
        $mes = 6;
    }
    else if($name_Month == "Julio")
    {
        $mes = 7;
    }
    else if($name_Month == "Agosto")
    {
        $mes = 8;
    }
    else if($name_Month == "Septiembre")
    {
        $mes = 9;
    }
    else if($name_Month == "Octubre")
    {
        $mes = 10;
    }
    else if($name_Month == "Noviembre")
    {
        $mes = 11;
    }
    else if($name_Month == "Diciembre")
    {
        $mes = 12;
    }

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sqls = "SELECT id_reparacion FROM Cita WHERE dia = '$dia' AND mes = '$mes' AND hora = '$hora'";
        $querys = sqlsrv_query($conn,$sqls);
        $rows = sqlsrv_fetch_array($querys);
        
        if($rows == null)
        {
            $sql = "INSERT INTO Cita(identificacion,nombre,placa,servicio,telefono,correo_electronico,dia,mes,año,hora,finalizada)
            VALUES('$identification','$name','$plate','$service','$phone','$email','$dia','$mes','$año','$hora','Pendiente')";
        
            $query=sqlsrv_query($conn,$sql);

            if($query)
            {                
                $sqlfd = "SELECT id_reparacion FROM Cita WHERE identificacion = '$identification' AND placa = '$plate'
                AND servicio = '$service' AND dia = '$dia' AND mes = '$mes' AND año = '$año' AND finalizada = 'Pendiente'";

                $queryfd = sqlsrv_query($conn,$sqlfd);

                $rowfd = sqlsrv_fetch_array($queryfd);

                if($rowfd == null)
                {
                    echo json_encode("Error");
                }
                else
                {
                    echo json_encode($rowfd['id_reparacion']);
                }
            }
            else
            {
                echo json_encode("Error");
            }
        }
        else
        {
            echo json_encode("Existe");
        }

        
    }
    