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
    //  QUESTION 1: what would be a good naming for this?
    //  new array of beers upon one beer is clicked and its isClicked prop changes from true to false

    const newBeersArrayOnClick = beersDetails.map((beer) => {
      if (beer.beerId === id){
        beer.isClicked = !beer.isClicked;
        return beer;
      } 

      beer.isClicked= false; 
      return beer;
    });

    setBeersDetails(newBeersArrayOnClick);
    console.log("isClicked true", newBeersArrayOnClick);
  };
  return (
    <div className={`Beer-details-container ${clicked ? "Beer-clicked" : ''} `}>
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
