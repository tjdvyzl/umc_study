import React from 'react'

export default function Ad(props) {
    return (
        <div>
            {props.isAdOn ? <img src="adImg.svg" alt="" style={{width: "100%", height: "400px"}}/> : ""}
        </div>
    )
}
