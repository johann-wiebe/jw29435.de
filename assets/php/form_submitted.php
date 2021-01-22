<?php
$msg = "Message not send";
if (isset($_POST['submit'])) {
$last_name = isset($_POST['last_name']) ? $_POST['last_name'] : null;
$first_name = isset($_POST['first_name']) ? $_POST['first_name'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$subject = isset($_POST['subject']) ? $_POST['subject'] : null;
$message = isset($_POST['message']) ? $_POST['message'] : null;

$to = "contactform@jw29435.de";
$mail_message = "A " . $first_name . " " . $last_name . " has a message. \n\n " . $message;
mail($to, $subject, $mail_message, "From: $email");
$msg = "The message was send successfully.";
}
header("location:../../index.php");
exit();