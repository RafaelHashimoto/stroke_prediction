import { useState } from 'react';
import SweetAlert from 'sweetalert2-react';
import { Radio, GroupField, Number, Select } from '../fields';
import api from '../../service/api'

const styles = {
  form: { padding: '20px 15px', marginBottom: '20px', background: '#fff' }
}

function MasterForm() {
  const [showAlert, setShowAlert] = useState(false)
  const [loading, setLoading] = useState(false);
  const [strokeResult, setStrokeResult] = useState(0);
  const [gender, setGender] = useState(0);
  const [hypertension, setHypertension] = useState(0);
  const [heartDisease, setHeartDisease] = useState(0);
  const [everMarried, setEverMarried] = useState(0);
  const [residenceType, setResidenceType] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [glucoseLevel, setGlucoseLevel] = useState(0);
  const [smokingStatus, setSmokingStatus] = useState({formely_smoked: 0, never_smoked: 1, smokes: 0, unkown: 0});
  const [workType, setWorkType] = useState({children: 0, govt_job: 0, never_worked: 1, private: 0, self_employed: 0});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      'gender': gender,
      'hypertension': hypertension,
      'heart_disease': heartDisease,
      'ever_married': everMarried,
      'residence_type': residenceType,
      'work_type_children': workType['children'],
      'work_type_govt_job': workType['govt_job'],
      'work_type_never_worked': workType['never_worked'],
      'work_type_private': workType['private'],
      'work_type_self_employed': workType['self_employed'],
      'smoking_status_formerly_smoked': smokingStatus['formely_smoked'],
      'smoking_status_never_smoked': smokingStatus['never_smoked'],
      'smoking_status_smokes': smokingStatus['smokes'],
      'smoking_status_unknown': smokingStatus['unkown'],
      'avg_glucose_level': glucoseLevel,
      'bmi': bmi,
      'age': age
    }

    console.log(data)
    setLoading(true)
    api.post('stroke_prediction', data)
      .then((result) => {
        setLoading(false)
        setShowAlert(true)
        console.log(result)
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)
      })
  }

  const handleWorkType = ({target: { value } }) => {
    let newWorkType = {children: 0, govt_job: 0, never_worked: 0, private: 0, self_employed: 0};
    newWorkType[value] = 1;
    setWorkType(newWorkType);
  }

  const handleSmokingStatus = ({target: { value } }) => {
    let newSmokingStatus = {formely_smoked: 0, never_smoked: 0, smokes: 0, unkown: 0}
    newSmokingStatus[value] = 1;
    setSmokingStatus(newSmokingStatus);
  }

  return (
    <>
      <SweetAlert
        show={showAlert}
        title="Resultado"
        text={`${strokeResult}% de chance de ter AVC`}
        onConfirm={() => setShowAlert(false)}
      />
      <form className={`ui form ${loading ? 'loading': ''}`} style={styles.form} onSubmit={handleSubmit}>
        <h4 className="ui dividing header">Previsão de AVC</h4>
        <div className="fields">
          <GroupField label="Qual a sua idade?">
              <Number id="age" defaultValue={age} onChange={(event) => setAge(parseInt(event.target.value))} />
          </GroupField>
          <GroupField label="Qual o seu IMC?">
            <Number id="bmi" defaultValue={bmi} onChange={(event) => setBmi(parseInt(event.target.value))} />
          </GroupField>
          <GroupField label="Qual o nível médio de glicose no sangue?">
            <Number id="glucoseLevel" defaultValue={glucoseLevel} onChange={(event) => setGlucoseLevel(parseInt(event.target.value))} />
          </GroupField>
        </div> 

        <div className="fields">
          <GroupField label="Você é ou já foi fumante?">
            <Select 
              onChange={handleSmokingStatus}
              options={[
                { label:'Nunca fumei', value: 'never_smoked' },
                { label:'Já fui fumante', value: 'formely_smoked' },
                { label:'Sou Fumante', value: 'smokes' },
              ]}
            />
          </GroupField>

          <GroupField label="Qual o seu tipo de trabalho?">
            <Select
              onChange={handleWorkType}
              options={[
                { label:'Nunca Trabalhei', value: 'never_worked' },
                { label:'Trabalho com crianças', value: 'children' },
                { label:'Setor Público', value: 'govt_job' },
                { label:'Setor Privado', value: 'private' },
                { label:'Autonomo', value: 'self_employed' },
              ]}
            />
          </GroupField>
        </div>
        <GroupField label="Sexo">
          <Radio
            id="male"
            label="Masculino"
            checked={gender === 1}
            onChange={() => setGender(1)}
          />
          <Radio
            id="female"
            label="Feminino"
            checked={gender === 0}
            onChange={() => setGender(0)}
          />
        </GroupField>
        <GroupField label="É ou já foi casado?">
          <Radio
            id="maried"
            label="Sim"
            checked={everMarried === 1}
            onChange={() => setEverMarried(1)}
          />
          <Radio
            id="neverMaried"
            label="Não"
            checked={everMarried === 0}
            onChange={() => setEverMarried(0)}
          />
        </GroupField>
        <GroupField label="Reside em área urbana?">
          <Radio
            id="urban"
            label="Sim"
            checked={residenceType === 1}
            onChange={() => setResidenceType(1)}
          />
          <Radio
            id="rural"
            label="Não"
            checked={residenceType === 0}
            onChange={() => setResidenceType(0)}
          />
        </GroupField>
        
        <GroupField label="Hipertenso">
          <Radio
            id="hypertension"
            label="Sim"
            checked={hypertension === 1}
            onChange={() => setHypertension(1)}
          />
          <Radio
            id="no_hypertension"
            label="Não"
            checked={hypertension === 0}
            onChange={() => setHypertension(0)}
          />
        </GroupField>
        <GroupField label="Doente cardiaco">
          <Radio
            id="heartDisease"
            label="Sim"
            checked={heartDisease === 1}
            onChange={() => setHeartDisease(1)}
          />
          <Radio
            id="no_heartDisease"
            label="Não"
            checked={heartDisease === 0}
            onChange={() => setHeartDisease(0)}
          />
        </GroupField>

        <button type="submit" className="ui primary button">Enviar</button>
      </form>
    </>
  );
}

export default MasterForm;