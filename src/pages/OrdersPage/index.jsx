import OrdersFeed from '../../components/OrdersFeed';
import Button from '../../components/Button';
import { OrdersListContext } from "../../context/OrdersProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Orders=()=>{
    const { ordersList } = useContext(OrdersListContext);
   
    let navigate = useNavigate();
    const onBackToLandingClick=()=>{
        navigate("/");
    }

    return (
      <div>
        <h1> My orders</h1>
        <OrdersFeed ordersList={ordersList} />
        <Button handleOnClick={onBackToLandingClick} buttonName='Back to landing page'/>
      </div>
    );
}

export default Orders;


 