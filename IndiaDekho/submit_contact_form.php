<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Prepare the content to save to the text file
    $content = "Name: $name\nEmail: $email\nMessage: $message\n\n";

    // Path to the text file where the messages will be stored
    $file = 'contact_messages.txt';

    // Open the file and write the message
    $handle = fopen($file, 'a'); // Open file in append mode
    if ($handle) {
        fwrite($handle, $content); // Write the message to the file
        fclose($handle); // Close the file after writing
    }

    // Display a success message and redirect after 3 seconds
    echo "<p style='color: green;'>Your message has been submitted successfully!</p>";
    
    // Redirect to home page after 3 seconds
    header("refresh:3;url=home.html");
    exit; // Make sure to exit after the redirect

} else {
    // If the form was not submitted correctly
    echo "<p style='color: red;'>Invalid form submission.</p>";
}
?>
