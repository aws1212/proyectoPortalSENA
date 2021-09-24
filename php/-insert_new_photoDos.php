
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_repair = $_POST['id_repair'];
    $placa = $_POST['placa'];
 
    if($conn === false){
        echo json_encode("Error de conexion");
    }
    else
    {
            $sqlvd = "SELECT id_reparacion,placa FROM Fotografia_orden WHERE id_reparacion = '$id_repair' AND placa = '$placa'";

            $queryvd=sqlsrv_query($conn,$sqlvd);

            $rowvd=sqlsrv_fetch_array($queryvd);
            
            if($rowvd == null)
            {

                if(move_uploaded_file($_FILES["imagee"]["tmp_name"],"image_photoDos/".$_FILES["imagee"]["name"]))
                {
                    $linkimg_Diurna = "http://localhost/Web_TC/public/php/image_photoDos/".$_FILES["imagee"]["name"];

                    $sqlivs = "INSERT INTO Fotografia_orden(id_reparacion,placa)VALUES('$id_repair','$placa')";
                
                    $queryivd=sqlsrv_query($conn,$sqlivs);
        
                    if($queryivd){

                        $sqllos = "UPDATE Fotografia_orden set foto_dos = '$linkimg_Diurna' WHERE id_reparacion = 
                        '$id_repair' AND placa = '$placa'";
                
                        $queryuvd=sqlsrv_query($conn,$sqllos);
            
                        if($queryuvd)
                        {
                        echo json_encode("Exito");            
                        }else
                        {
                        echo json_encode("Error");
                        }
        
                    }else
                    {
                    echo json_encode("Error");
                    }
                    
                }
                else
                {
                    echo json_encode("Null");
                }
                
            }
            else
            {
                $sqlfd = "SELECT foto_dos FROM Fotografia_orden WHERE id_reparacion = '$id_repair' AND placa = '$placa'";

                $queryfd = sqlsrv_query($conn,$sqlfd);

                $rowfd = sqlsrv_fetch_array($queryfd);

                if($rowfd['foto_dos'] != null)
                { if(move_uploaded_file($_FILES["imagee"]["tmp_name"],"image_photoDos/".$_FILES["imagee"]["name"]))
                        {

                            $linkimg_Diurna = "http://localhost/Web_TC/public/php/image_photoDos/".$_FILES["imagee"]["name"];
                            

                            $sqllos = "UPDATE Fotografia_orden set foto_dos = '$linkimg_Diurna' WHERE id_reparacion = 
                            '$id_repair' AND placa = '$placa'";
                    
                            $queryuvd=sqlsrv_query($conn,$sqllos);
                
                            if($queryuvd)
                            {
                            echo json_encode("Exito");            
                            }else
                            {
                            echo json_encode("Error");
                            }
                        }
                        else
                        {
                            echo json_encode("Null");
                        }
                    
                }
                else
                    {
                    
                        if(move_uploaded_file($_FILES["imagee"]["tmp_name"],"image_photoDos/".$_FILES["imagee"]["name"]))
                        {

                            $linkimg_Diurna = "http://localhost/Web_TC/public/php/image_photoDos/".$_FILES["imagee"]["name"];
                            

                            $sqllos = "UPDATE Fotografia_orden set foto_dos = '$linkimg_Diurna' WHERE id_reparacion = 
                            '$id_repair' AND placa = '$placa'";
                    
                            $queryuvd=sqlsrv_query($conn,$sqllos);
                
                            if($queryuvd)
                            {
                            echo json_encode("Exito");            
                            }else
                            {
                            echo json_encode("Error");
                            }
                        }
                        else
                        {
                            echo json_encode("Null");
                        }
                    
                }

                
                
            }
        }

        
    