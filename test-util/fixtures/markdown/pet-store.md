# Swagger Petstore, version 1.0.0
Base URL: http://petstore.swagger.io/api

## Contact
Swagger API Team (http://swagger.io)

## Endpoints

#### `GET /pets`
finds pets in the system

**Tags**
- Pet Operations

##### Response: `200`
pet response

**Headers**
- `x-expires` (string)

**Schema**

- (array)
  - Pet (object)
    - id (integer, int64)
    - name (string)
    - tag (string) (optional)


##### Response: `default`
unexpected error

**Schema**

- (object)
  - code (integer, int64)
  - message (string)

## Definitions

### Pet

**Schema**

- (object)
  - id (integer, int64)
  - name (string)
  - tag (string) (optional)
