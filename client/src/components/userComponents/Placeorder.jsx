import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../../actions/placeOrderActions";

const Placeorder = () => {
  let dispatch = useDispatch();
  const { loading, error, orderPlaced } = useSelector(
    (state) => state.orderPlaced
  );
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState(Number);
  const [phone, setPhone] = useState(Number);
  const [city, setCity] = useState("");
  let location = useLocation();
  let history = useHistory();
  let bookid = location.state.bookid;
  let state = location.state;

  const order = () => {
    const shippingInfo = {
      address,
      pincode,
      phone,
      city,
    };
    dispatch(placeOrder(user.username, bookid, shippingInfo));
  };
  useEffect(() => {
    if (orderPlaced) {
      history.push("/");
    } else {
      alert("couldn't place order");
    }
  }, [orderPlaced]);
  return (
    <>
      <Wrapper>
        <BookSection>
          <h2>BOOK INFO:</h2>
          <Img src="https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"></Img>
          <BookInfo>{state.bookname}</BookInfo>
          <BookInfo>Sold by: {state.booksoldby}</BookInfo>
          <BookInfo>{`$${state.bookprice}`}</BookInfo>
        </BookSection>
        <ShippingInfo>
          <h2>SHIPPING INFO:</h2>
          <Info>
            <h4>Address:</h4>
            <Input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></Input>
          </Info>
          <Info>
            <h4>Pincode:</h4>
            <Input
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            ></Input>
          </Info>
          <Info>
            <h4>Phone:</h4>
            <Input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></Input>
          </Info>
          <Info>
            <h4>City:</h4>
            <Input
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></Input>
          </Info>
        </ShippingInfo>
        <PaymentInfo></PaymentInfo>
        <PlaceOrder onClick={order}>Place Order</PlaceOrder>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
`;
const BookSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const ShippingInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 51%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  max-width: 12%;
`;
const BookInfo = styled.p`
  font-size: 1.2rem;
  margin-top: 2px;
`;
const Input = styled.input`
  padding: 12px;
  border: none;
  border-bottom: 2px solid purple;
  &:focus {
    outline: none;
  }
`;

const PaymentInfo = styled.div``;
const PlaceOrder = styled.button`
  padding: 20px;
  margin: 11%;
  border-radius: 10px;
  background: orange;
  color: white;
  border: none;
`;
export default Placeorder;
