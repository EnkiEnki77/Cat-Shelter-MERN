import React from 'react'
import Nav from './components/Nav'
import DefaultLayout from './layouts/DefaultLayout'

const EditCat = (props) => {
    return (
        <DefaultLayout title="Edit Cat">
            <Nav/>
            {props.message ? <h2>{props.message}</h2> : null}
            <form action="/editcat" method="post" className="cat-form" encType="multipart/form-data">
            <h2>Edit Cat</h2>
            <label htmlFor="name">Name</label>
            <input name='name' type="text" id="name" defaultValue="Pretty Cat"/>
            <label htmlFor="description">Description</label>
            <textarea defaultValue={"Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."} name='description' id="description"/>
            <label htmlFor="image">Image</label>
            <input name='file' type="file" id="image"/>
            <label htmlFor="group">Breed</label>
            <select name='category' id="group">
                <option defaultValue="Fluffy Cat">Fluffy Cat</option>
            </select>
            <button type='submit'>Edit Cat</button>
        </form>
        </DefaultLayout>
    )
}

export default EditCat
