import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sold } from "../../actions/soldStatusActions";
import { Book, BookName, BookImg, BookInfo } from "./Home";
const Soldstatus = () => {
  let location = useLocation();
  let book = location.state;
  const { soldStatus } = useSelector((state) => state.soldStatus);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(sold(book._id));
  }, [dispatch]);
  return (
    <>
      <Section>
        <Book>
          <BookImg src={book.img.url}></BookImg>
          <BookName>{book.name}</BookName>
          <BookInfo>
            Bought by:
            {soldStatus.length > 0 ? soldStatus.boughtBy : "None"}
          </BookInfo>
          <BookInfo>$ {book.price}</BookInfo>
        </Book>
        {soldStatus.length > 0 ? (
          <StatusInfo>
            <h3>Update Status:</h3>
            <select>
              <option value="Accepted">Accepted</option>
              <option value="Denied">Denied</option>
              <option value="Dispatched">Dispatched</option>
              <option value="Delivered">Delivered</option>
            </select>
            <br />
            Current Status:
            <Status>Accepted</Status>
            <StatusSubmitbtn>Submit</StatusSubmitbtn>
          </StatusInfo>
        ) : (
          ""
        )}
      </Section>
    </>
  );
};
const Section = styled.div`
  width: 30vw;
  height: 40vh;
  margin: auto;
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
`;
const StatusInfo = styled.div``;
const Status = styled.p`
  color: #001b48;
`;
const StatusSubmitbtn = styled.button`
  padding: 10px;
  background: orange;
  color: #ffff;
  border: none;
  border-radius: 10px;
`;
export default Soldstatus;
