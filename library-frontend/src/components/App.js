import React from "react";

import Header from "./Header";
import GenresContainer from "../containers/GenresContainer";

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <GenresContainer />    
      </div>
    )
  }
}

export default App