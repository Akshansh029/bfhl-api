## Objective

Build and host a REST API (Method: POST) that takes in an array and returns the
following:

1. Status
2. User ID
3. Email ID
4. College Roll Number
5. Array for even numbers
6. Array for odd numbers
7. Array for alphabets, converted to uppercase
8. Array for special characters
9. Sum of numbers
10. Concatenation of all alphabetical characters present in the input in the reverse
    order in alternating caps

## Logic

Response should always contain “user_id” in the following format :
"user_id": {full_name_ddmmyyyy}
E.g.: "user_id”: "john_doe_17091999"
NOTE: Full name must be in lowercase
“is_success” should be returned in the response to mark the status of operation. It can
be true / false.
Be sure to follow other best practices and handle exceptions gracefully
