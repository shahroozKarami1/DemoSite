import React from 'react'
import "./CircleSpinner.css"
import Spinner from 'react-bootstrap/Spinner';

export default function CircleSpinner() {
    return (
        <>

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>



        </>
    )
}
