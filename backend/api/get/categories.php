<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include "../../conn.php";

    $response = array();

    $query = "SELECT * FROM categories";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $name);

    if($stmt->num_rows() > 0) {
        while($stmt->fetch()) {
            $category = array(
                "id" => $id,
                "name" => $name
            );
            array_push($response, $category);
        }
    }

    echo json_encode($response);
?>