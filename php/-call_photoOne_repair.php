
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
 
    $id_reparation = $_POST['id_reparation'];
    $placa = $_POST['placa'];

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
                $sqls = "SELECT id_photo,foto_uno FROM Fotografia_orden WHERE id_reparacion = '$id_reparation' AND placa = '$placa'";

                $querys=sqlsrv_query($conn,$sqls);

                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    $linkCurrent = $row['foto_uno'];
                    $string_Clear = substr($linkCurrent,50);
                    echo json_encode(Array($row["id_photo"],$string_Clear));
                }
        
    }
    