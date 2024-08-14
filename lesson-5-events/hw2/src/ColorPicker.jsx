import React from "react";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  handleMouseCoral = () => {
    this.setState({
      title: 'Coral'
    })
  }

  handleMouseAqua = () => {
    this.setState({
      title: 'Aqua'
    })
  }

  handleMouseBisque = () => {
    this.setState({
      title: 'Bisque'
    })
  }

  handleMouseLeave = () => {
    this.setState({
      title: ''
    })
  }
  render() {
    return (

      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button className="picker__button picker__button_coral"
            onMouseEnter={this.handleMouseCoral}
            onMouseLeave={this.handleMouseLeave}
          ></button>
          <button className="picker__button picker__button_aqua"
            onMouseEnter={this.handleMouseAqua}
            onMouseLeave={this.handleMouseLeave}
          ></button>
          <button className="picker__button picker__button_bisque"
            onMouseEnter={this.handleMouseBisque}
            onMouseLeave={this.handleMouseLeave}
          ></button>
        </div>
      </div>

    )
  }
}
export default ColorPicker;