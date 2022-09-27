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
.then (response => {
  console.log('response', response);
  if (!response.ok) {
    throw Error("Error fetching the slides");
  }
  return response.json()
  .then(allData => {
    this.setState({ photos: allData});
      })
  .catch(err => {
    throw Error(err.message);
     });
    }
  );
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
