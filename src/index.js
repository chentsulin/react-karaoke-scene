import React, { Component, PropTypes } from 'react';
import KaraokeLyric from 'react-karaoke-lyric';
import getTargetLyrics from './utils/getTargetLyrics';
import mapLyricPercentage from './utils/mapLyricPercentage';
import defaultDisplayRule from './utils/defaultDisplayRule';


export default class KaraokeScene extends Component {
  static propTypes = {
    lyric: PropTypes.object.isRequired,
    backgroundColor: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      // percentage: 0,
      // percentage2: 0
      current: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { current } = this.state;
      // const { percentage, percentage2 } = this.state;
      // if (percentage < 100) {
      //   this.setState({
      //     percentage: percentage + 1,
      //   });
      // } else if (percentage2 < 100) {
      //   this.setState({
      //     percentage2: percentage2 + 1,
      //   });
      // }
      this.setState({
        current: current + 0.01
      });
    }, 10);
  }

  render() {
    const { lyric, backgroundColor } = this.props;
    // const { percentage, percentage2 } = this.state;
    const { current } = this.state;
    const targetLyrics = getTargetLyrics(lyric.lyrics, current);
    const targetLyricPercentages = mapLyricPercentage(targetLyrics, current);
    const { left, right } = defaultDisplayRule(targetLyricPercentages, current);
    const backgroundStyle = {
      backgroundColor,
      height: '100vh'
    };
    return (
      <div style={backgroundStyle}>
        <div style={{ position: 'fixed', bottom: '5%' }}>
          <div style={{ width: '100vw', clear: 'both' }}>
            <KaraokeLyric
              text={left && left.text || ''}
              percentage={left && left.percentage}
              wrapperStyle={{ float: 'left', marginLeft: '20%' }}
            />
          </div>
          <div style={{  clear: 'both', paddingLeft: '-10%' }}>
            <KaraokeLyric
              text={right && right.text || ''}
              percentage={right && right.percentage || 0}
              wrapperStyle={{ float: 'right', marginRight: '20%' }}
            />
          </div>
        </div>
      </div>
    );
  }
}
