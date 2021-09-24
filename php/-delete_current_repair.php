
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_repair = $_POST['id_repair'];
    $id_reparation = $_POST['id_reparation'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "DELETE Manobra_orden WHERE id_repair = '$id_repair' AND id_reparacion = '$id_reparation'";
        
            $query=sqlsrv_query($conn,$sql);

            if($query)
            {
                echo json_encode("Exito");
            }else
            {
                echo json_encode("Error");
            }
    }
    