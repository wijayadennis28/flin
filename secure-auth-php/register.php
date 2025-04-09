<?php
// File: register.php

require 'config.php';
require 'database.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

// Validate input
if (!$username || !$password) {
    echo json_encode(["error" => "Username and password are required."]);
    exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Check if the username already exists, if not, insert the new user
try {
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->execute([$username, $hashedPassword]);
    echo json_encode(["message" => "User registered successfully."]);
} catch (PDOException $e) {
    echo json_encode(["error" => "Registration failed. Username may already exist."]);
}
