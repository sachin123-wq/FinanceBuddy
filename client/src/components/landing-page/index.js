import React, { useEffect } from 'react'

const LandingPage = () => {

    useEffect(() => {
        console.log('hello');
    }, [])

    return (
        <div>
            This is the landing page.
        </div>
    )
}

export default LandingPage
