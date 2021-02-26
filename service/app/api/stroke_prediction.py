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
  # df = pd.io.json.json_normalize(request)
  # prediction = model.predict(df).tolist()
  return jsonify(
            {
                'prediction': params,
                'best_case': set_best_case(params)
            }
         )

def load_model():
	this_folder = os.path.dirname(os.path.abspath(__file__))
	return pickle.load(open(os.path.join(this_folder, 'machine_learning_models/logistic_model.pkl'),'rb'))

def set_best_case(params):
    best_case_params = params
    best_case_params['hypertension'] = 0

    best_case_params['never_smoked'] = 1
    best_case_params['unknown'] = 0
    best_case_params['formerly_smoked'] = 0
    best_case_params['never_smoked'] = 0
    best_case_params['smokes'] = 0

    best_case_params['bmi'] = 20

    best_case_params['heart_disease'] = 0

    best_case_params['avg_glucose_level'] = 90
    return best_case_params
