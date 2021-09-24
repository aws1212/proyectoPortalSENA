
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
    

    $id_reparation = $_POST['id_reparation'];
    $placa = $_POST['placa'];


    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
                $sqls = "SELECT id_reparacion,identificacion,nombre,placa,servicio,telefono,hora FROM Cita WHERE id_reparacion = '$id_reparation' AND
                placa = '$placa' AND finalizada = 'Finalizada'";

                $querys=sqlsrv_query($conn,$sqls);
                
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode(Array($row["id_reparacion"],$row['identificacion'],$row['nombre'],$row['placa']
                    ,$row['servicio']));
                }
    }
    