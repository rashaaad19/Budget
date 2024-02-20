const Input = ({ label, id,className, ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} {...props} />
    </div>
  );
};

export default Input;
