<?php
require('../../common/php/simple-connect.php');


$product = $data->product;



$idTipo = $_POST['idTipo'][0];
$idSpecie = $_POST['idSpecie'][0];
$idSesso = $_POST['idSesso'][0];
$idEta = $_POST['idEta'][0];
$idSalute = $_POST['idSalute'][0];
$idQuantita =  $_POST['input-data-quantità'];
$ifNome =  $_POST['input-data-nome'];




echo "<pre>";
print_r($_POST);
echo "</pre>";

mysqli_query($connect, "INSERT INTO `Fauna`(`id`, `name`, `quantity`, `idSex`, `idAge`, `idKind`, `idHealth`, `idType`, `idPark`) VALUES (Null,'$ifNome','$idQuantita','$idSesso','$idEta','$idTipo','$idSalute','$idSpecie','$product')") or die(mysqli_error($connect));