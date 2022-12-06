import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    };
  }

  //get data from jsonPlaceHolder using async function

  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(res.json());
    if (res.ok) {
      const users = await res.json();
      // console.log(users);
      this.setState({ users, isLoading: false });
    } else {
      this.setState({ isLoading: false, isError: true });
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ));
  };

  renderTableRows = () => {
    return this.state.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{`${user.address.street},${user.address.city}`}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });
  };

  render() {
    const { users, isLoading, isError } = this.state;
    if (isLoading) {
      return (
        <div class="flex justify-center items-center space-x-2">
          <div
            class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div
            class="
          spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
            text-purple-500
          "
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div
            class="
          spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
            text-green-500
          "
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div
            class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div
            class="
          spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
            text-yellow-500
          "
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div
            class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div
            class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
    if (isError) {
      return <div>Error Happning Here Bro..........</div>;
    }

    return users.length > 0 ? (
      <div className="overflow-x-auto  w-full md:w-1/2">
        <table className="table table-compact ">
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
      </div>
    ) : (
      <div>No Information to SharedWorker.</div>
    );
  }
}

export default App;
