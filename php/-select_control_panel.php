
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
    

    $date = getdate();
    $mes_current = $date['mon'];
    $day = $date['mday'];
    $dia = $day;


    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
                $sqls = "SELECT id_reparacion,identificacion,nombre,placa,servicio,telefono,hora FROM Cita WHERE finalizada = 'Pendiente'
                 ORDER BY hora ASC";

                $querys=sqlsrv_query($conn,$sqls);

                $array = array();
                
                 while($row=sqlsrv_fetch_array($querys,SQLSRV_FETCH_ASSOC)){

                    $array[] = $row;
                            
                 }
                 echo json_encode($array);
    }
    