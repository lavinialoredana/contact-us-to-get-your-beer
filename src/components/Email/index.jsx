const Email = ({ email, handleOnEmailChange }) => {
    console.log("email", email)
  return (
    <div className="email-container">
      <input
        type="text"
        label="E-mail"
        value={email}
        onChange={handleOnEmailChange}
      ></input>
    </div>
  );
};

export default Email;
