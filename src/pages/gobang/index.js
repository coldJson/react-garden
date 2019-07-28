import React from 'react';
import Game from './game';
import { Button } from 'antd-mobile';
import styles from './index.module.less';

const buttonStyle = {
  marginTop: '40px',
  backgroundImage: 'linear-gradient(90deg, #333333, #FFFFFF)',
  backgroundColor: 'transparent',
  fontSize: '30px',
  letterSpacing: '0.2em',
  borderWidth: 0,
  borderRadius: '10px',
  boxShadow: '5px 2px 5px 0px #000000'
};

class GobangPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startGame: false,
    };
  }

  start() {
    this.setState({
      startGame: true
    });
  }

  home() {
    this.setState({
      startGame: false
    });
  }


  render() {
    return (
      <div className={styles.gobang}>
        {this.state.startGame ? (
          <div className={styles.gameArea}>
            <Game onEnd={() => this.home()}></Game>
          </div>
        ) : (
            <div>
              <div className={styles.title}>五子棋游戏</div>
              <Button type="default" inline onClick={() => this.start()} style={buttonStyle}>开始游戏</Button>
            </div>
          )}
      </div>
    )
  }
}

export default GobangPage;