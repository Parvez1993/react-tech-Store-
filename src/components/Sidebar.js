import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { sidebarOpen, links, handlesideBar } = value;
        // console.log("these are the", links);
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handlesideBar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: 0px;
  background: var(--mainGrey);
  width: 100%;
  height: 100%;
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    float: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    color: var(--primaryBlack);
    text-transform: capitalize;
    padding: 0.3rem 1rem;
    background: transparent;
  }

  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    text-decoration: none;
    padding-left: 2.5rem;
  }
  @media (min-width: 576px) {
    width: 20%;
  }
`;
