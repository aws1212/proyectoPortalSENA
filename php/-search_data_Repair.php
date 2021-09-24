
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
 
    $name = $_POST['name'];

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT valor FROM Manobra_orden WHERE reparacion = '$name'";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode(Array($row["valor"]));
                }

        
        
        
    }
    