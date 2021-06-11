import React from 'react';
import Song from './Song';
import Button from 'react-bootstrap/Button';



function Home() {

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
    
	
    return(
        <div>
            <h1>Just some bs</h1>
            <h2>Returned hash: {params.refresh_token}</h2>
        </div>
    )
}



export default Home
