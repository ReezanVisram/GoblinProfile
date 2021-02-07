import React, {useState} from 'react'

export default function Landing() {
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
        }).then(res => {
            if (res.status === 200) {
                console.log(res.json());
                console.log('Success');
            }
        })
    }

    const [playerTag, setPlayerTag] = useState('');

    return (
        <div>
            <h1>Welcome to GoblinProfile</h1>
                <label>Enter your Player Tag</label>
                <input placeholder="#XXXXXX" onChange={event => setPlayerTag(event.target.value)} />
                <button onClick={getProfile}>Show my Profile!</button>
        </div>
    )
}
