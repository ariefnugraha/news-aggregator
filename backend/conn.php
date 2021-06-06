<?php
    $conn = new mysqli("localhost", "root", "", "news");

    if ($conn->connect_error) {die("Connection Failed");}
?>