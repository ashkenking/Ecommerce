import React, { Component } from "react";

export default class customersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Kenny",
        phone: "07069265979",
        address: { city: "Lagos" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Taiwo",
        phone: "08032958506",
        address: { city: "Abeokuta" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Ashley",
        phone: "08132283383",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Bolex",
        phone: "08060203474",
        address: { city: "Lagos" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Roseline",
        phone: null,
        address: { city: "Akure" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    //Update the state using setState method - so that react updates the broswer DOM automatically

    this.setState({
      customersCount: 7,
    });
  };
  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center"> No Phone</div>;
    }
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
          </td>
          <div>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => {
                this.onChangePictureClick(cust, index);
              }}
            >
              Change Picture
            </button>
          </div>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    //console.log(index);

    //get existing customers
    var cusArr = this.state.customers;
    cusArr[index].photo = "https://picsum.photos/id/104/60";

    //update "customers" array in the state
    this.setState({ customers: cusArr });
  };
}
