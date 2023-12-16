import { useState } from "react";
import { Wrap } from "./style";
import img1 from "../../../assets/images/main3.jpg";
import img2 from "../../../assets/images/main4.jpg";
import star0 from "../../../assets/icons/star-line.svg";
import star1 from "../../../assets/icons/star-fill.svg";
import like from "../../../assets/icons/like.svg";
import quick from "../../../assets/icons/quick.svg";
import send from "../../../assets/icons/send.svg";
import { NavLink } from "react-router-dom";

export default function Card() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrap
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink to="/products/somewhere">
        <div className="img_wrap">
          <img src={isHovered ? img1 : img2} />
          <div className="hover_items">
            <img src={like} alt="like" />
            <img src={send} alt="like" />
            <img src={quick} alt="like" />
          </div>
        </div>
        <div className="details">
          <div className="stars">
            <img src={star1} alt="star1"></img>
            <img src={star1} alt="star1"></img>
            <img src={star1} alt="star1"></img>
            <img src={star1} alt="star1"></img>
            <img src={star0} alt="star1"></img>
          </div>
          <h4>Lorem ipsum dolor sit.</h4>
          <h5>$900.00</h5>
          <div className="hover_text">+Add to Cart</div>
        </div>
      </NavLink>
    </Wrap>
  );
}
