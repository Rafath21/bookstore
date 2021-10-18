import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { myOrders } from "../../actions/myOrdersActions";
import { useEffect } from "react";

const Orders = () => {
  let dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.orders);
  let paid = true;
  useEffect(() => {
    dispatch(myOrders(user.username));
  }, []);
  return (
    <>
      <Container>
        <Heading>Your Orders</Heading>
        <Items>
          {orders.length > 0
            ? orders.map((order) => {
                return (
                  <Item>
                    <ItemImg src={order.book.img.url}></ItemImg>
                    <ItemName>{order.book.name}</ItemName>
                    <Soldby>Sold by:</Soldby>
                    <ItemInfo>{order.book.soldby} </ItemInfo>
                    <ItemInfo>$ {order.book.price}</ItemInfo>
                    <OrderStatus>
                      {order.OrderStatus == "Denied" ? (
                        <OrderDenied>
                          <ItemInfo>Order Accepted</ItemInfo>
                        </OrderDenied>
                      ) : (
                        <OrderPlaced>
                          <ItemInfo>{order.OrderStatus}</ItemInfo>
                        </OrderPlaced>
                      )}
                      <PaymentInfo>
                        {paid ? <Paid>Paid</Paid> : <Paynow>Pay now</Paynow>}
                      </PaymentInfo>
                    </OrderStatus>
                  </Item>
                );
              })
            : ""}
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
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
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
  width: 50vw;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding: 5px;
  border-bottom: 2px solid orange;
`;
export const Soldby = styled.p`
  font-weight: bold;
`;
export const ItemImg = styled.img`
  max-height: 10%;
  max-width: 17%;
`;
export const ItemInfo = styled.p``;
export const ItemName = styled.p`
  color: #001b48;
`;

const OrderPlaced = styled.div`
  background: #90d790a6;
  padding: 3px;
  border-radius: 15px;
  color: #1d5c5c;
  border: 2px solid #47976a;
  font-size: 0.8rem;
`;
const OrderDenied = styled.div`
  background: #f38787;
  padding: 3px;
  border-radius: 15px;
  color: #800000;
  border: 2px solid red;
  font-size: 0.8rem;
`;
const PaymentInfo = styled.button`
  width: 60%;
  background: #87cbf3;
  padding: 1px;
  text-align: center;
  border-radius: 10px;
  color: #001b48;
  border: 2px solid #6c8ff1;
  height: 10%;
  margin-top: 5px;
  margin-left: 16px;
`;
const Paid = styled.p``;
const Paynow = styled.p``;

const OrderStatus = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Orders;
