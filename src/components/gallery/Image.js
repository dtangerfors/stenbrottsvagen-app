import React from 'react'

export default function Image({image}) {
    return (
    <a className="relative" href={process.env.GALLERY_URL+image}>
        <figure className="relative pt-100">
            <img src={image} alt="" className="absolute w-full h-full top-1/2 transform -translate-y-1/2 object-cover" />
        </figure>
    </a>
    )
}
