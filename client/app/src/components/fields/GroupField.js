
function GroupField({ label, children }) {
  return (
    <div className="field">
      <label>{label}:</label>
      {children}
    </div>
  );
}

export default GroupField;