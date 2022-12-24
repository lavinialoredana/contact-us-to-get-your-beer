import OrderDetails from "../Order";

const OrdersFeed = ({ ordersList }) => {
  return ordersList.map((order) => {
    return <OrderDetails 
    key={order.id}
    email= {order.email}
    customerDescription={order.customerDescription} />;
  });
};

export default OrdersFeed;
