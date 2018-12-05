import React, { Component } from "react";
import image from "./450x750.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      imgWidth: window.innerWidth - 2 * ((window.innerWidth * 37.645448) / 100),
      imgHeight:
        ((window.innerWidth - 2 * ((window.innerWidth * 37.645448) / 100)) *
          5) /
        3,
      textHeight:
        ((window.innerWidth - 2 * ((window.innerWidth * 37.645448) / 100)) *
          5) /
        3,
      textWidth: (window.innerWidth * 37.645448) / 100
    };
    this.updateSizes = this.updateSizes.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSizes);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSizes);
  }

  updateSizes() {
    let txtWidth = (window.innerWidth * 37.645448) / 100;
    let imageWidth = window.innerWidth - 2 * txtWidth;
    let imageHeight = (imageWidth * 5) / 3;

    if (window.innerHeight < imageHeight) {
      imageHeight = window.innerHeight;
      imageWidth = imageHeight * 0.6;
      txtWidth = (window.innerWidth - imageWidth) / 2;
    }

    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      imgWidth: imageWidth,
      imgHeight: imageHeight,
      textWidth: txtWidth,
      textHeight: imageHeight
    });
  }

  render() {
    return (
      <div className="container " style={{ maxHeight: this.state.imgHeight }}>
        <div
          className="text-block text-block-one"
          style={{ width: this.state.textWidth, height: this.state.textHeight }}
        >
          <div
            className="text-wrapper"
            style={{ maxHeight: this.state.textHeight }}
          >
            <h1>Hellow World</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </h3>
          </div>
        </div>
        <div
          className="image-block"
          style={{
            width: this.state.imgWidth,
            height: this.state.imgHeight
          }}
        >
          <div className="image-container">
            <img src={image} className="App-image" alt="pic" />
          </div>
        </div>
        <div
          className="text-block text-block-two"
          style={{ width: this.state.textWidth, height: this.state.textHeight }}
        >
          <div
            className="text-wrapper"
            style={{ maxHeight: this.state.textHeight }}
          >
            <h3 style={{ maxHeight: this.state.textHeight }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
