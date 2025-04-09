<?php
require 'vendor/autoload.php';
require 'config.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Content-Type: application/json");

// Function to get the token from the Authorization header
function getTokenFromHeader() {
    $headers = function_exists('apache_request_headers') ? apache_request_headers() : [];

    if (isset($_SERVER['HTTP_AUTHORIZATION'])) return trim($_SERVER['HTTP_AUTHORIZATION']);
    if (isset($headers['Authorization'])) return trim($headers['Authorization']);
    if (isset($headers['authorization'])) return trim($headers['authorization']);

    return null;
}

$token = getTokenFromHeader();

if (!$token) {
    http_response_code(401);
    echo json_encode(["error" => "Token not provided."]);
    exit;
}

// decode the JWT token
try {
    $decoded = JWT::decode($token, new Key(JWT_SECRET_KEY, 'HS256'));

    echo json_encode([
        "user_id" => $decoded->uid,
        "username" => $decoded->username
    ]);
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode([
        "error" => "Invalid token.",
        "message" => $e->getMessage()
    ]);
}
