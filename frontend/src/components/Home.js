import React, {useEffect, useState} from 'react';
import Song from './Song';
import Button from 'react-bootstrap/Button';



function Home() {
    const [song, setSong] = useState('No song playing');
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
    
    var params = URLHashParser();
    
    
    useEffect(
        () => {
            console.log(params.access_token)
            fetch('http://localhost:8888/current_song?access_token=' + params.access_token,{
                method: 'GET'
            })
            .then(resp => resp.json(), () => console.log('failure'))
            .then(data => console.log(data))
        }, []
    )
	
    return(
        <div>
            <h1>Just some bs</h1>
            <h2>Returned hash: {}</h2>
            <h3>Returned Song: {song}</h3>
        </div>
    )
}



export default Home
