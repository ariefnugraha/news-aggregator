<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include "../../conn.php";

    $response = array();
    $category = "general";
    
    //$query = "SELECT id, title, description, image, category FROM articles WHERE category = ? ORDER BY id DESC LIMIT 5";

    if(isset($_GET['id'])) {
        $id = $_GET['id'];
        $query = "SELECT id, title, description, image FROM articles WHERE id != ? ORDER BY id DESC LIMIT 5";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('i', $id);
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($id, $title, $description, $image);
        if($stmt->num_rows() > 0) {
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
    } else {
        $query = "SELECT id, title, description, image, category, date_publish FROM articles ORDER BY id DESC";
        $stmt = $conn->prepare($query);
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
    }
    
   
 
    
   
    echo json_encode($response);
