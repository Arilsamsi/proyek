<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Data dari form
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email yang dituju (email pribadi Anda)
    $to = "arilsamsi2@gmail.com";
    $subject = "New Contact Form Submission";

    // Pesan email
    $emailBody = "Name: $name\n";
    $emailBody .= "Email: $email\n\n";
    $emailBody .= "Message:\n$message\n";

    // Headers untuk email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Kirim email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed!";
    }
}
?>
