const SubmitButton = ({ handleSubmitOrderClick}) => {
  return (
    <div className="submit-button-container">
      <button onClick={handleSubmitOrderClick}>Submit order</button>
    </div>
  );
};

export default SubmitButton;
