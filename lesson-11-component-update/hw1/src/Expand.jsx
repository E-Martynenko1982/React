import React, { Component } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen, // Initialize the state with the prop value
    };
  }

  toggleExpand = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    const iconClass = `fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleExpand}>
            <i className={iconClass}></i>
          </button>
        </div>
        {isOpen && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

Expand.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Expand.defaultProps = {
  isOpen: false,
  title: "",
};

export default Expand;
