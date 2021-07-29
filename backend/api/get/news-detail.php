<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include "../../conn.php";

    $getTitle = $_GET['title'];

    $response = array();
    $query = "SELECT * FROM articles WHERE title = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('s', $getTitle);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $source, $title, $description, $author, $link, $image, $date_publish, $content, $category);

    if($stmt->num_rows() > 0) {
        while($stmt->fetch()) {
            $news = array(
                "id" => $id,
                "title" => $title,
                "description" => $description,
                "author" => $author,
                "link" => $link,
                "image" => $image,
                "date" => $date_publish,
                "content" => $content,
                "category" => $category
            );

            array_push($response, $news);
        }
    }

    echo json_encode($response);
?>