import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';


class Waveform extends Component {
  state = {
    playing: false,
  };

  componentDidMount() {
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };

  render() {
    const url = `//localhost:8001/${this.props.filename}`;

    return (
      <>
        <button onClick={this.handlePlay} >
          {!this.state.playing ? 'Play' : 'Pause'}
        </button>
        <div id="waveform" />
        <audio id="track" src={url} />
        {!this.state.playing &&
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Comments : </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </form>}
      </>
    );
  }
};

export default Waveform;