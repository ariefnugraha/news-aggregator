import axios from 'axios';

axios.get("http://localhost:80/news/backend/api/get/headlines.php")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => console.log(error));


