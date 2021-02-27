import { useState } from 'react';
import { Radio, GroupField } from '../fields';

function MasterForm() {
  const [gender, setGender] = useState(0);
  const [hypertension, setHypertension] = useState(0);
  const [heartDisease, setHeartDisease] = useState(0);
  // const [everMarried, setEverMarried] = useState();
  // const [residenceType, setResidenceType] = useState();
  // const [smokingStatus, setSmokingStatus] = useState();
  // const [age, setAge] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      gender,
      hypertension,
      heartDisease
    } 
    console.log(data)
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
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
      <button type="submit" className="ui submit button">Enviar</button>
    </form>
  );
}

export default MasterForm;