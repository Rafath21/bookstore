import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { myOrders } from "../../actions/myOrdersActions";
import { useEffect } from "react";
const Orders = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(myOrders("bushra"));
  }, []);
  return (
    <>
      <Container>
        <Heading>Your Orders</Heading>
        <Items>
          <Item>
            <ItemImg src="https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"></ItemImg>
            <ItemName>Harry Potter</ItemName>
            <ItemInfo>Sold by: Mr.x</ItemInfo>
            <ItemInfo>$20</ItemInfo>
            <OrderStatus denied={false}>Order Accepted</OrderStatus>
          </Item>
        </Items>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: underline;
`;
const Items = styled.div`
  flex-grow: 0.8;
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding: 5px;
  border-bottom: 2px solid orange;
`;
const ItemImg = styled.img`
  max-height: 10%;
  max-width: 17%;
`;
const ItemInfo = styled.p``;
const ItemName = styled.p`
  color: purple;
`;
const OrderStatus = styled.div`
  padding: 15px;
  color: ${(props) => (props.denied ? "Red" : "Green")};
`;
export default Orders;
