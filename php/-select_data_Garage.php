
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT nombre,mision,vision,telefono,direccion,horario_atencion FROM Datos_taller";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode(Array($row["nombre"],$row["mision"],$row["vision"],
                    $row["telefono"],$row["direccion"],$row["horario_atencion"]));
                }

        
        
        
    }
    