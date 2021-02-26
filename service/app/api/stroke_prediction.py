from flask import Flask, request, jsonify
import pandas as pd
from sklearn.linear_model import LogisticRegression
import pickle
import os
import json

api = Flask(__name__)

@api.route('/api/stroke_prediction', methods=["POST"])
def stroke_prediction():
  model = load_model()
  params = request.get_json()
  prediction = run_model(model, params)
  best_case = run_model(model, set_best_case(params))
  return jsonify({ 'prediction': prediction, 'best_case': best_case })

def load_model():
	this_folder = os.path.dirname(os.path.abspath(__file__))
	return pickle.load(open(os.path.join(this_folder, 'machine_learning_models/logistic_model.pkl'),'rb'))

def run_model(model, params):
  return model.predict(pd.io.json.json_normalize(params)).toList()

def set_best_case(params):
    best_case_params = params
    best_case_params['hypertension'] = 0

    best_case_params['smoking_status_never_smoked'] = 1
    best_case_params['smoking_status_unknown'] = 0
    best_case_params['smoking_status_formerly_smoked'] = 0
    best_case_params['smoking_status_smokes'] = 0

    best_case_params['bmi'] = 20

    best_case_params['heart_disease'] = 0

    best_case_params['avg_glucose_level'] = 90
    return best_case_params
