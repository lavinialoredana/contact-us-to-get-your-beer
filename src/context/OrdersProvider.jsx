import { createContext, useState } from "react";

export const OrdersListContext = createContext();

const OrdersProvider = (props) => {
 const [ordersList, setOrdersList] = useState([]);

 const refreshOrdersList=(newOrder)=>{
    setOrdersList([...ordersList, newOrder])
 }

  return (
    <OrdersListContext.Provider value={{ ordersList, refreshOrdersList }}>
      {props.children}
    </OrdersListContext.Provider>
  );
};

export default OrdersProvider;
