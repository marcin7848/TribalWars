<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once __DIR__ . '/src/Exception.php';
require_once __DIR__ . '/src/PHPMailer.php';
require_once __DIR__ . '/src/SMTP.php';

if(isset($_GET['subject']) && !empty($_GET['subject']) && isset($_GET['body']) && !empty($_GET['body']))
{
    $mail = new PHPMailer();

    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPAuth = true;
    $mail->Username = 'kkact1324@gmail.com';
    $mail->Password = 'KacZ987@';
    $mail->setFrom('kkact1324@gmail.com', 'TribalWars');
    $mail->addReplyTo('kkact1324@gmail.com', 'TribalWars');
    $mail->addAddress('marcin7848@gmail.com', 'Marcin');
    $mail->Subject = htmlspecialchars($_GET['subject']);
    $mail->Body = htmlspecialchars($_GET['body']);

    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message sent!';
    }
}

?>