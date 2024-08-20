import React from "react";

class Dimensions extends React.Component {
  constructor(props) {
    super(props);
    const { innerWidth, innerHeight } = window
    this.state = {
      width: innerWidth,
      height: innerHeight,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = (e) => {
    const { innerWidth, innerHeight } = e.target
    this.setState({
      width: innerWidth,
      height: innerHeight,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>

    )
  }
}
export default Dimensions;