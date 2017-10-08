import React from 'react'

class List extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="list">
				<ul>
					{this.props.items.map((item, index) => 
						(<li key={index}>
							<img src={require(`src/static/media/like${index + 1}.jpg`)}/>
							<h3>{item.title}</h3>
							<p>￥{item.price}起</p>
						</li>)
					)}
				</ul>
			</div>
		);
	}
}

export default List;