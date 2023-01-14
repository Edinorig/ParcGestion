<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);
$result = null;

$regionName = $data->regionName;


$stmt = $pdo->prepare("SELECT Parks.name FROM `Parks` inner join Regions on Parks.idRegion = Regions.id WHERE Regions.name = :region;");
$stmt->execute(['region' => $regionName]);
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