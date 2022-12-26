import "./BeerDetails.css";

const BeerDetails = ({
 name,
  image,
  id,
  clicked,
  setBeersDetails,
  beersDetails,
}) => {
  const handleBeerClick = (event) => {
    //  what would be a good naming for this?
    //  new array of beers upon one beer is clicked and its isClicked prop changes from true to false


    /*
{beerId: beer.beerId}

*/
    const newBeersArrayOnClick = beersDetails.map((beer) => {
      if (beer.beerId === id){
        return {
          beerId: beer.beerId,
          beerName: beer.beerName,
          beerImage: beer.beerImage,
          isClicked: !beer.isClicked,
        };
      }
      return {
        beerId: beer.beerId,
        beerName: beer.beerName,
        beerImage: beer.beerImage,
        isClicked: false,
      };
    });

    console.log("isClicked true", newBeersArrayOnClick);
    setBeersDetails(newBeersArrayOnClick);
  };
  return (
    <div className={`Beer-details-container ${clicked=== true ? "Beer-clicked" : ''} `}>
      <img
        src={image}
        alt={image}
        className="Beer-image"
        onClick={handleBeerClick}
      />
      <span>{name}</span>
    </div>
  );
};

export default BeerDetails;
