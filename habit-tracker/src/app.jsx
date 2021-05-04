import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Test from './components/Test'
import Navbar from './components/navbar'

class App extends Component {
  state = {
    habits: [
      {id:1, name: 'Reading', count: 0},
      {id:2, name: 'Running', count: 0},
      {id:3, name: 'Coding', count: 0}
    ],
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement : ${habit.name}`);
    const habits = [...this.state.habits];
    // console.log(habits); ...의 의미는 그대로 복사해온다라는 뜻
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({
      habits: habits
    });
  }

  handleDecrement = (habit) => {
    console.log(`handleDecrement : ${habit.name}`)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count--;
    if(habits[index].count < 0){
      habits[index].count=0;
    }
    this.setState({
      habits:habits
    })
  }

  handleDelete = (habit) => {
    console.log(`handleDelete : ${habit.name}`)
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({
      habits:habits
    })
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} 
        />
      </>
    );
  }
}

export default App;
