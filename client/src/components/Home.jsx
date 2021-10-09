import { Redirect } from "react-router-dom";
import { useEffect, useContext, useState, useRef } from "react";
import axios from "axios";
let Home = (props) => {
  const [homeData, setHomeData] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchHomeData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get("http://localhost:8000/", config);
        setHomeData(data.data);
      } catch (err) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };
    fetchHomeData();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>{homeData}</div>
  );
};
export default Home;
