import React from "react";
import { render } from "react-dom";

import '../css/main.scss';
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <Header/>
        <Banner/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
