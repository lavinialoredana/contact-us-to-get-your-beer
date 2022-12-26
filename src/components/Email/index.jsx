const Email = ({ email, handleEmailChange }) => {
  console.log("email", email);
  return (
    <div className="email-container">
      <input
        type="text"
        label="E-mail"
        placeholder="E-mail"
        value={email}
        onChange={handleEmailChange}
      ></input>
    </div>
  );
};

export default Email;
