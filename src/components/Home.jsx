import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import useFetch from '../hooks/useFetch';

export default function Home() {
	const portfolio_api = 'http://cmselizabethchowdev.local/wp-json/wp/v2/portfolio';
	const { loading, data } = useFetch(portfolio_api);
	return (
		<Fragment>
			<Header>

			</Header>
			<main>
				<h1>
					Home Run!
				</h1>
				<div id="cards-wrapper">
					{loading && (
						<div className="loader-wrapper">
							<div className="loader">Loader, is loading</div>
						</div>
					)}
					{data &&
						data.length > 0 &&
						data.map((item, index) => (
							<Card
								key={item.id}
								rel="modal:open"
								id={"card-"+item.id}
								images={item.acf.gallery}
								title={item.title.rendered}
								description={item.acf.description}
								type={item.acf.type}
								data-photoindex={index}
								onClick={()=> {
									console.log(item.title.rendered);
								}}/>
						))}
					{/* <Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card /> */}
				</div>
			</main>
			<Footer></Footer>

		</Fragment>
	)
}
