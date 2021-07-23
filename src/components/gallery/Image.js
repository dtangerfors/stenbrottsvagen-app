import React from 'react'

export default function Image(props) {
    return (
    <a className="relative" href={props.image}>
        <figure className="relative pt-100">
            <img src={props.image} alt="" className="absolute w-full h-full top-1/2 transform -translate-y-1/2 object-cover" />
        </figure>
    </a>
    )
}
