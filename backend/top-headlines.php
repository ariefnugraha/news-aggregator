<?php
include 'conn.php';
require 'vendor/autoload.php';

use jcobhams\NewsApi\NewsApi;

$newsapi = new NewsApi("29fefd8f54de441fa6a8cc60f9f1822f");
$topHeadline = $newsapi->getTopHeadLines(null, null, "id", "general", 5, 5);
$news = $topHeadline->articles;


for ($i = 0; $i < count($news); $i++) {
    $source = $news[$i]->source->name;
    $author = $news[$i]->author;
    $title = $news[$i]->title;
    $description = $news[$i]->description;
    $url = $news[$i]->url;
    $image = $news[$i]->urlToImage;
    $publish = $news[$i]->publishedAt;
    $content = $news[$i]->content;
    $category = "general";

    $checkQuery = "SELECT * FROM articles WHERE title=? AND source=? AND date_publish=?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("sss", $title, $source, $publish);
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows() == 0 ) {
        $id = null;

        $insertQuery = "INSERT INTO `articles` (`id`, `source`, `title`, `description`, `author`, `url`, `image`, `date_publish`, `content`, `category`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $insert = $conn->prepare($insertQuery);
        $insert->bind_param("isssssssss", $id, $source, $title, $description, $author, $url, $image, $publish, $content, $category);
        if($insert->execute()) {
            echo "MASuk";
        } else {
            echo $insert->execute();
        }
    }
}
