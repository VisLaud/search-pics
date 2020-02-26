import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID DT97VCmrOJy5IckTn3DCPxJoI31qtEW94ZjZ8JqYIFc"
      }
    });
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmitSearch={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
