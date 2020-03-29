import React from 'react'

export default function Card(props) {
	return (
		<div className="card-wrapper">
			<div className="card-image-wrapper">
				<picture>
					<source type="image/jpeg" srcSet="https://picsum.photos/500/500" />
					<img src="https://picsum.photos/500/500" alt="" />
				</picture>
			</div>
			<div className="card-title-wrapper" dangerouslySetInnerHTML={{ __html: props.title }}/>
			<div className="card-description-wrapper" dangerouslySetInnerHTML={{ __html: props.description}} />
			<div className="card-type-wrapper">{props.type}</div>
		</div>
	)
}
