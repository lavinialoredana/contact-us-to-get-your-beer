import Axios from "axios";

const fetchBeers = async (url, callBackFunction) => {
  const response = await Axios.get(url);

  const beersArray = response.data.map((beer) => {
    return {
      beerId: beer.id,
      beerName: beer.name,
      beerImage: beer.image_url,
      isClicked: false,
    };
  });
  callBackFunction(beersArray);
}

export default fetchBeers;
