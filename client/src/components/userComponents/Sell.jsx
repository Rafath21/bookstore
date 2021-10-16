import React from "react";
import styled from "styled-components";
import { Books, Book, BookImg, BookName, BookInfo, Nobooks } from "./Home";
import {
  HomeContainer as SellContainer,
  BuynowBtn as ShowStatusBtn,
} from "./Home";
import { getSoldBooks, sellBook } from "../../actions/sellActions";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Sell = ({ history }) => {
  const dispatch = useDispatch();
  const [sellBoxOpen, setsellBoxOpen] = useState(false);
  let [bookname, setBookname] = useState("");
  let [price, setPrice] = useState("");
  let [cardno, setCardno] = useState(Number);
  const [bookPreview, setBookPreview] = useState("/DefBook.png");
  const [bookImg, setBookImg] = useState("");
  let [shipsTo, setShipsTo] = useState("");
  const { loading, error, soldBooks } = useSelector((state) => state.soldBooks);
  const { result } = useSelector((state) => state.result);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getSoldBooks(user._id));
  }, [dispatch]);
  useEffect(() => {
    if (!isAuthenticated) {
      alert("Please login!");
    }
  }, [history, isAuthenticated]);
  const updateBookImg = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setBookPreview(reader.result);
        setBookImg(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  const sell = (e) => {
    dispatch(sellBook(user._id, bookname, price, bookImg, shipsTo, cardno));
    setsellBoxOpen(false);
  };
  console.log("sold books:", soldBooks);
  return (
    <>
      <SellContainer>
        <Header>
          <Heading>Your Books</Heading>
          <SellnowBtn
            onClick={() => {
              setsellBoxOpen(true);
            }}
          >
            Sell now
          </SellnowBtn>
        </Header>
        <Books>
          {soldBooks.length > 0 ? (
            soldBooks.map((book) => {
              return (
                <Book>
                  <BookImg src={book.img.url}></BookImg>
                  <BookName>{book.name}</BookName>
                  <BookInfo>Sold by:{book.soldby}</BookInfo>
                  <BookInfo>{book.price}</BookInfo>
                  <BookSt>{book.bookStatus.toUpperCase()}</BookSt>
                  <ShowStatusBtn>Update Status</ShowStatusBtn>
                </Book>
              );
            })
          ) : (
            <h3>No Books Sold Yet!</h3>
          )}
        </Books>
      </SellContainer>
      {sellBoxOpen ? (
        <SellBox>
          <>
            <Icon
              onClick={() => {
                setsellBoxOpen(false);
              }}
            >
              <i class="fas fa-window-close"></i>
            </Icon>
            <SellImg src={bookPreview}></SellImg>
            <InputImg
              type="file"
              accept="image/*"
              onChange={updateBookImg}
            ></InputImg>
          </>
          <Field>Book Name:</Field>
          <input
            type="text"
            onChange={(e) => {
              setBookname(e.target.value);
            }}
          ></input>
          <Field>Book Price:(in usd)</Field>
          <InputInfo
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></InputInfo>
          <Field>Your card no:</Field>
          <InputInfo
            onChange={(e) => {
              setCardno(e.target.value);
            }}
          ></InputInfo>
          <Field>Ships to:</Field>
          <Field>
            Please seperate the locations by commas if there is more than one
            place(states,countries etc)
          </Field>
          <InputInfo
            onChange={(e) => {
              setShipsTo(e.target.value);
            }}
          ></InputInfo>
          <SellBtn onClick={sell}>POST</SellBtn>
        </SellBox>
      ) : (
        ""
      )}
    </>
  );
};
const Header = styled.h1`
  font-size: 2rem;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background: orange;
`;
const Heading = styled.h3``;
const SellnowBtn = styled.button`
  margin-left: 10%;
  height: 51%;
  border: none;
  background: purple;
  color: #ffff;
  border-radius: 8%;
  padding: 13px;
`;
const SellBox = styled.div`
  width: 30vw;
  padding: 1%;
  background: purple;
  position: absolute;
  top: 21%;
  left: 30%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
`;
const Field = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ffff;
`;
const InputInfo = styled.input`
  padding: 7px;
  border: none;
  background: purple;
  border-bottom: 2px solid #ffff;
  color: #ffff;
  &:focus {
    outline: none;
  }
`;
const SellImg = styled.img`
  max-width: 15%;
  max-height: 24%;
`;
const InputImg = styled.input`
  margin: 3px;
`;
const SellBtn = styled.button`
  padding: 10px;
  background: orange;
  color: white;
  border: none;
  &:hover {
    background: #ffa50094;
  }
  margin: 8px;
`;
const Icon = styled.div`
  color: #fff;
`;
const BookSt = styled.div`
  font-size: 0.9rem;
  color: orange;
  margin-top: 4px;
  font-weight: bold;
`;
export default Sell;
