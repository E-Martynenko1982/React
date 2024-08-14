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
      title: 'Auqa'
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
        <div class="picker__title">{this.state.title}</div>
        <div>
          <button class="picker__button picker__button_coral"
            onMouseEnter={this.handleMouseCoral}
            onMouseLeave={this.handleMouseLeave}
          ></button>
          <button class="picker__button picker__button_aqua"
            onMouseEnter={this.handleMouseAqua}
            onMouseLeave={this.handleMouseLeave}
          ></button>
          <button class="picker__button picker__button_bisque"
            onMouseEnter={this.handleMouseBisque}
            onMouseLeave={this.handleMouseLeave}
          ></button>
        </div>
      </div>

    )
  }
}
export default ColorPicker;