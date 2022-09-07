import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import GenresContainer from "../containers/GenresContainer";

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <GenresContainer />  
        <Footer /> 
      </div>
    )
  }
}

export default App