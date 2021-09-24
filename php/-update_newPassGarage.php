
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $dato = $_POST['dato'];
    $password = $_POST['password'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
        $sqls = "SELECT contraseña FROM Datos_taller WHERE contraseña = '$password'";
        
        $querys=sqlsrv_query($conn,$sqls);

        $row=sqlsrv_fetch_array($querys);
        
        if($row == null)
        {
            echo json_encode("Error");
        }
        else
        {
            $sql = "UPDATE Datos_taller SET contraseña = '$dato' WHERE contraseña = '$password'";
        
            $query=sqlsrv_query($conn,$sql);

            if($query){

            echo json_encode("Exito");

            }else
            {
            echo json_encode("Error");
            }
        }

        
    }
    