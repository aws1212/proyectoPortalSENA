
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_repair = $_POST['id_reparation'];
    $placa = $_POST['placa'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "UPDATE Cita SET finalizada = 'Finalizada' WHERE id_reparacion = '$id_repair' AND placa = '$placa'";
        
            $query=sqlsrv_query($conn,$sql);

            if($query)
            {
                echo json_encode("Exito");
            }else
            {
                echo json_encode("Error");
            }
    }
    