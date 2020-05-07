<?php
session_start();
if (isset($_SESSION["no"])) {
    $member = array(
        "no" => $_SESSION["no"],
        "name" => $_SESSION["name"],
        "phone" => $_SESSION["phone"],
        "email" => $_SESSION["email"],
        "gender" => $_SESSION["gender"],
        "img" => $_SESSION["img"],
        "acc" => $_SESSION["psw"],
        "nick" => $_SESSION["nick"],
        "status" => $_SESSION["status"],
    );
    echo json_encode($member);
} else {
    echo "{}";
}