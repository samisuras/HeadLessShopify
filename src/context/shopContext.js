import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    if (!localStorage.getItem("checkout-id")) {
      this.createCheckout();
    } else {
      this.fetchCheckout(localStorage.getItem("checkout-id"));
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout-id", checkout.id);
    this.setState({ checkout });
  };

  fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    this.setState({ checkout });
  };

  addItemToCheckout = async (variantId, qty) => {
    const lineItemsToAdd = {
      variantId,
      quantity: parseInt(qty, 10),
    };

    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout });
  };

  removeLineItem = async (lineItemIds) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIds
    );
    this.setState({ checkout });
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({
      products,
    });
  };

  fetchProductsWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({
      product,
    });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductsWithHandle: this.fetchProductsWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
