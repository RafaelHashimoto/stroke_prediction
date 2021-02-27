
function Select({options, onChange}) {
  return (
    <select className="ui dropdown" onChange={onChange}>
      {options && options.map((option) => 
        <option key={option.value} value={option.value}>{option.label}</option>
      )}
    </select>
  );
}

export default Select;