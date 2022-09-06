import React from "react";
import GenresContainer from "./GenresContainer";
import Router from "./Router";
import Header from "./Header";
import Genres from "./Genres";
import GenresForm from "./GenresForm";


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <GenresContainer />
        <GenresForm />

        {/* <Genres /> */}
        {/* <Router /> */}
        
      </div>
    )
  }
}

export default App