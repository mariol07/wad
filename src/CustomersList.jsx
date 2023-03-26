import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Employees",
    customerCount: "5",
    customers: [
      {
        id: 1,
        name: "SCott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1010/60",
      },

      {
        id: 2,
        name: "SCott1",
        phone: "123-457",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1069/60",
      },

      {
        id: 3,
        name: "SCott2",
        phone: null,
        address: { city: "New Bihar" },
        photo: "https://picsum.photos/id/1052/60",
      },

      {
        id: 4,
        name: "SCott3",
        phone: null,
        address: { city: "New London" },
        photo: "https://picsum.photos/id/1065/60",
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className=" m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary">{this.state.customerCount}</span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Adress</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  // executes when the user clicks on the rrefrsh button
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-centre">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust,index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust,index);
                }}>
                change
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  onChangePictureClick=(cust,index)=>{
    // console.log(cust);
    // console.log(index);

    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60"
    this.setState({customers:custArr});
  }
}
