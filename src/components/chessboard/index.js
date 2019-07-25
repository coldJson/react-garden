import React from 'react';
import styles from './chessboard.module.less';


class Chessboard extends React.Component {

  constructor(props) {
    super(props);
    this.board = React.createRef();
    this.realBoard = React.createRef();
    this.manMap = ['#333333', '#FFFFFF'];
    this.state = {
      gameStatus: []
    };
    this.setChessPos = this.setChessPos.bind(this);
  }

  componentDidMount() {
    const boardWidth = window.getComputedStyle(this.board.current).width;
    const realWidth = (parseFloat(boardWidth) / this.props.lineNumber) * (this.props.lineNumber + 1);
    this.realBoard.current.style.width = realWidth + 'px';
    this.realBoard.current.style.height = realWidth + 'px';
  }

  // TODO: 落子
  setChessPos(e) {
    this.paintChessPieces(e);
    this.props.onStepOver();
  }

  // TODO: 绘制棋子
  paintChessPieces(e) {
    const element = e.target;
    element.style.backgroundColor = this.props.currentPlayer ? this.manMap[1] : this.manMap[0];
  }

  render() {
    const lineNumbers = [];
    for (let i = 1; i < this.props.lineNumber; i++) {
      lineNumbers.push(i);
    }

    const chessCubes = lineNumbers.concat([this.props.lineNumber + 1]);

    return (
      <div className={styles.wrapper}>
        <div className={styles.visualBoard} ref={this.board}>
          {lineNumbers.map((number) =>
            <div className={styles.rows} key={number.toString()}>
              {lineNumbers.map((number) =>
                <div className={styles.columns} key={number.toString()}></div>
              )}
            </div>
          )}
          <span className={styles.centerMark}></span>
        </div>
        <div className={styles.realBoard} ref={this.realBoard}>
          {chessCubes.map((number) =>
            <div className={styles.cubeRows} key={number.toString()}>
              {chessCubes.map((number) =>
                <div className={styles.cubeColumns} key={number.toString()}>
                  <div className={styles.chessPiece} onClick={this.setChessPos}></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Chessboard;