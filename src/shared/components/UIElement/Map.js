import React from 'react'
import './Map.css'

const Map = props => {
    console.log(props.coordinates.lng)
    return <div className={`map ${props.className}`} style={props.style}>
        <h2>This is a map in lat: {props.coordinates.lat} and lng: {props.coordinates.lng} </h2>
    </div>
}

export default Map
