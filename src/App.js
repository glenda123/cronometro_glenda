import React, { Component} from 'react';
import Cronometro from "./components/Cronometro";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     body{
            background-color:#222;
            color:#387EF5;
            text-align:center;

     }
`

class App extends Component {

  render(){
    return (
      <>
        <GlobalStyle/>
        <h1>Cronometro</h1>
        <Cronometro/>
      </>
    );
  }
  
}

export default App;
