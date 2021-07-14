import React from 'react'
import Form from './Form'

function EditBooking(props) {
    return (
        <div className="p-8 bg-white sm:rounded-sm sm:shadow-xl">
            <Form booking={props.booking} user={props.user} />
        </div>
    )
}

export default EditBooking
