const Select = ({ label, id, options, className, ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <select {...props}>
        {options.map((option) => (
          <option key={option.id}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
