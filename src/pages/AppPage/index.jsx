import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Email from "../../components/Email";
import Description from "../../components/Description";
import "./App.css";
import SubmitButton from "../../components/SubmitButton";
import OrdersFeed from "../../components/OrdersFeed";

function App() {
  const [email, setEmail] = useState("");
  const [customerDescription, setCustomerDescription] = useState("");
  const [ordersList, setOrdersList] = useState([]);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onCustomerDescriptionChange = (event) => {
    setCustomerDescription(event.target.value);
  };

  const onSubmitOrderClick = () => {
    console.log("onsubmit");
    setOrdersList([
      ...ordersList,
      {
        id: uuidv4(),
        email: email,
        customerDescription: customerDescription,
      },
    ]);
    setEmail("");
    setCustomerDescription("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ORDER NOW <br /> our selection of punk beers
        </h1>
      </header>
      <Email email={email} handleEmailChange={onEmailChange} />
      <Description
        customerDescription={customerDescription}
        handleCustomerDescriptionChange={onCustomerDescriptionChange}
      />
      <SubmitButton handleSubmitOrderClick={onSubmitOrderClick} />
      <OrdersFeed ordersList={ordersList} />
    </div>
  );
}

export default App;
