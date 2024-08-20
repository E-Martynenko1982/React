import React from "react";

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);


    const { innerWidth, innerHeight } = window
    this.setDimensions(innerWidth, innerHeight);
  }

  handleResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  }

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth}px - ${innerHeight}px`
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);

  }
  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>

    )
  }
}
export default Dimensions;