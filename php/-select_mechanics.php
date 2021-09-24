
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
                $sqls = "SELECT nombre FROM Mecanico";

                $querys=sqlsrv_query($conn,$sqls);

                $array = array();
                
                 while($row=sqlsrv_fetch_array($querys,SQLSRV_FETCH_ASSOC)){

                    $array[] = $row;
                            
                 }
                 echo json_encode($array);
    }
    