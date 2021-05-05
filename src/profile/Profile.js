import React from 'react'

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            {props.name} <br/>
            {props.bio} <br/>
            {props.pro}<br/>
            {props.children}<br/>
            <button onClick={() => props.Show(props.name)}>user</button>
        
            
        </div>
    )
}

export default Profile

