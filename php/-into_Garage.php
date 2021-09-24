
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
    

    $pass = $_POST['pass'];


    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
                $sqls = "SELECT contraseña FROM Datos_taller WHERE contraseña = '$pass'";

                $queryfd = sqlsrv_query($conn,$sqls);

                $rowfd = sqlsrv_fetch_array($queryfd);

                if($rowfd == null)
                {
                    echo json_encode("Error");
                }
                else
                {
                    echo json_encode("Exito");
                }
    }
    
    