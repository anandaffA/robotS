import React, { Component } from "react";
import Scroll from "../Components/Scroll";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div>
        <h1 className="text-center text-light mt-4">ROBOTFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobot} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
