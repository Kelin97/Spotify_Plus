import React from 'react'

const Song = (props) => {
    return(
        <div>
            <h1>Song name: {props.song_name}</h1>
            <h2>Artist name name: {props.artist_name}</h2>
            <h3>Song key: {props.song_key}</h3>
        </div>
    )
}

export default Song