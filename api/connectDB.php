<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=dd106g2;charset=utf8";
	$user = "root";
	$password = "Aa123321123";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
?>