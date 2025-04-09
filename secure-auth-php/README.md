# Secure Authentication System in PHP

## Features
- JWT-based authentication
- RESTful API endpoints
- Uses MySQL for user data

## Endpoints

### POST /register.php
**Request Body:**
```json
{
  "username": "jane",
  "email": "jane@example.com",
  "password": "secret123"
}
```
**Response:**
```json
{ "message": "User registered successfully" }
```

### POST /login.php
**Request Body:**
```json
{
  "email": "jane@example.com",
  "password": "secret123"
}
```
**Response:**
```json
{ "token": "<jwt_token>" }
```

### GET /profile.php
**Header:** 
`Authorization: <jwt_token>`
**Response:**
```json
{
  "id": 1,
  "username": "jane",
  "email": "jane@example.com"
}
```

## Database Setup
```sql
CREATE DATABASE jwt_demo;

USE jwt_demo;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

## Setup
1. Clone this repo
2. Configure DB in `config.php`
3. Make sure to have Composer on your local and run `composer require firebase/php-jwt`
3. Use Postman or curl to test the endpoints

## Deployment
Can be deployed on:
- Localhost (XAMPP, WAMP)
