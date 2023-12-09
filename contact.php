
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "a252550k@gmail.com"; // Replace with your email address
    $email_subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";
    
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>

