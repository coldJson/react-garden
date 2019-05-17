import React from 'react';
import { Carousel, WingBlank, Button } from 'antd-mobile';

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
      });
    }, 100);
  }

  render() {
    const componentStyle = {
      grid: {
        marginTop: '20px'
      }
    }

    return (
      <div className="home">
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <Button type="primary">primary</Button>
      </div>
    )
  }
}

export default Homepage;