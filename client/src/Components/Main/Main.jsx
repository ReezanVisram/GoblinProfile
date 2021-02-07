import React, {useState} from 'react'

import MainProfile from './MainProfile/MainProfile';

export default function Main() {
    const getProfile = () => {
        fetch('http://localhost:5000/getProfile', {
            method: 'POST',
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "playerTag": playerTag 
            })
        }).then(res => res.json())
          .then(data => {
              setProfile(data);
          })
    }

    const [playerTag, setPlayerTag] = useState('');
    const [profile, setProfile] = useState(null);


    if (!profile) {
        return (
            <div>
                <h1>Welcome to GoblinProfile</h1>
                    <label>Enter your Player Tag</label>
                    <input placeholder="#XXXXXX" onChange={event => setPlayerTag(event.target.value)} />
                    <button onClick={getProfile}>Show my Profile!</button>
            </div>
        )
    } 

    return <MainProfile profile={profile} />

}
