
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $name = $_POST['name'];
    $month = $_POST['month'];
    
    if($month == 'Enero')
    {
        $mes = 1;
    }
    else if($month == 'Febrero')
    {
        $mes = 2;
    }
    else if($month == 'Marzo')
    {
        $mes = 3;
    }
    else if($month == 'Abril')
    {
        $mes = 4;
    }
    else if($month == 'Mayo')
    {
        $mes = 5;
    }
    else if($month == 'Junio')
    {
        $mes = 6;
    }
    else if($month == 'Julio')
    {
        $mes = 7;
    }
    else if($month == 'Agosto')
    {
        $mes = 8;
    }
    else if($month == 'Septiembre')
    {
        $mes = 9;
    }
    else if($month == 'Octubre')
    {
        $mes = 10;
    }
    else if($month == 'Noviembre')
    {
        $mes = 11;
    }
    else if($month == 'Diciembre')
    {
        $mes = 12;
    }

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT id_reparacion FROM Manobra_orden WHERE mecanico = '$name' and mes = '$mes'";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    $search_ID = $row['id_reparacion'];
                    $sqlsd = "SELECT id_reparacion FROM Cita WHERE id_reparacion = '$search_ID' AND finalizada = 'Finalizada'";

                    $querysd = sqlsrv_query($conn,$sqlsd);

                    $rowsd = sqlsrv_fetch_array($querysd);

                    if($rowsd == null)
                    {
                        echo json_encode("Sin registro");
                    }
                    else
                    {
                        $searchd_ID = $rowsd['id_reparacion'];
                        $sqlsn = "SELECT valor FROM Manobra_orden WHERE id_reparacion = '$searchd_ID' AND mecanico
                        = '$name' AND mes = '$mes'";

                        $querysn=sqlsrv_query($conn,$sqlsn);

                        $array = array();
                        
                         while($rowsn=sqlsrv_fetch_array($querysn,SQLSRV_FETCH_ASSOC)){
        
                            $array[] = $rowsn;
                                    
                         }
                         echo json_encode($array);
                    }
                }

    }
    