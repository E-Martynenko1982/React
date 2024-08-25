import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Expand = ({ title, children, isOpen, onToggle }) => {

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onToggle}>
          <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
      </div>
      {isOpen && <div className="expand__content">{children}</div>}
    </div>
  )
};
export default Expand;