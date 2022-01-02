import React from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import Nav from './components/Nav'

function home() {
    return (
        <DefaultLayout title='home'>
            <Nav/>
            
            {/* <Footer/> */}
            welcome to home page
        </DefaultLayout>
    )
}

export default home