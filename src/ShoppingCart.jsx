import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, productName: "Masala Chai", price: 250, quantity: 0 },
        { id: 2, productName: "Elaichi Chai", price: 170, quantity: 0 },
        { id: 3, productName: "Adrak Chai", price: 150, quantity: 0 },
        { id: 4, productName: "Lemongrass Chai", price: 350, quantity: 0 },
        { id: 5, productName: "Haldi Milk", price: 450, quantity: 0 },
        { id: 6, productName: "Kadha", price: 650, quantity: 0 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });

    var prods = await response.json();

    console.log(prods);

    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  componentDidCatch(error, info) {
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      allProducts.splice(index, 1);

      this.setState({ products: allProducts });
    }
  };
}
