<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    
    $to = "xiaoyiliu96xyl@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    
    $headers = "From: $email";
    
     
    if (mail($to, $subject, $body, $headers)) {
         
        header("Location: thank_you.html");
        exit();
    } else {
         
        echo "Failed to send email. Please try again later.";
    }
}
?>
