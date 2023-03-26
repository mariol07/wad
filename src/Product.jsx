import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    console.log(this.props);
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">#{this.state.product.id}</div>

            <h4 className="p-5 border-top">{this.state.product.productName}</h4>
            <div>Rs/-{this.state.product.price}</div>
          </div>
          {/*card body ends here */}

          <div className="card-footer text-right">
            <div className="float-left"></div>
            <span className="badge">{this.state.product.quantity}</span>
            <div className="btn-group">
              <button className="btn btn-outline-success">+</button>
              <button className="btn btn-outline-success">-</button>
            </div>
            {/*the float ends here */}

            <div className="float-right">{this.props.children}</div>
            {/*right footer ends here*/}

            {/*card footer ends here*/}
          </div>
        </div>
      </div>
    );
  }
}
