
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_part = $_POST['id_part'];
    $id_repair = $_POST['id_repair'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "DELETE Repuestos_orden WHERE id_part = '$id_part' AND id_reparacion = '$id_repair'";
        
            $query=sqlsrv_query($conn,$sql);

            if($query)
            {
                echo json_encode("Exito");
            }else
            {
                echo json_encode("Error");
            }
    }
    