import React, { useEffect, useLayoutEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';


const Waveform = (props) => {

  const [playing, setPlaying] = useState(false)
  var waveform = null

  console.log(`//localhost:8001/${props.filename}`)
  useLayoutEffect(() => {

    const track = document.querySelector('#track');
    waveform = WaveSurfer.create({
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

    waveform.load(track);

  }, [])

  const handlePlay = () => {
    setPlaying(!playing)
    waveform.playPause();
  };

  return (
    <>
      <button onClick={handlePlay} >
        {!playing ? 'Play' : 'Pause'}
      </button>
      <div id="waveform" />
      {/* <audio id="track" src={`//localhost:8001/${props.filename}`} /> */}
      <audio id="track" >
        <source src={`//localhost:8001/${props.filename}`} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </>
  );
};

export default Waveform;