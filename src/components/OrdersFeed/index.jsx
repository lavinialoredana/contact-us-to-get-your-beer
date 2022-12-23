const OrdersFeed = ({ ordersList }) => {
  return ordersList.map((order) => {
    return (
      <div className="order-details-container" key={order.id}>
        <ul>
          <li>
            <span> {order.email} </span>
            {order.customerDescription}
          </li>
        </ul>
      </div>
    );
  });
};

export default OrdersFeed;
