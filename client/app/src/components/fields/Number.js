
function Number({defaultValue, id, onChange}) {
  return (
    <div className="field">
      <input type="number" min="0" defaultValue={defaultValue} id={id} onChange={onChange}/>
    </div>
  );
}

export default Number;