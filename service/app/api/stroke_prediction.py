from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
from sklearn.linear_model import LogisticRegression
import pickle
import os
import json

api = Flask(__name__)
cors = CORS(api)
api.config['CORS_HEADERS'] = 'Content-Type'

@api.route('/api/stroke_prediction', methods=["POST"])
@cross_origin()
def stroke_prediction():
  model = load_model()
  params = request.get_json()
  prediction = run_model(model, params)
  best_case = run_model(model, set_best_case(params))
  return jsonify({ 'prediction': prediction, 'best_case': best_case })

def load_model():
	this_folder = os.path.dirname(os.path.abspath(__file__))
	return pickle.load(open(os.path.join(this_folder, 'models/model.pkl'),'rb'))

def run_model(model, params):
  return model.predict_proba(pd.io.json.json_normalize(params)).tolist()

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
