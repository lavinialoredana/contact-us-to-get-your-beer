const BeerDetails = ({ beerName, beerImage }) => {
  return (
    <div className="beer-details-container" >
      <span>{beerName}</span>
      <img src={beerImage} alt={beerImage}/>
    </div>
  );
};

export default BeerDetails;