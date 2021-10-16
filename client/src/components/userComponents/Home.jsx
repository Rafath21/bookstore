import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { getBooks } from "../../actions/homeActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { loading, error, books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  console.log(books);

  return (
    <>
      <HomeContainer>
        <Heading>Book Store</Heading>
        <Books>
          {books.length > 0 ? (
            books.map((book) => {
              return (
                <Book>
                  <BookImg src="https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"></BookImg>
                  <BookName>{book.name}</BookName>
                  <BookInfo>Sold by: {book.soldby}</BookInfo>
                  <BookInfo>{book.price}</BookInfo>
                  <BuynowBtn
                    onClick={() => {
                      if (!isAuthenticated) {
                        history.push("/login");
                      } else {
                        history.push({
                          pathname: `/placeorder/${book._id}`,
                          state: {
                            bookid: book._id,
                            bookname: book.name,
                            bookprice: book.price,
                            booksoldby: book.soldby,
                          },
                        });
                      }
                    }}
                  >
                    Buy now
                  </BuynowBtn>
                </Book>
              );
            })
          ) : (
            <Nobooks>No Books Available</Nobooks>
          )}
        </Books>
      </HomeContainer>
    </>
  );
};
export const HomeContainer = styled.div`
  background: white;
  color: black;
  display: flex;
  margin: -12px;
  padding: 0;
  flex-direction: column;
`;
export const Heading = styled.h1`
  font-size: 2rem;
  color: black;
  margin: auto;
  margin-top: 2px;
`;
export const Books = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-grow: 0.9;
  grid-row-gap: 20px;
  margin-top: 20px;
`;
export const Book = styled.div`
  width: 74%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
export const BookImg = styled.img`
  max-height: 15%;
  max-width: 47%;
  flex-grow: 0.7;
`;

export const BookName = styled.h3`
  font-size: 1.2rem;
  color: purple;
  font-weight: bold;
`;
export const BookInfo = styled.p`
  font-size: 1.2rem;
  margin-top: 2px;
`;
export const BuynowBtn = styled.button`
  padding: 14px;
  color: white;
  background: purple;
  border: none;
  border-radius: 20px;
`;
export const Nobooks = styled.h3`
  font-size=2rem;
  flex-grow:0.9;
  margin:auto;
  color:purple;
  `;
export default Home;
