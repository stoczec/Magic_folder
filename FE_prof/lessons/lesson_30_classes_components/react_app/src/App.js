import React, { Component } from 'react';
import Login from './components/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [
        { name: 'fwefwf' },
        { name: 'regr' },
        { name: 'fwefqegwrhfwf' },
        { name: 'fwefwvrevrerervrvvf' },
      ],
      inputState: '',
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.changeInputState = this.changeInputState.bind(this);
  }

  handleIncrement() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  handleDecrement() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  handleRemoveUser = (id) => {
    this.setState((prevState) => {
      const filterUsers = prevState.users.filter((_, idx) => idx !== id);
      return { ...prevState, users: filterUsers };
    });
  };

  changeInputState = (event) => {
    this.setState((prevState) => {
      return { ...prevState, inputState: event.target.value };
    });
  };

  render() {
    const { count, users, inputState } = this.state;
    return (
      <div>
        <p></p>
        <Login myCount={count} />
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        {users.map((user, idx) => {
          return (
            <p key={idx} onClick={() => this.handleRemoveUser(idx)}>
              {user.name}
            </p>
          );
        })}
        <input
          type="text"
          value={this.state.inputState}
          onChange={this.changeInputState}
        />
        <p>{inputState}</p>
      </div>
    );
  }
}
