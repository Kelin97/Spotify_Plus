import React, {useEffect, useState} from 'react';

import Song from './Song';
import NavbarComp from './NavbarComp'
import Container from 'react-bootstrap/Container'

import './Home.css'


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
    
    //const test = current_song.track_info.;
    //<Song song_name = {current_song.track_name} artist_name = {current_song.artist_name} song_key = {current_song.track_key}></Song>

    /*
    <div className = 'home-header'>
                    <div className = 'home-app-title'>
                        <h1 style={{fontWeight: 600}}> Spotify +</h1>
                    </div>
                </div>
    */
    return(
        <div>
            <NavbarComp username = 'fill'></NavbarComp>
            <div className = 'home-body'>
                <h1> Put content here </h1>
                
                <Song song_name = {current_song.track_name} artist_name = {current_song.artist_name} song_key = {current_song.track_key}></Song>
            </div>    
                    
        </div>
    )
}



export default Home
