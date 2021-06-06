<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include "../../conn.php";

    $response = array();
    $category = "general";
    
    //$query = "SELECT id, title, description, image, category FROM articles WHERE category = ? ORDER BY id DESC LIMIT 5";
    $query = "SELECT id, title, description, image, category, date_publish FROM articles LIMIT 10";
    $stmt = $conn->prepare($query);
    //$stmt->bind_param('s', $category);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $title, $description, $image, $category, $date_publish);
 
    if($stmt->num_rows() > 0) {
        while($result = $stmt->fetch()) {
            $news = array(
                "id" => $id,
                "title" => $title,
                "description" => $description,
                "image" => $image,
                "category" => $category,
                "date" => $date_publish
            );

            array_push($response, $news);
        }
    }
   
    echo json_encode($response);
?>