import "./App.css";
import { useNavigate } from "react-router-dom";
import { OrdersListContext } from "../../context/OrdersProvider";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Email from "../../components/Email";
import Description from "../../components/Description";
import "./App.css";
import Button from "../../components/Button";
import BeerDetails from "../../components/BeerDetails";
import useFetch from "../../Hooks/useFetch";

function App() {
  const [email, setEmail] = useState("");
  const [customerDescription, setCustomerDescription] = useState("");
  
    const [beersDetails, setBeersDetails] = useFetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=4"
    );


  const { refreshOrdersList } = useContext(OrdersListContext);

  let navigate = useNavigate();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onCustomerDescriptionChange = (event) => {
    setCustomerDescription(event.target.value);
  };

  const onSubmitOrderClick = () => {
    const orderedBeer = beersDetails.find((beer) => beer.isClicked === true);
    if (orderedBeer === undefined || email === "") {
      alert("You need to choose your beer and insert your email!");
    } else {
      refreshOrdersList({
        id: uuidv4(),
        email: email,
        customerDescription: customerDescription,
        orderedBeer: orderedBeer,
      });
      setEmail("");
      setCustomerDescription("");
      // QUESTION 2: I managed to change the state of the beerDetails (orderedBeer) from isClicked= true to false; How bad is this given that
      // the theory says you have to do it via the setState.
      orderedBeer.isClicked = false;
      navigate("/orders");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ORDER NOW <br /> our selection of punk beers
        </h1>
      </header>
      <div className="Beers-container">
        {beersDetails.map((beer) => {
          return (
            <BeerDetails
              key={beer.beerId}
              id={beer.beerId}
              name={beer.beerName}
              image={beer.beerImage}
              clicked={beer.isClicked}
              setBeersDetails={setBeersDetails}
              beersDetails={beersDetails}
            />
          );
        })}
      </div>
      <Email email={email} handleEmailChange={onEmailChange} />
      <Description
        customerDescription={customerDescription}
        handleCustomerDescriptionChange={onCustomerDescriptionChange}
      />
      <Button handleOnClick={onSubmitOrderClick} buttonName = "Submit Order"/>
    </div>
  );
}

export default App;
