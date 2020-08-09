<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$text = htmlspecialchars($text);

$name = urldecode($name);
$phone = urldecode($phone);
$text = urldecode($text);

$name = trim($name);
$phone = trim($phone);
$text = trim($text);


if (mail("viktorbasiev@gmail.com", "Заказ с сайта", "ФИО:".$name.". Phone: ".$phone,"From: viktobasiev@gmail.com \r\n" ))
 { 
    echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки"; 
}

?>