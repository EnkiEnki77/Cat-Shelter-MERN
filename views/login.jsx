import React from 'react'
import Nav from './components/Nav'
import DefaultLayout from './layouts/DefaultLayout'

const Login = (props) => {
    return (
        <DefaultLayout title="Edit Cat">
            <Nav/>
            {props.message ? <h2>{props.message}</h2> : null}
            <form action="/login" method="post" className="login-form" encType="multipart/form-data">
            <h2>Login</h2>
            <div>
                <input type='email' name='email' placeholder='Enter email here...'/>
            </div>
            <div>
                <input type='password' name='password' placeholder='Enter password here...'/>
            </div>
            
            <button type='submit'>Login</button>
        </form>
        </DefaultLayout>
    )
}

export default Login
