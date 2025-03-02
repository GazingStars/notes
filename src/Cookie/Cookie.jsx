import { useState } from "react";
import "./Cookie.css";
import ccImg from "../assets/cookie.png";

const Cookie = ({time}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsClicked(true);
    setCount(count + 1);
    setTimeout(() => setIsClicked(false), time);
  };

  return (
    <div className="cookie-container">
      <h1 className="title">🍪 Cookie Clicker 🍪</h1>
      <h2 className="subtitle">Click the cookie to get more!</h2>
      <img
        src={ccImg}
        alt="cookie"
        onClick={handleClick}
        className={`cookie-img ${isClicked ? "clicked" : ""}`}
      />
      <h3 className="counter">Clicks: {count}</h3>
    </div>
  );
};

export default Cookie;
