<?php
if (isset($_GET['numberPlate'])) {
    $numberPlate = $_GET['numberPlate'];
    $apiUrl = "https://carflow-mocha.vercel.app/api/vehicle?numberPlate=" . urlencode($numberPlate);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    curl_close($ch);

    header('Content-Type: application/json');
    echo $response;
} else {
    echo json_encode(["error" => "No number plate provided"]);
}
?>
