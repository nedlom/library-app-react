import React from "react";
import GenresContainer from "./GenresContainer";
import Router from "./Router";
import Header from "./Header";
import Genres from "./Genres";


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {/* <Genres /> */}
        {/* <Router /> */}
        <GenresContainer />
      </div>
    )
  }
}

export default App