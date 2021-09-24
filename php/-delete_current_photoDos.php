
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_photo = $_POST['id_photo'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "UPDATE Fotografia_orden SET foto_dos = null WHERE id_photo = '$id_photo'";
        
            $query=sqlsrv_query($conn,$sql);

            if($query)
            {
                echo json_encode("Exito");
            }else
            {
                echo json_encode("Error");
            }
    }
    