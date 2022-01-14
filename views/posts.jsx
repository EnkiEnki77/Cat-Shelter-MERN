import React from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import Nav from './components/Nav'

function posts(props) {
    const postData = props.data
    console.log(postData)
    return (
        <DefaultLayout title='home'>
            <Nav/>
            <main>
        <section className="cats">
            <ul>
                {postData.map((posts) => (
                <li key={'Post'}>
					<h3>{posts.title}</h3>
					<p><span>Description: </span>{posts.body}</p>
					<ul className="buttons">
						<li key={'PostEdit'} className="btn edit"><a href="/editcat">Change Info</a></li>
						<li key={'PostDel'} className="btn delete"><a href="/catshelter">New Home</a></li>
					</ul>
				</li>
				))}
            </ul>
        </section>
    </main>
        </DefaultLayout>
    )
}

export default posts