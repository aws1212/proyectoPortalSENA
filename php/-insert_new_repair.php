
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $date = getdate();
    $mes = $date['mon'];

    $id_repair = $_POST['id_repair'];
    $placa = $_POST['placa'];
    $reparacion = $_POST['reparacion'];
    $mecanico = $_POST['mecanico'];
    $valor = $_POST['valor'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "INSERT INTO Manobra_orden(id_reparacion,placa,reparacion,mecanico,valor,mes)
        VALUES('$id_repair','$placa','$reparacion','$mecanico','$valor','$mes')";
        
            $query=sqlsrv_query($conn,$sql);

            if($query){

              echo json_encode("Exito");

            }else
            {
            echo json_encode("Error");
            }

        
        
        
    }
    