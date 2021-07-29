<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Method: GET");
include "../../conn.php";


$response = array();
$stmt = $conn->prepare("SELECT id, image, title, description, category, date_publish FROM articles ORDER BY rand() LIMIT 5");
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $image, $title, $description, $category, $date);
while ($stmt->fetch()) {
    $news = array(
        "id" => $id,
        "image" => $image,
        "title" => $title,
        "description" => $description,
        "category" => $category,
        "date" => $date
    );

    array_push($response, $news);
}

echo json_encode($response);
