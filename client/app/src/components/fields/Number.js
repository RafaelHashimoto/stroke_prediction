
function Number({id, onChange}) {
  return (
    <div className="field">
      <input type="number" id={id} onChange={onChange}/>
    </div>
  );
}

export default Number;