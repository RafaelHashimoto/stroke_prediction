# Project Setup
### Docker Compose
If you have docker and docker-compose installed on your machine,
simply run `docker-compose up` and you are ready to go

# API Endpoint

`POST /api/stroke_prediction`
# Request

```
{
  "gender": 1,
  "hypertension": 1,
  "heart_disease": 1,
  "ever_married": 1,
  "residence_type": 1,
  "work_type_children": 0,
  "work_type_govt_job": 1,
  "work_type_never_worked": 0,
  "work_type_private": 0,
  "work_type_self_employed": 0,
  "smoking_status_formerly_smoked": 0,
  "smoking_status_never_smoked": 1,
  "smoking_status_smokes": 0,
  "smoking_status_unknown": 0,
  "avg_glucose_level": 100,
  "bmi": 23,
  "age": 50
}
```

### Response

```
{
  "prediction": ["50"],
  "best_case": ["25"],
}
```
