import React, { Component } from "react";
import { linkDatas } from "./linkData";

const ProductContext = React.createContext();

//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    cartOpen: false,
    sidebarOpen: false,
    cartItem: 0,
    links: linkDatas,
    carts: [],
  };
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  handleCart = () => {
    this.setState({ cartOpen: !this.state.sidebarOpen });
  };
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          openCart: this.openCart,
          closeCart: this.closeCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductProvider, ProductConsumer };
