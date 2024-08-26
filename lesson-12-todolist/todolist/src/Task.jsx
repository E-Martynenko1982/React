import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ id, done, text = '', onChange, onDelete }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done })

  return (

    < >
      <li className={listItemClasses}>
        <input type="checkbox"
          className='list-item__checkbox'
          defaultChecked={done}
          onChange={() => onChange(id)}
        />
        <span className='list-item__text'> {text}</span>
        <button className='list-item__delete-btn' onClick={() => onDelete(id)}></button>
      </li>
    </>
  );
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
