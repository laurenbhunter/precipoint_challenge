import React, { Component } from "react";
import "./App.css";
import PhotoContainer from "./PhotoContainer";

class App extends Component {
  constructor () {
    super();
    this.state = {
    photos:[]
  };
}

componentDidMount () {
fetch ("https://api.thedogapi.com/v1/images/search?limit=10")
.then (response => {
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
         <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
        <header className="masthead">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <h1 className="display-1 lh-1 mb-3">digital microscopy by PreciPoint</h1>
                  <h3>Solutions  •   Support   •   Know How</h3>
                </div>
                <div className="col-lg-6">
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="features">
              <h2 className="display-4 lh-1 mb-4"> Microscopic slide images</h2>
        </section>
        <div id="img-wrapper">
        <PhotoContainer photos={this.state.photos} />
        </div>
      </div>

</section>
    );
  }
}
export default App;
