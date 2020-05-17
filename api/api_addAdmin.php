<?php 
try {
    require_once("connectDB.php");

    $addAdminInfo = json_decode(file_get_contents("php://input"));
    
	$sql = "insert into `admin` (`no`, `name`, `acc`, `psw`, `status`) values(null, :name, :acc, :psw, '1')";
    // $addAdmin = $pdo->query($sql);
    $addAdmin = $pdo->prepare($sql);
    $addAdmin -> bindValue(":name", $addAdminInfo->name);
    $addAdmin -> bindValue(":acc", $addAdminInfo->acc);
    $addAdmin -> bindValue(":psw", $addAdminInfo->psw);
    $addAdmin-> execute();

    $no = $pdo->lastInsertId();
    
    echo json_encode($addAdminInfo);


        // echo "<script> alert('資料新增完成 ٩(･ิᴗ･ิ๑)۶');parent.location.href='/AdminManage.vue'; </script>"; 



   

    
} catch (PDOException $e) {
   echo "錯誤原因 : ", $e->getMessage(), "<br>";
   echo "錯誤行號 : ", $e->getLine(), "<br>";	
}
