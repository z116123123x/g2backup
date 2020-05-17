<?php
header('Access-Control-Allow-Origin:*'); //允許所有來源訪問
header('Access-Control-Allow-Method:POST,GET'); //允許POST、GET訪問方式

session_start();
try {
    // 登入DB
    require_once("connectDB.php");

    // 操作DB
    $sql = "select * from `member` where acc=:acc and psw=:psw";
    $member = $pdo->prepare($sql);

    $memberInfo = json_decode(file_get_contents("php://input"));

    $member->bindValue(":acc", $memberInfo->acc);
    $member->bindValue(":psw", $memberInfo->psw);

    // 返回data
    $member->execute();

    if ($member->rowCount() == 0) {
        // 查無此人
        echo "";
    } else {
        // 登入成功
        // 自資料庫中取回資料
        $memRow = $member->fetch(PDO::FETCH_ASSOC);

        // 寫入session
        $item = array("no", "name", "phone", "email", "gender", "img", "acc", "psw", "nick", "status");

        for ($i = 0; $i < count($item); $i++) {

            $_SESSION["member_" . $item[$i]] = $memRow[$item[$i]];
        }

        // 送出登入者的姓名資料
        $member = array("name" => $_SESSION["member_name"], "nick" => $_SESSION["member_nick"], "status" => $_SESSION["member_status"]);

        echo json_encode($memRow);
    }
} catch (PDOException $e) {
    $error = ["error" => $e->getMessage()];
    echo json_encode($error);
}
