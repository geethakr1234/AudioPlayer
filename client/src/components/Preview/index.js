import React, { useRef, useEffect } from "react";
import Waveform from './Waveform';


export const Preview = ({ files }) => {
    console.log(files)
    if (!files.length) {
        return null
    }

    return (files.map((file) =>
        <div id={file.filename}>
        <Waveform/>
            <audio controls>
                <source src={`//localhost:8001/${file.filename}`} type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>
            {/* <img style={{ maxWidth: '200px' }} src={`//localhost:8001/${file.filename}`} alt={file.originalname} /> */}
        </div>
    ))
};