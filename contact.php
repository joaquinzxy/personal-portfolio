<?php
error_reporting(0);
$nombre = $_POST['name'];
$email= $_POST['email'];
$mailcontent = $_POST['mailcontent'];
$header = 'From: ' . $mail . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .="Mensaje: ". $mailcontent . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'hola@soyjoaquin.xyz';
$asunto = 'JDS: '.$nombre." ".$email;

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location: http://soyjoaquin.xyz/?emailSend=true#contact");
die();

?>