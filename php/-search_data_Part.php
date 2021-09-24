
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
 
    $reference = $_POST['reference'];

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT nombre,precio FROM Repuestos_orden WHERE referencia = '$reference'";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode(Array($row["nombre"],$row["precio"]));
                }

        
        
        
    }
    