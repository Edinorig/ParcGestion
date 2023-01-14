<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$result = null;

$parkName = $data->parkName;


$stmt = $pdo->prepare("SELECT Fauna.id ,Fauna.Name,Fauna.Quantity,Health.statusHealth,Sex.Sex,Parks.name,Age.Age, TypeFauna.Type,KindFauna.KindFauna
FROM `Fauna` 
INNER JOIN Health ON Fauna.idHealth = Health.idHealth
INNER JOIN Sex ON Fauna.idSex = Sex.id 
INNER JOIN Parks ON Fauna.idPark = Parks.id 
INNER JOIN Age ON Fauna.idAge = Age.id
INNER JOIN TypeFauna ON Fauna.idType = TypeFauna.id
INNER JOIN KindFauna ON Fauna.idKind = KindFauna.id
WHERE Parks.name =:parkName;");
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