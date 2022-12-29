import { useCallback, useEffect, useState } from "react";
import Axios from "axios";

const useFetch=(url)=>{
  // useCallback it's a fn that we use when we want our fn to be created only once
  const [beersDetails, setBeersDetails] = useState([]);

  const fetchBeers = useCallback(async () => {
    const response = await Axios.get(url);

    const beersArray = response.data.map((beer) => {
      return {
        beerId: beer.id,
        beerName: beer.name,
        beerImage: beer.image_url,
        isClicked: false,
      };
    });
    setBeersDetails(beersArray);
  }, []);

  // useEffect it's a fn that we use to wrap inside code that we want to execute only once
  // it's mostly used with fetch data

  useEffect(() => {
    fetchBeers();
  }, []);

  //  QUESTION 3: I read that you can not pass the setter to a hook; 
  //  what other options do I have?
  
  return [beersDetails, setBeersDetails];
}

export default useFetch;
