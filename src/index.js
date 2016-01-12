import React, { Component, PropTypes } from 'react';
import KaraokeLyric from 'react-karaoke-lyric';


export default class KaraokeScene extends Component {
  static propTypes = {
    lyric: PropTypes.object.isRequired,
    backgroundColor: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      percentage: 0,
      percentage2: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { percentage, percentage2 } = this.state;
      if (percentage < 100) {
        this.setState({
          percentage: percentage + 1,
        });
      } else if (percentage2 < 100) {
        this.setState({
          percentage2: percentage2 + 1,
        });
      }
    }, 30);
  }

  render() {
    const { backgroundColor } = this.props;
    const { percentage, percentage2 } = this.state;
    const backgroundStyle = {
      backgroundColor,
      height: '100vh'
    };
    return (
      <div style={backgroundStyle}>
        <div style={{ position: 'fixed', bottom: '5%' }}>
          <div style={{ width: '100vw', clear: 'both' }}>
            <KaraokeLyric text="一瞬間崩潰" percentage={percentage} wrapperStyle={{ float: 'left', marginLeft: '20%' }} />
          </div>
          <div style={{  clear: 'both', paddingLeft: '-10%' }}>
            <KaraokeLyric text="所有寂寞防備" percentage={percentage2} wrapperStyle={{ float: 'right', marginRight: '20%' }} />
          </div>
        </div>
      </div>
    );
  }
}
