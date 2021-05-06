import React, { Component } from 'react'

export default class HabitAddForm extends Component {

  // Ref
  // DOM에서는 document.querySeletor로 원하는 요소를 지정해 줬다면
  // React에서는 inputRef = React.createRef()를 선언후,
  // 원하는 요소에 ref={this.inputRef}를 사용하면 동일한 기능을 한다.
  inputRef = React.createRef();


  onSubmit = event => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <form className="add=form" onSubmit={this.onSubmit}>
        <input 
          ref={this.inputRef}
          type="text" 
          className="add-input" 
          placeholder="Please enter in your habit"/>
        <button className="add-button">Add</button>
      </form>
    )
  }
}
