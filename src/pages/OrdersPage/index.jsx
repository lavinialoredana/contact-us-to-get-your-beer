import OrdersFeed from '../../components/OrdersFeed'
import { OrdersListContext } from "../../context/OrdersProvider";
import { useContext } from "react";

const Orders=()=>{
    const { ordersList } = useContext(OrdersListContext);
    return (
      <div>
        <h1> My orders</h1>
        <OrdersFeed ordersList={ordersList} />
      </div>
    );
}

export default Orders;