<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    $to = "a252550k@gmail.com"; // Replace with your email address
    $email_subject = "Contact Form Submission from $name"; // Use a different variable for email subject
    $headers = "From: $email";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message";
    
    // Use the mail function to send the email
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "success"; // You can handle success in your JavaScript
    } else {
        echo "error"; // You can handle errors in your JavaScript
    }
}
?>