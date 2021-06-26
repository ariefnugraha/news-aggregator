<?php
include "conn.php";
require 'vendor/autoload.php';

use jcobhams\NewsApi\NewsApi;

$newsapi = new NewsApi("f0334f42a2824a0ca3257c34ec177893");

//array to store category from db
$storeCategory = array();

$queryCategory = "SELECT name FROM categories";
$stmtCategory = $conn->prepare($queryCategory);
$stmtCategory->execute();
$stmtCategory->store_result();
$stmtCategory->bind_result($name);

if ($stmtCategory->num_rows() > 0) {
    while ($stmtCategory->fetch()) {
        array_push($storeCategory, $name);
    }
} else {
    echo 'ggal';
}

//get data from api based on category

foreach ($storeCategory as $key => $value) {
    $topHeadline = $newsapi->getTopHeadLines(null, null, 'id', $value, 10, 10);
    $storeNews = $topHeadline->articles;

    for ($i = 0; $i < count($storeNews); $i++) {
        $source = $storeNews[$i]->source->name;
        $author = $storeNews[$i]->author;
        $title = $storeNews[$i]->title;
        $description = $storeNews[$i]->description;
        $url = $storeNews[$i]->url;
        $image = $storeNews[$i]->urlToImage;
        $publish = $storeNews[$i]->publishedAt;
        $content = $storeNews[$i]->content;

        $checkQuery = "SELECT * FROM articles WHERE title=? AND source=? AND date_publish=? AND category = ?";
        $stmt = $conn->prepare($checkQuery);
        $stmt->bind_param("ssss", $title, $source, $publish, $value);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows() == 0) {
            $id = null;

            $insertQuery = "INSERT INTO `articles` (`id`, `source`, `title`, `description`, `author`, `url`, `image`, `date_publish`, `content`, `category`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $insert = $conn->prepare($insertQuery);
            $insert->bind_param("isssssssss", $id, $source, $title, $description, $author, $url, $image, $publish, $content, $value);
            if ($insert->execute()) {
                echo "MASuk";
            } else {
                echo $insert->execute();
            }
        } else {
            echo "Ada";
        }
    }
}
