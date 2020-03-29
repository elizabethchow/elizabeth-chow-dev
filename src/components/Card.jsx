import React from 'react'

export default function Card() {
	return (
		<div className="card-wrapper">
			<div className="card-image-wrapper">
				<picture>
					<source type="image/jpeg" srcSet="https://picsum.photos/500/500" />
					<img src="https://picsum.photos/500/500" alt="" />
				</picture>
			</div>
			<div className="card-title-wrapper">card title</div>
			<div className="card-description-wrapper">card description</div>
			<div className="card-type-wrapper">card types</div>
		</div>
	)
}
