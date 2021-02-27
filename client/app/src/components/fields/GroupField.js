
function GroupField({ label, children }) {
  return (
    <div className="grouped fields">
      <label>{label}:</label>
      {children}
    </div>
  );
}

export default GroupField;