import React, { useEffect, useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';

export default function LandingCounter({ counter }) {
    let [landingCounter, setLandingCounter] = useState(0)
    useEffect(() => {

        let interval = setInterval(() => {

            setLandingCounter( (Prev)   =>  Prev + 1)


        }, 50);
        if (landingCounter === counter) {
            clearInterval(interval)
        }
        return  ()  =>  clearInterval(interval)
        // clean  up  in react  

    }, [landingCounter])
    return (
        <span>{landingCounter}</span>
    )
}
