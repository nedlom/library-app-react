import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "../router/Router";
// import GenresContainer from "../containers/GenresContainer";

class App extends React.Component {

  render() {
    return (
      <div>
        {/* <Header /> */}
        {/* <GenresContainer />   */}
        <Routes />
        <Footer /> 
      </div>
    )
  }
}

export default App