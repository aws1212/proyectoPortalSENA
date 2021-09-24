
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_repair = $_POST['id_repair'];
    $placa = $_POST['placa'];
    $name = $_POST['name'];
    $reference = $_POST['reference'];
    $price = $_POST['price'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "INSERT INTO Repuestos_orden(id_reparacion,placa,nombre,referencia,precio)
        VALUES('$id_repair','$placa','$name','$reference','$price')";
        
            $query=sqlsrv_query($conn,$sql);

            if($query){

              echo json_encode("Exito");

            }else
            {
            echo json_encode("Error");
            }

        
        
        
    }
    