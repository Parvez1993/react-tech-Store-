import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { FaCartPlus, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItem, handleSidebar, handleCart } = value;

        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="menu"></img>
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItem}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: --webkit-sticky;
  position: static;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 2px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    position: absolute;
    top: -10px;
    color: var(--mainWhite);
    background: var(--primaryColor);
    font-size: 0.85rem;
    right: -10px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
