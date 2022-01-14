import React from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import Nav from './components/Nav'

function home(props) {
    const petData = props.data.pets
    return (
        <DefaultLayout title='Home'>
            <Nav/>
            <main>
        <section className="cats">
            <ul>
                {petData.map((pets) => (
                <li key={'Cat'}>
					<img src={pets.img} alt="Black Cat"/>
					<h3>{pets.name}</h3>
					<p><span>Breed: </span>{pets.breed}</p>
					<p><span>Description: </span>{pets.description}</p>
					<ul className="buttons">
						<li key={'CatButtonEdit'} className="btn edit"><a href="/editcat">Change Info</a></li>
						<li key={'CatButtonDel'} className="btn delete"><a href="/catshelter">New Home</a></li>
					</ul>
				</li>
				))}
            </ul>
        </section>
    </main>
        </DefaultLayout>
    )
}

export default home