import { useState } from 'react';
import { Radio, GroupField, Number } from '../fields';

function MasterForm() {
  const [gender, setGender] = useState(0);
  const [hypertension, setHypertension] = useState(0);
  const [heartDisease, setHeartDisease] = useState(0);
  const [everMarried, setEverMarried] = useState(0);
  const [residenceType, setResidenceType] = useState();
  const [age, setAge] = useState();
  const [bmi, setBmi] = useState();
  const [glucoseLevel, setGlucoseLevel] = useState();
  const [smokingStatus, setSmokingStatus] = useState({formely_smoked: 0, never_smoked: 0, smokes: 0, unkown: 0});
  const [workType, setWorkType] = useState({children: 0, govt_job: 0, never_worked: 0, private: 0, self_employed: 0});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      gender,
      hypertension,
      heartDisease,
      everMarried,
      residenceType,
      age,
      bmi,
      glucoseLevel,
      smokingStatus,
      workType
    }
    console.log(data)
  }

  const handleWorkType = (selectedWorkType) => {
    // let newWorkType = Object.keys(workType).forEach( function (key) { workType[key] = 0 });
    // newWorkType[selectedWorkType] = 1
    // setWorkType(newWorkType)
  }

  const handleSmokingStatus = (selectedSmokingStatus) => {
    // let newSmokingStatus = Object.keys(smokingStatus).forEach( function (key) { smokingStatus[key] = 0 });
    // newSmokingStatus[selectedSmokingStatus] = 1
    // setSmokingStatus(newWorkType)
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <GroupField label="Qual a sua idade?">
        <Number id="age" onChange={(value) => setAge(value)} />
      </GroupField>
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
      <GroupField label="Qual o seu IMC?">
        <Number id="bmi" onChange={(value) => setBmi(value)} />
      </GroupField>
      <GroupField label="Qual o nível médio de glicose no sangue?">
        <Number id="glucoseLevel" onChange={(value) => setGlucoseLevel(value)} />
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

      <GroupField label="Você é ou já foi fumante?">
        <Radio
          id="formelySmoked"
          label="Já fui fumante"
          checked={smokingStatus['formely_smoked'] === 1}
          onChange={() => setHeartDisease(1)}
          />
        <Radio
          id="neverSmoked"
          label="Nunca fumeu"
          checked={smokingStatus['never_smoked'] === 1}
          onChange={() => setHeartDisease(0)}
          />
        <Radio
          id="smokes"
          label="Sou Fumante"
          checked={smokingStatus['smokes'] === 1}
          onChange={() => setHeartDisease(0)}
          />
      </GroupField>

      <GroupField label="Qual o seu tipo de trabalho?">
        <Radio
          id="children"
          label="Trabalho com crianças"
          checked={workType['formely_smoked'] === 1}
          onChange={() => setHeartDisease(1)}
        />
        <Radio
          id="govtJob"
          label="Setor Público"
          checked={workType['govt_job'] === 1}
          onChange={() => setHeartDisease(0)}
        />
        <Radio
          id="private"
          label="Setor Privado"
          checked={workType['private'] === 1}
          onChange={() => setHeartDisease(0)}
        />
        <Radio
          id="selfEmployed"
          label="Autonomo"
          checked={workType['self_employed'] === 1}
          onChange={() => setHeartDisease(0)}
        />
        <Radio
          id="neverWorked"
          label="Nunca Trabalhei"
          checked={workType['never_worked'] === 1}
          onChange={() => setHeartDisease(0)}
        />
      </GroupField>

      <button type="submit" className="ui submit button">Enviar</button>
    </form>
  );
}

export default MasterForm;