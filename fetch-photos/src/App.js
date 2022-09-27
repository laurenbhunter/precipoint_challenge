import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor () {
    super();
    this.state = {
    photos:[]
  };
}

componentDidMount () {
fetch ('https://wsi001.api.preci.cloud/api/WholeSlideImages/a9d995db-4f0c-45f5-b2d5-846e15918d3a/MetaData')
}

render () {
    return (
      <section className="app">
        <p>Is this working?</p>
      </section>
    );
  }
}
export default App;
