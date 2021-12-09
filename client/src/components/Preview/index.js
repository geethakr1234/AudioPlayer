import React from "react";
import Waveform from './Waveform';


export const Preview = ({ files }) => {
    if (!files.length) {
        return null
    }

    return (
        files.map((file, id) => {
            return(
            <Waveform key={id} filename={file.filename} />
            )
        }
        ))
};