import React from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import Nav from './components/Nav'

function about() {
    return (
        <DefaultLayout>
            <Nav/>
            Welcome to about page
        </DefaultLayout>
    )
}

export default about
