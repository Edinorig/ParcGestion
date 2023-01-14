<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);
$result = null;


$parkName = $data->parkName;


$stmt = $pdo->prepare("SELECT Flora.id ,Flora.Name,Flora.Quantity,Health.statusHealth,Sex.Sex,Parks.name,Age.Age, TypeFlora.Type,KindFlora.KindFlora
FROM `Flora` 
INNER JOIN Health ON Flora.idHealth = Health.idHealth
INNER JOIN Sex ON Flora.idSex = Sex.id 
INNER JOIN Parks ON Flora.idPark = Parks.id 
INNER JOIN Age ON Flora.idAge = Age.id
INNER JOIN TypeFlora ON Flora.idType = TypeFlora.id
INNER JOIN KindFlora ON Flora.idKind = KindFlora.id
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
?>