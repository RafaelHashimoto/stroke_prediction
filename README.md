# Project Setup
### Docker Compose
If you have docker and docker-compose installed on your machine, simply run `docker-compose up` and you are ready to go

# API Endpoint

`POST /api/stroke_prediction`
# Request

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Response

```
{
  "prediction": "50",
  "best_case": "25",
}
```
