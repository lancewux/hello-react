import React from 'react'

class Slider extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		document.querySelector('.slider li').className = '';
		let pos = 0;
		let len = this.props.items.length;
		console.log(len);
		this.timer = setInterval(function() {
			document.querySelectorAll('.slider li')[pos].className = 'none';
			pos++;
			if (pos == len) {
				pos = 0;
			}
			document.querySelectorAll('.slider li')[pos].className = '';
		}, 2000);
	}
	render() { //item.imgSrc
		return (
			<div className="slider">
				<ul>
					{this.props.items.map((item, index) => {
						console.log(item.imgSrc.toString());
						
						// let imgsrc = require(`src/static/media/slide${index + 1}.jpg`);
							return (<li key={index} className="none"><img src={ require(`src/static/media/slide${index + 1}.jpg`) }/></li>);
						}
					)}
				</ul>
			</div>
		);
	}
}

export default Slider;