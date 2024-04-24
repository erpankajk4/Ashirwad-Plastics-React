<?php
if(isset($_POST['submit'])){
    $to = "info@ashirwadplastics.com"; // Replace with your email address
    $from = $_POST['email'];
    $subject = "Form submission";
    $message = "Name: " . $_POST['name'] .
     "\n\n" . "Email: " . $_POST['email'] .
        "\n\n" . "Message: " . $_POST['message'] .


    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    $header2 = "To:" . $to;
    mail($from,$subject,$message,$header2);
    echo "Mail Sent. Thank you " . $_POST['name'] . ", we will contact you shortly.";
    exit();
}
?>