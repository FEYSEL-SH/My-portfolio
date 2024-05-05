import React, { Component } from 'react'

import Header from './Components/Header';
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section8 from './Components/Section6';
import Section6 from "./Components/Section6";
import Section9 from "./Components/Section9";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        {/* <Section8/> */}
        <Section9/>



      </div>
    )
  }
}
