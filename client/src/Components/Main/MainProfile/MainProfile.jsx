import React, { useEffect } from 'react'

export default function MainProfile({ profile }) {
    useEffect(() => {
        console.log(profile);
    });
    
    return (
        <div>
            <h1>{profile.name}</h1>
        </div>
    )
}
