<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');

try {

    require_once("connectDB.php");

    // 查詢帳號是否已經被註冊過
    $sql = "select * from `member` where acc=:acc";
    $member = $pdo->prepare($sql);

    $memberInfo = json_decode(file_get_contents("php://input"));

    $member->bindValue(":acc", $memberInfo->acc);

    if ($member->rowCount() != 0) {

        echo "1";
    } else {

        $sql = "insert into `member` (`acc`, `psw`, `email`) values ( $memberInfo->acc, $memberInfo->psw, $memberInfo->email)";

        $member = $pdo->prepare($sql);

        // $memberInfo = json_decode(file_get_contents("php://input"));

        // $member->bindValue(":acc", $memberInfo->acc);
        // $member->bindValue(":psw", $memberInfo->psw);
        // $member->bindValue(":email", $memberInfo->email);

        echo "0";
    }
} catch (PDOException $e) {
    $error = ["error" => $e->getMessage()];
    echo json_encode($error);
}
