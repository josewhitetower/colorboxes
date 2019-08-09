import React, { Component } from "react";
import Box from "./Box";

export default class ColorBoxes extends Component {
  static defaultProps = {
    colors: [
      "blue",
      "gray",
      "red",
      "orange",
      "yellow",
      "green",
      "teal",
      "indigo",
      "purple",
      "pink"
    ],
    boxes: 16
  };

  state = {
    boxes: Array.from({ length: this.props.boxes }).map((box, index) => {
      return {
        color: this.props.colors[
          Math.floor(Math.random() * this.props.colors.length)
        ],
        index
      };
    })
  };

  randomColor = () => {
    const index = Math.floor(Math.random() * this.props.colors.length);
    return this.props.colors[index];
  };

  handleClick = box => {
    let newColor;
    do {
      newColor = this.randomColor();
    } while (newColor === box.color);
    const newBoxes = [...this.state.boxes];
    newBoxes[box.index].color = newColor;
    this.setState({ boxes: newBoxes });
  };

  render() {
    const boxes = this.state.boxes.map((box, index) => (
      <Box key={index} box={box} onClick={() => this.handleClick(box)} />
    ));
    return <div className="ColorBoxes flex flex-wrap my-8">{boxes}</div>;
  }
}
