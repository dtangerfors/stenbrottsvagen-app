import React from 'react'

function Header(props) {
    return (
        <header className="px-8 pt-32 pb-20 lg:px-20 flex items-center self-start">
            <div className="grid lg:grid-cols-2 gap-20 w-full max-w-screen-xl mx-auto">
            {props.children}
            </div>
        </header>
    )
}

export default Header
