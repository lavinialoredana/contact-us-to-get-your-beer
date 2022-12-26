import BeerDetailsCss from './BeerDetails.css';

const BeerDetails = ({ beerName, beerImage }) => {
  return (
    <div className="Beer-details-container" >
      <img src={beerImage} alt={beerImage} className="Beer-image"/>
      <span>{beerName}</span>
    </div>
  );
};

export default BeerDetails;