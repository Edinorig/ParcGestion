<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);
$result = null;


$parkName = $data->product;


$stmt = $pdo->prepare("SELECT Parks.name
FROM `Fauna` 
INNER JOIN Parks ON Fauna.idPark = Parks.id 
;");

$stmt->execute(['parkName' => $parkName]);
$list = $stmt->fetchAll();


if ($list) {
    $result = array(
        'data' => json_encode($list),
        'status' => 201,
    );
} else {
    $result = array(
        'data' => null,
        'status' => 401,
    );
}


echo json_encode($result);
?>