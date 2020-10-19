import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Table from "./components/Table";
import API from "./utils/API";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    search: "",
    users: [],
  };

  componentDidMount() {
    API.getRandomUsers().then((res) =>
      this.setState({ users: res.data.results }).catch((err) =>
        console.log(err)
      )
    );
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    console.log("search", event.target.value);
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();

    const filtered = this.state.users.filter(
      (item) =>
        item.name.first
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        item.name.last
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        item.email.toLowerCase().includes(this.state.search.toLowerCase()) ||
        item.location.country
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
    );
    this.setState({ users: filtered });
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Search
          handleInputChange={this.handleInputChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <Table user={this.state.users} />
        <Footer />
      </div>
    );
  }
}

export default App;
