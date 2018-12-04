import React, { Component } from "react";
import $ from "jquery";
import image from "./450x750.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      imgWidth: window.innerWidth - 2 * ((window.innerWidth * 37.645448) / 100),
      imgHeight: 0,
      textHeight: (((window.innerWidth * 37.645448) / 100) * 5) / 3,
      textWidth: (window.innerWidth * 37.645448) / 100
    };
    this.updateSizes = this.updateSizes.bind(this);
  }

  componentDidMount() {
    // let height = $(".image-block").height();
    // let width = $(".image-block").width();

    // let imageWidth = window.innerHeight - 2 * $(".text-block").width();
    // let imageHeight = (imageWidth * 5) / 3;
    // let txtWidth = (window.innerWidth * 37.645448) / 100;
    // this.setState({
    //   // textWidth: width / 2
    //   imgWidth: imageWidth,
    //   imgHeight: imageHeight,
    //   textWidth: txtWidth,
    //   textHeight: imageHeight
    // });
    window.addEventListener("resize", this.updateSizes);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSizes);
  }

  updateSizes() {
    // console.log(window.innerWidth, window.innerHeight);
    let txtWidth = (this.state.windowWidth * 37.645448) / 100;
    let imageWidth = this.state.windowWidth - 2 * txtWidth;
    let imageHeight = (imageWidth * 5) / 3;
    // console.log(txtWidth, imgWidth, imgHeight);

    // console.log(imageWidth, imageHeight, txtWidth, window.innerWidth);
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
    // let txtWidth = (this.state.windowWidth * 37.645448) / 100;
    // let imageWidth = this.state.windowWidth - 2 * txtWidth;
    // let imageHeight = (imageWidth * 5) / 3;
    return (
      <div className="container">
        <div
          className="text-block text-block-one"
          style={{ width: this.state.textWidth, height: this.state.textHeight }}
        >
          <div className="text-wrapper">
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
          <div className="text-wrapper">
            <h3>
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
