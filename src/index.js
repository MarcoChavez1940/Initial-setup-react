import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./containers/MainContainer";
import HelloWorld from "./components/HelloWorld";

const App = () => {
  return (
    <MainContainer>
      <HelloWorld />
    </MainContainer>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));