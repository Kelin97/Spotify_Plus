import React from 'react'

const Song = (props) => {
    const music_key = ['C', 'C#/D\u266D', 'D', 'D#/E\u266D', 'E', 'F', 'F#/G\u266D', 'G']
    return(
        <div>
            <h1>Song name: {props.song_name}</h1>
            <h2>Artist name name: {props.artist_name}</h2>
            <h3>Song key: {music_key[props.song_key]}</h3>
        </div>
    )
}

export default Song