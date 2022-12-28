const OrderDetails = ({
  email,
  customerDescription,
  orderedBeerImage,
  orderedBeerName,
}) => {
  return (
    <div className="order-details-container">
      <ul>
        <li>
          <img src={orderedBeerImage} alt="ordered-beer" />
          <span> {orderedBeerName}</span>
          <span> {email} </span>
          {customerDescription}
        </li>
      </ul>
    </div>
  );
};

export default OrderDetails;
