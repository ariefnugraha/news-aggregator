<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include "../../conn.php";

    $response = array();
    $getCategory = "general";//$_GET['category'];
    $getId = 141; //$_GET['id'];
    $getLimitData = 5;//$_GET['limit-data'];
    $news = array();

    if(isset($getLimitData) && isset($getId)) { 
        //GET NEWS CATEGORY FOR DETAIL PAGE
        $query = "SELECT id, title, description, image FROM articles WHERE category = ? AND id != ? ORDER BY id DESC LIMIT ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sii", $getCategory, $getId, $getLimitData); 
    } else {
        $query = "SELECT id, title, description, image FROM articles WHERE category = ? ORDER BY id DESC LIMIT 7";
        $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $getCategory);
    }
    
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