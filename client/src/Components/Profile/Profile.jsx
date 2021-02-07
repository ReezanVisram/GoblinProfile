import React, {useEffect} from 'react'

export default function Profile({ props }) {
    useEffect(() => {
        console.log(props.location.state.user)
    })
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}
