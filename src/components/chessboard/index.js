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
    this.clearBoard = this.clearBoard.bind(this);
  }

  componentDidMount() {
    const boardWidth = window.getComputedStyle(this.board.current).width;
    const realWidth = (parseFloat(boardWidth) / this.props.lineNumber) * (this.props.lineNumber + 1);
    this.realBoard.current.style.width = realWidth + 'px';
    this.realBoard.current.style.height = realWidth + 'px';
  }

  // TODO: 落子
  setChessPos(e) {
    const currentStatus = this.state.gameStatus;
    const currentStep = `${e.target.dataset.row},${e.target.dataset.column}`;
    if (!currentStatus.includes(currentStep)) {
      currentStatus.push(currentStep);
      this.setState({
        gameStatus: currentStatus
      });
      this.paintChessPieces(e);
      this.props.onStepOver(e.target.dataset);
    } else {
      // TODO: 提示位置不可选
    }
  }

  // 绘制棋子
  paintChessPieces(e) {
    const element = e.target;
    element.style.backgroundColor = this.props.currentPlayer ? this.manMap[1] : this.manMap[0];
  }

  // 清空棋盘
  clearBoard() {
    this.setState({
      gameStatus: []
    });
    const chessPieceDoms = document.querySelectorAll('div[class*="chessPiece"]');
    chessPieceDoms.forEach((el) => {
      el.style.backgroundColor = 'transparent';
    });
  }

  render() {
    const lineNumbers = [];
    for (let i = 0; i < this.props.lineNumber - 1; i++) {
      lineNumbers.push(i);
    }

    const chessCubes = lineNumbers.concat([this.props.lineNumber]);

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
          {chessCubes.map((row) =>
            <div className={styles.cubeRows} key={row.toString()}>
              {chessCubes.map((column) =>
                <div className={styles.cubeColumns} key={column.toString()}>
                  <div className={styles.chessPiece} onClick={this.setChessPos} data-row={row} data-column={column}></div>
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