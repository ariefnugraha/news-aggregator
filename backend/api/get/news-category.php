<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include "../../conn.php";

    $response = array();
    $getCategory = $_GET['category'];
    $news = array();
    $query = "SELECT id, title, description, image FROM articles WHERE category = ? ORDER BY id DESC LIMIT 7";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $getCategory);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $title, $description, $image);
    if($stmt-> num_rows() == 0) {
        $news = array("message" => "Data Tidak Ada");
        array_push($response, $news);
    } else {
        
        while($result = $stmt->fetch()) {
            $news = array(
                "id" => $id,
                "title" => $title,
                "description" => $description,
                "image" => $image
            );

            array_push($response, $news);
        }
    }

    echo json_encode($response);
?>