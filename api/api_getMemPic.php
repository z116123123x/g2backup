<?php
header('Access-Control-Allow-Origin:*'); //允許所有來源訪問
header('Access-Control-Allow-Method:POST,GET'); //允許POST、GET訪問方式
session_start();
try {

    require_once("connectDB.php");

    $sql = "update `member` set `img`=:img where `acc`=:acc and `no`=:no";
    $member = $pdo->prepare($sql);

    $memberInfo = json_decode(file_get_contents("php://input"));

    $member->bindValue(":no", $memberInfo->no);
    $member->bindValue(":acc", $memberInfo->acc);
    $member->bindValue(":img", $memberInfo->img);


    $member->execute();

     $memRow = $member->fetch(PDO::FETCH_ASSOC);

    $_SESSION["member_img"] = $memRow["img"];

    if ($member->rowCount() == 0) {
        echo "1";
    } else {
        echo "0";
    }
} catch (PDOException $e) {
    $error = ["error" => $e->getMessage()];
    echo json_encode($error);
}
?>