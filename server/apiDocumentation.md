# API Documentation

This document provides an overview and usage details for the APIs in our project.

## Table of Contents

1. [Create Directory](#create-directory)
2. [Get All Directories](#get-all-directories)
3. [Get Directory Details](#get-directory-details)
4. [Update Directory](#update-directory)
5. [Delete Directory](#delete-directory)
6. [Add Like](#add-like)
7. [Get Directory Likes](#get-directory-likes)
8. [Delete Likes](#delete-likes)
9. [Add Dislikes](#add-dislikes)
10. [Get Directory Dislikes](#get-directory-dislikes)
11. [Delete Dislike](#delete-dislike)
12. [Add Comment](#add-comment)
13. [Get Directory Comments](#get-directory-comments)
14. [Delete Comment](#delete-comment)

## Create Directory

**Endpoint:** `POST /api/directory`

This endpoint allows the creation of a directory for a logged-in user: user token is required.


**Request:**

```http
Method: POST
URL: /api/directory
Headers:
  - Content-Type: application/json
  - Authorization: Bearer [YourAccessTokenHere]

Request Body:
{
  "dir_name": "Example Directory",
  "address": "1234 Example St, City, Country",
  "directory_email": "directory@example.com",
  "telephone": "+234 8123456789",
  "profile_image": "https://example.com/profile_image.jpg",
  "quote": "Inspiring quote for the directory",
  "description": "Description of the directory"
}
```
**Response:**

```http
Status: 201 Created
Body:
{
  "message": "Directory Successfully created"
}
```

**Error Response:**
```http
Status: 500 Internal Server Error
Body:
{
  "error": "[error message]"
}
```

## Get All Directories

**Endpoint:** `GET /api/directory`

This endpoint retrieves all directories.

**Request:**

```http
Method: GET
URL: /api/directory
```

**Response:**

```http
Status: 200 OK
Body:
[
  {
    "dir_id": 1,
    "dir_name": "Example Directory 1",
    "address": "1234 Example St, City, Country",
    "directory_email": "directory@example.com",
    "telephone": "1234567890",
    "profile_image": "https://example.com/profile_image.jpg",
    "quote": "Inspiring quote for the directory",
    "description": "Description of the directory"
  },
  {
    "dir_id": 2,
    "dir_name": "Example Directory 2",
    "address": "5678 Example St, City, Country",
    "directory_email": "directory2@example.com",
    "telephone": "9876543210",
    "profile_image": "https://example.com/profile_image2.jpg",
    "quote": "Another inspiring quote for the directory",
    "description": "Description of another directory"
  },
  ...
]
```
**Error Response:**
```http
Status: 500 Internal Server Error
Body:
{
  "error": "Internal Server Error"
}
```

## Get Directory Details

**Endpoint:** `GET /api/directory`

This endpoint retrieves all directories.

**Request:**

```http
Method: GET
URL: /api/directory
```

**Response:**

```http
Status: 200 OK
Body:
[
  {
    "dir_id": 1,
    "dir_name": "Example Directory 1",
    "address": "1234 Example St, City, Country",
    "directory_email": "directory@example.com",
    "telephone": "1234567890",
    "profile_image": "https://example.com/profile_image.jpg",
    "quote": "Inspiring quote for the directory",
    "description": "Description of the directory"
  },
  {
    "dir_id": 2,
    "dir_name": "Example Directory 2",
    "address": "5678 Example St, City, Country",
    "directory_email": "directory2@example.com",
    "telephone": "9876543210",
    "profile_image": "https://example.com/profile_image2.jpg",
    "quote": "Another inspiring quote for the directory",
    "description": "Description of another directory"
  },
  ...
]
```
**Error Response:**
```http
Status: 500 Internal Server Error
Body:
{
  "error": "Internal Server Error"
}
```

