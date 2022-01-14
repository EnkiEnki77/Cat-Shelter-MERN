import React from 'react'
import Nav from './components/Nav'
import DefaultLayout from './layouts/DefaultLayout'

const CatShelter = () => {
    return (
        <DefaultLayout title="Cat Shelter">
            <Nav/>
            <form action="#" className="cat-form">
            <h2>Shelter the cat</h2>
            <img src="https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_1280.jpg" alt=""/>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" defaultValue="Pretty Kitty" disabled/>
            <label htmlFor="description">Description</label>
            <textarea id="description" disabled>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</textarea>
            <label htmlFor="group">Breed</label>
            <select id="group" disabled>
                <option defaultValue="Fluffy Cat">Fluffy Cat</option>
            </select>
            <button>SHELTER THE CAT</button>
        </form>
        </DefaultLayout>
    )
}

export default CatShelter
