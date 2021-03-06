import React from 'react'

const Nav = () => {
    return (
        <header>
        <nav>
            <ul className="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/addbreed">Add Breed</a></li>
                <li><a href="/addcat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search">
            <input type="text"/>
            <button type="button">Search</button>
        </form>
    </header>
    )
}

export default Nav
