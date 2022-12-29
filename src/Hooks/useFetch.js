import {  useEffect, useState } from "react";
import fetchBeers from "../services/beerService";


const useFetch=(url)=>{
  // useCallback it's a fn that we use when we want our fn to be created only once
  const [beersDetails, setBeersDetails] = useState([]);

  

  // useEffect it's a fn that we use to wrap inside code that we want to execute only once
  // it's mostly used with fetch data

  useEffect(() => {
    const fetchData = async()=>{
      await fetchBeers(url, setBeersDetails);
    }
    fetchData();
  }, []);

  //  QUESTION 3: I read that you can not pass the setter to a hook; 
  //  what other options do I have?

  return [beersDetails, setBeersDetails];
}

export default useFetch;
