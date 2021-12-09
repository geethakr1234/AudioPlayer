import WaveSurfer from 'wavesurfer.js';

import React, { useRef, useEffect } from "react";
import Waveform from './Waveform';

export default function Chat(){
  const waveformRef = useRef();

  useEffect(() => {
    if(waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
      });
    }
  }, []);
  
  return(
    <>
      <div ref={waveformRef}>
      </div>
    </>
  )
 }

export const Preview = ({ files }) => {
    // if (!files.length) {
    //     return null
    // }

    return (
        <>
        <Waveform/>
        <audio controls>
            <source src='song.mp3' type="audio/mp3" />
            Your browser does not support the audio tag.
        </audio>
        </>
    )
    // (files.map((file) =>
    //     <>
    //         {/* <audio controls>
    //             <source src={`//localhost:8001/${file.filename}`} type="audio/*" />
    //             Your browser does not support the audio tag.
    //         </audio> */}
    //         <img style={{ maxWidth: '200px' }} src={`//localhost:8001/${file.filename}`} alt={file.originalname} />
    //     </>
    // ))
};