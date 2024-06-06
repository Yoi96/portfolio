<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "xiaoyiliu96xyl@gmail.com";
    $subject = "New contact form message";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mail sent successfully!";
    } else {
        echo "Email sending failed...";
    }
} else {
    echo "Invalid request method.";
}
?>
