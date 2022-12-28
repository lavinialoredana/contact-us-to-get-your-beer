import OrderDetails from "../Order";

const OrdersFeed = ({ ordersList }) => {
  return ordersList.map((order) => {
    console.log("order", order)
    return (
      <OrderDetails
        key={order.id}
        email={order.email}
        customerDescription={order.customerDescription}
        orderedBeerImage={order.orderedBeer.beerImage}
        orderedBeerName={order.orderedBeer.beerName}
      />
    );;
  });
};

export default OrdersFeed;
