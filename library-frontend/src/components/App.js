import React from "react";
import GenresContainer from "./GenresContainer";
import Router from "./Router";
import Header from "./Header";


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Router />
        {/* <GenresContainer /> */}
      </div>
    )
  }
}

export default App