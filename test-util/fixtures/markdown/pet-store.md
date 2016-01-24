# Swagger Petstore, version 1.0.0
Base URL: http://petstore.swagger.io/api

## Contact
Swagger API Team (http://swagger.io)

## License
Creative Commons 4.0 International: http://creativecommons.org/licenses/by/4.0/

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

| Name | Type | Required |
| --- | --- | --- |
| - | array | Yes |
| . | object | Yes |
| .id | integer (int64) | Yes |
| .name | string | Yes |
| .tag | string | No |


##### Response: `default`
unexpected error

**Schema**

| Name | Type | Required |
| --- | --- | --- |
| - | object | Yes |
| code | integer (int62) | Yes |
| message | string | Yes |
