import React, {useEffect, useState} from 'react';
import Song from './Song';
import Button from 'react-bootstrap/Button';



function Home() {
    const [current_song, setSong] = useState({});
    const URLHashParser = () => {
        var hash = window.location.hash.substr(1).split('&');

        var items = {};
        var i = 0;
        while(hash[i] != null){
            var temp_pair = hash[i].split('=');
            items[temp_pair[0]] = temp_pair[1];
            i++;
        }
        
        
        return items;
    }

    
    // Use this later to save the refresh token
    // var setsession = window.sessionStorage.setItem("animals", "cat");
	// var getsession = window.sessionStorage.getItem("animals");
    
    const params = URLHashParser();
  
    useEffect(
        () => {
            fetch('http://localhost:8888/current_song?access_token=' + params.access_token,{
                method: 'GET'
            })
            .then(resp => resp.json(), (resp) => console.log(resp))
            .then(data => setSong(data))
        }, []
    )
    console.log(current_song.track_name);
    return(
        <div>
            <Song song_name = {current_song.track_name} artist_name = {} song_key = {}></Song>
        </div>
    )
}



export default Home
