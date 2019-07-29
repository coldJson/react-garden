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
    text: 'TOOLS',
    url: '/tools'
  },
  {
    text: 'GOBANG',
    url: '/gobang'
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
const imgUrls = ['python', 'golang', 'javascript'];
class Homepage extends React.Component {

  constructor() {
    super();
    this.state = {
      test: 5 
    }
  }

  

  render() {
    const crouselItems = imgUrls.map((v, i) => 
      <img key={i} src={require(`src/static/img/${v}.jpg`)} alt={v} />
    )
    return (
      <div className={styles.main}>
        <div className={styles.banner}>
          <Carousel infinite autoplay>
            {crouselItems}
          </Carousel>
        </div>
        <div className={styles.gridMenu}>
          <Grid data={girdData} columnNum={3} 
            onClick={(el) => {
              if (el.url) {
                this.props.history.push(el.url);
              }
            }}></Grid>
        </div>
      </div>
    )
  }
}

export default Homepage;