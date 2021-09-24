
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
    

    $id_reparation = $_POST['id_reparation'];
    $placa = $_POST['placa'];

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
                $sqls = "SELECT id_repair,id_reparacion,reparacion,mecanico,valor FROM Manobra_orden WHERE id_reparacion = '$id_reparation' AND
                placa = '$placa'";

                $querys=sqlsrv_query($conn,$sqls);

                $array = array();
                
                 while($row=sqlsrv_fetch_array($querys,SQLSRV_FETCH_ASSOC)){

                    $array[] = $row;
                            
                 }
                 echo json_encode($array);
    }
    