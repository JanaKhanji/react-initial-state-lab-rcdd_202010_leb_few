// your Bomb code here!
import React from 'react';

<<<<<<< HEAD
export default class Bomb extends React.Component {
=======
class Bomb extends React.Component {
>>>>>>> 9ccf604927b507a60aa40280aed8e6dd1e8c5a35

  constructor(props) {
    super() 

    this.state = {
      secondsLeft: props.initialCount
    }
  }

    render() {
      const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
      return (
        <div>{message}</div>
      )
      
    }
  }