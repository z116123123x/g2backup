
<?php



if( file_exists("MemPic") == false){
			mkdir("MemPic"); //make dir
		}

		$from = $_FILES['file']['tmp_name'];
		$to = "MemPic/" ."member". $_FILES['file']['name']; //   images/7.gif
		if(copy($from, $to)){
			echo "上傳成功<br>";
		}else{
			echo "上傳失敗<br>";
		}


?>




