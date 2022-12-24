import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Email from "../../components/Email";
import Description from "../../components/Description";
import "./App.css";
import SubmitButton from "../../components/SubmitButton";
import OrdersFeed from "../../components/OrdersFeed";
import Axios from "axios";
import BeerDetails from "../../components/BeerDetails";

function App() {
  const [email, setEmail] = useState("");
  const [customerDescription, setCustomerDescription] = useState("");
  const [ordersList, setOrdersList] = useState([]);
  const [beersDetails, setBeersDetails] = useState([]);

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

  // useCallback it's a fn that we use when we want our fn to be created only once
    const fetchBeers= useCallback( async ()=>{
      const response = await Axios.get(
        "https://api.punkapi.com/v2/beers?page=1&per_page=4"
      );
  
       const beersArray = response.data.map(beer=>{
        return {
          beerId:beer.id,
          beerName:beer.name,
          beerImage: beer.image_url
        };
       });
      setBeersDetails(beersArray);
    }, []);
  
    // useEffect it's a fn that we use to wrap inside code that we want to execute only once
    // it's mostly used with fetch data

    useEffect(()=>{
       fetchBeers();
    }, []);
   

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ORDER NOW <br /> our selection of punk beers
        </h1>
      </header>
      {
        beersDetails.map(beer =>{
          return <BeerDetails 
          key={beer.beerId}
          beerName={beer.beerName}
          beerImage={beer.beerImage}
          />;
        })
      }
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
