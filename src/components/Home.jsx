import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

export default function Home() {
	return (
		<Fragment>
			<Header>

			</Header>
			<main>
				<h1>
					Home Run!
				</h1>
				<div id="cards-wrapper">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</main>
			<Footer></Footer>

		</Fragment>
	)
}
