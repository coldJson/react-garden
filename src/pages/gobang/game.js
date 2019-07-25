import React from 'react';
import Chessboard from 'comp/chessboard';

class GobangGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      originPlayer: true
    }
    this.finishStep = this.finishStep.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
  }

  finishStep() {
    this.changePlayer();
  }

  changePlayer() {
    this.setState({
      originPlayer: !this.state.originPlayer
    });
  }

  render() {
    return (
      <Chessboard lineNumber={15} onStepOver={this.finishStep} currentPlayer={this.state.originPlayer}></Chessboard>
    )
  }
}

export default GobangGame;