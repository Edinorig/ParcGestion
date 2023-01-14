<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);


$result = null;


$stmt = $pdo->query("SELECT * FROM `Sex`;");
$list = $stmt->fetchAll();

if ($list != null) {
    $result = array(
        'data' => json_encode($list),
        'status' => 200,
    );
} else {
    $result = array(
        'data' => null,
        'status' => 503,
    );
}


echo json_encode($result);
?>