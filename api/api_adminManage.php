<?php 
try {
    require_once("connectDB.php");
    
	$sql = "select * from `admin`";
	$admin = $pdo->query($sql);
    $adminInfo = $admin->fetchAll(PDO::FETCH_ASSOC);
    $admin->execute();

    echo json_encode($adminInfo);
    
} catch (PDOException $e) {
   echo "錯誤原因 : ", $e->getMessage(), "<br>";
   echo "錯誤行號 : ", $e->getLine(), "<br>";	
}	
?>