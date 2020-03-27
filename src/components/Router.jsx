import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Photography from './Photography';
import NotFound from './NotFound';


export default function Router() {
	return (
		<BrowserRouter>
			<div id="wrapper">
				<Switch>
					{/*
						Switches are blocks of content that load components determined by Routes
						- 'exact' matches only when URL matches 'path' exactly
						- 'path' is the pattern for matching
						- 'component' is the component loaded in place of the Switch component. Any components used in Routes must be imported first.
						- Switch tests each Route in order. If there is a match, the component is loaded and Switch stops checking for matches.
					*/}
					<Route exact path="/" component={ Home } />
					<Route exact path="/photography" component={ Photography } />
					<Route component={ NotFound } />
				</Switch>
			</div>
		</BrowserRouter>
	)
}
