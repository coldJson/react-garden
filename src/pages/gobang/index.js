import React from 'react';
import Game from './game';
import { Button } from 'antd-mobile';
import styles from './index.module.less';

class GobangPage extends React.Component {

  

  render() {
    return (
      <div className={styles.gobang}>
        <div className={styles.title}>XXX游戏</div>
        <Button type="primary" inline>开始游戏</Button>
        <div className={styles.gameArea}>
          <Game></Game>
        </div>
      </div>
    )
  }
}

export default GobangPage;