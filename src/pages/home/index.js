import React from 'react';
import { Grid, Carousel } from 'antd-mobile';
import styles from './home.module.less';

// 菜单数据
const girdData = [
  {
    text: 'CANVAS'
  },
  {
    text: 'WEBGL'
  },
  {
    text: 'TOOLS'
  },
  {
    text: 'GOBANG'
  },
  {
    text: 'menu5'
  },
  {
    text: 'menu6'
  },
  {
    text: 'menu7'
  },
  {
    text: 'menu8'
  },
  {
    text: 'menu9'
  }
];

// 跑马灯item
const carouselData = ['javascript', 'python', 'golang'];
class Homepage extends React.Component {

  constructor() {
    super();
    this.state = {
      test: 5 
    }
  }

  

  render() {
    const crouselItems = carouselData.map((v, i) => 
      <div key={i}>{v}</div>
    )
    return (
      <div className={styles.main}>
        <div className={styles.banner}>
          <Carousel infinite autoplay>
            {crouselItems}
          </Carousel>
        </div>
        <div className={styles.gridMenu}>
          <Grid data={girdData} columnNum={3}></Grid>
        </div>
      </div>
    )
  }
}

export default Homepage;