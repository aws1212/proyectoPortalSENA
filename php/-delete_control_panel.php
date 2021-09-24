
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_repair = $_POST['id_repair'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "UPDATE Cita SET finalizada = 'Cancelada' WHERE id_reparacion = '$id_repair'";
        
            $query=sqlsrv_query($conn,$sql);

            if($query)
            {
                echo json_encode("Exito");
            }else
            {
                echo json_encode("Error");
            }
    }
    