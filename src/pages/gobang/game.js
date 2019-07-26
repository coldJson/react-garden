import React from 'react';
import Chessboard from 'comp/chessboard';
import { generateSquare, hasSomeInLine } from 'comp/utils/chessUtil';
import { Modal } from 'antd-mobile';

class GobangGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      whitePlayer: true,
      squares: generateSquare(15, 15)
    }
    this.board = React.createRef();
    this.finishStep = this.finishStep.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
    this.showResult = this.showResult.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  finishStep(pos) {
    const squares = this.state.squares;
    squares[Number(pos.row)][Number(pos.column)] = this.state.whitePlayer ? 'O' : 'X';
    this.setState({
      squares: squares
    });
    this.calculateWinner(pos);
  }

  changePlayer() {
    this.setState({
      whitePlayer: !this.state.whitePlayer
    });
  }

  calculateWinner(curPos) {
    // 当前棋子位置坐标
    const row = Number(curPos.row);
    const column = Number(curPos.column);
    // 当前执方符号
    const mark = this.state.whitePlayer ? 'O' : 'X';
    // 可能达成五连珠的位置范围
    const rowMin = row - 4 > 0 ? row - 4 : 0;
    const rowMax = row + 4 < 14 ? row + 4 : 14;
    const columnMin = column - 4 > 0 ? column - 4 : 0;
    const columnMax = column + 4 < 14 ? column + 4 : 14;
    let possiblePath = [];

    // 横向是否五连珠
    for (let i = rowMin; i <= rowMax; i++) {
      possiblePath.push(this.state.squares[i][column]);
    }
    if (hasSomeInLine(5, possiblePath, mark)) {
      this.showResult();
      return;
    }

    // 纵向是否五连珠
    possiblePath = [];
    for (let i = columnMin; i <= columnMax; i++) {
      possiblePath.push(this.state.squares[row][i]);
    }
    if (hasSomeInLine(5, possiblePath, mark)) {
      this.showResult();
      return;
    }

    // 左45是否五连珠
    possiblePath = [];
    for (let i = rowMin, j = columnMax; i <= rowMax && j >= columnMin; i++ , j--) {
      possiblePath.push(this.state.squares[i][j]);
    }
    if (hasSomeInLine(5, possiblePath, mark)) {
      this.showResult();
      return;
    }
    // 右45是否五连珠
    possiblePath = [];
    for (let i = rowMin, j = columnMin; i <= rowMax && j <= columnMax; i++ , j++) {
      possiblePath.push(this.state.squares[i][j]);
    }
    if (hasSomeInLine(5, possiblePath, mark)) {
      this.showResult();
      return;
    }
    // TODO: 平局判断
    // 未分胜负，换执方
    this.changePlayer();
  }

  showResult() {
    Modal.alert('恭喜恭喜！', `${this.state.whitePlayer ? '白方' : '黑方'}获胜！`, [
      { text: '结束游戏', onPress: () => {}},
      { text: '再来一局', onPress: () => {
        this.startGame();
        this.board.current.clearBoard();
      }}
    ])
  }

  startGame() {
    this.setState({
      squares: generateSquare(15, 15),
      whitePlayer: true
    });
  }

  render() {
    return (
      <Chessboard lineNumber={15} onStepOver={this.finishStep} currentPlayer={this.state.whitePlayer} ref={this.board}></Chessboard>
    )
  }
}

export default GobangGame;