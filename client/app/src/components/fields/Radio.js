
function Radio({id, label, checked, onChange}) {
  return (
    <div className="field">
      <div className="ui radio checkbox">
        <input type="radio" id={id} checked={checked} onChange={onChange}/>
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}

export default Radio;