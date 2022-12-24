const OrderDetails = ({ email, customerDescription }) => {
  return (
    <div className="order-details-container">
      <ul>
        <li>
          <span> {email} </span>
          {customerDescription}
        </li>
      </ul>
    </div>
  );
};

export default OrderDetails;
