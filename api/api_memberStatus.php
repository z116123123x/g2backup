<?php
session_start();
if (isset($_SESSION["member_no"])) {
    $member = array(
        "no" => $_SESSION["member_no"],
        "name" => $_SESSION["member_name"],
        "phone" => $_SESSION["member_phone"],
        "email" => $_SESSION["member_email"],
        "gender" => $_SESSION["member_gender"],
        "img" => $_SESSION["member_img"],
        "acc" => $_SESSION["member_acc"],
        "nick" => $_SESSION["member_nick"],
        "status" => $_SESSION["member_status"],
    );
    echo json_encode($member);
} else {
    echo "";
}

?>