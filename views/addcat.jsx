import React from 'react'
import Nav from './components/Nav'
import DefaultLayout from './layouts/DefaultLayout'

const AddCat = () => {
    return (
        <DefaultLayout title="Add Cat">
            <Nav/>
            <form action="" method="" className="cat-form" encType="multipart/form-data">
            <h2>Add Cat</h2>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="name"/>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description"></textarea>
            <label htmlFor="image">Image</label>
            <input name="upload" type="file" id="image"/>
            <label htmlFor="group">Breed</label>
            <select name="breed" id="group">
                <option defaultValue="Fluffy Cat">Fluffy Cat</option>
				<option defaultValue="Fluffy Cat">Fluffy Cat</option>
				<option defaultValue="Fluffy Cat">Fluffy Cat</option>
            </select>
            <button type="submit">Add Cat</button>
        </form>
        </DefaultLayout>
    )
}

export default AddCat
