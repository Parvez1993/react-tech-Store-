import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bckImg from "../images/mainBcg.jpeg";

export default function Hero({ title, max, img, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}
const HeroWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 1px rgba(184, 156, 110, 1);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = { img: bckImg };
