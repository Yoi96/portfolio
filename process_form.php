<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];

 
    $to = "xiaoyiliu96xyl@gmail.com";

  
    $message = "First Name: " . $firstname . "\n";
    $message .= "Last Name: " . $lastname . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Message: " . $subject;
 
    if (mail($to, "New Contact Form Submission", $message)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong, please try again later.";
    }
} else {
    // 如果不是通过POST请求提交的表单，则重定向到错误页面或其他适当的操作
    header("Location: error.php");
    exit;
}
?>
