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

  
}
