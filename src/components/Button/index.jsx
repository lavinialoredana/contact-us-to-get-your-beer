const Button = ({ handleOnClick, buttonName}) => {
  return (
    <div className="button-container">
      <button onClick={handleOnClick}>{buttonName}</button>
    </div>
  );
};

export default Button;
