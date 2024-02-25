const Icon = ({ icon, className, handleOnClick }) => {
  return (
    <div className={className} onClick={handleOnClick}>
      {icon}
    </div>
  );
};

export default Icon;
