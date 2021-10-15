import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sold } from "../../actions/soldStatusActions";
import { Book, BookName, BookImg, BookInfo } from "./Home";
const Soldstatus = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(sold("6166b2fba18545cd06feaffe"));
  }, [dispatch]);
  return (
    <>
      <Section>
        <Book>
          <BookImg src="https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"></BookImg>
          <BookName>Harry Potter</BookName>
          <BookInfo>Bought by: Mr.x</BookInfo>
          <BookInfo>$20</BookInfo>
        </Book>
        <StatusInfo>
          <h3>Update Status:</h3>
          <select>
            <option value="Accepted"></option>
            <option value="Denied"></option>
            <option value="Delivered"></option>
          </select>
          <br />
          Current Status:
          <Status>Accepted</Status>
          <StatusSubmitbtn>Submit</StatusSubmitbtn>
        </StatusInfo>
      </Section>
    </>
  );
};
const Section = styled.div`
  width: 30vw;
  height: 40vh;
  margin: auto;
`;
const StatusInfo = styled.div``;
const Status = styled.p`
  color: purple;
`;
const StatusSubmitbtn = styled.button`
  padding: 10px;
  background: orange;
  color: #ffff;
  border: none;
  border-radius: 10px;
`;
export default Soldstatus;
