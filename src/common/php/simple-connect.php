<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "parcoVysotskyy";



$connect = mysqli_connect($servername, $username, $password, $dbname);
if(!$connect) {
  die('Error');
}