import React from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Expand = ({ title, children, isOpen, onShow, onHide }) => {

  const handleClick = isOpen ? onHide : onShow;
  const iconClass = `fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`;

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={handleClick}>
          <i className={iconClass}></i>
        </button>
      </div>
      {isOpen && <div className="expand__content">{children}</div>}
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  isOpen: false,
  title: "",
};

export default Expand;