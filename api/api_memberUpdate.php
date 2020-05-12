<?php
header('Access-Control-Allow-Origin:*'); //允許所有來源訪問
header('Access-Control-Allow-Method:POST,GET'); //允許POST、GET訪問方式

try {

    require_once("connectDB.php");

    $sql = "update `member` set `phone`=:phone, `email`=:email, `nick`=:nick, `name`=:name where `acc`=:acc and `no`=:no";
    $member = $pdo->prepare($sql);

    $memberInfo = json_decode(file_get_contents("php://input"));

    $member->bindValue(":no", $memberInfo->no);
    $member->bindValue(":acc", $memberInfo->acc);
    $member->bindValue(":name", $memberInfo->name);
    $member->bindValue(":nick", $memberInfo->nick);
    $member->bindValue(":phone", $memberInfo->phone);
    $member->bindValue(":email", $memberInfo->email);

    $member->execute();

    if ($member->rowCount() == 0) {
        echo "0";
    } else {
        echo "1";
    }
} catch (PDOException $e) {
    $error = ["error" => $e->getMessage()];
    echo json_encode($error);
}
