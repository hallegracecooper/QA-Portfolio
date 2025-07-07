# Reqres API Tests

This Postman collection contains 3 test cases to validate API responses from https://reqres.in.

## Endpoints tested

- `GET /api/users/2` – retrieves user Janet
- `POST /api/users` – creates a new user with name and job
- `POST /api/register` – returns 400 for missing password

## Tests included

- Status code (200, 201, 400)
- Response time under 800ms
- Body content (e.g., "name" = "halle", "error" = "Missing password")

## Instructions

1. Import the collection into Postman
2. Run each request manually or use the Collection Runner
3. View test results in the Postman console or Results tab
