import React, { Component } from 'react';
import KaraokeScene from 'react-karaoke-scene';
import lyric from './lyric';


class App extends Component {
  render() {
    return (
      <div>
        <KaraokeScene
          lyric={lyric}
          backgroundColor="#E5EA96"
        />
      </div>
    );
  }
}


export default App;
