
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_mechanic = $_POST['id_mechanic'];
    $name_mechanic = $_POST['name_mechanic'];
    $cargo_mechanic = $_POST['cargo_mechanic'];
    $phone_mechanic = $_POST['phone_mechanic'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "INSERT INTO Mecanico(identificacion,nombre,cargo,telefono)
        VALUES('$id_mechanic','$name_mechanic','$cargo_mechanic','$phone_mechanic')";
        
            $query=sqlsrv_query($conn,$sql);

            if($query){

              echo json_encode("Exito");

            }else
            {
            echo json_encode("Error");
            }

        
        
        
    }
    