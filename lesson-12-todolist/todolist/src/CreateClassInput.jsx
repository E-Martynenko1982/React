import React from 'react';
import PropTypes from 'prop-types';

class CreateClassInput extends React.Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value)
    this.setState({ value: "" })
  }
  render() {


    return (
      <div className='create-task'>
        <input type="text" value={this.state.value}
          onChange={this.handleChange}
          className="create-task__input" />
        <button className='btn create-task__btn'
          onClick={this.handleTaskCreate}
        >Create</button>
      </div>
    );
  }

}
CreateClassInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default CreateClassInput;


// 1/ Text from input
// 2. Create tast with this text
// 3. Add to task to the list