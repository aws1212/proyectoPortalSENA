<?php

$serverName = "SQL5063.site4now.net"; //serverName\instanceName

// Puesto que no se han especificado UID ni PWD en el array  $connectionInfo,
// La conexión se intentará utilizando la autenticación Windows.
$connectionInfo = array( "Database"=>"DB_A63A59_iswinbedata", "UID"=>"DB_A63A59_iswinbedata_admin", "PWD"=>"1197leoivandb","CharacterSet"=>"UTF-8");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
     
}else{
     echo "Conexión no se pudo establecer.<br />";
     die( print_r( sqlsrv_errors(), true));
}

?>