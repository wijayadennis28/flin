<?php
require 'vendor/autoload.php';
require 'config.php';
require 'database.php';

use Firebase\JWT\JWT;

header("Content-Type: application/json");

// decode the JSON payload and extract the username and password
$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if (!$username || !$password) {
    echo json_encode(["error" => "Username and password are required."]);
    exit;
}

// check if the user exists in the database
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password'])) {
    $payload = [
        "uid" => $user['id'],
        "username" => $user['username'],
        "exp" => time() + 3600
    ];

    // generate the JWT token
    $token = JWT::encode($payload, JWT_SECRET_KEY, 'HS256');
    echo json_encode(["access_token" => $token]);
} else {
    http_response_code(401);
    echo json_encode(["error" => "Invalid login credentials."]);
}
