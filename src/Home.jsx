//"homepage": "/hello-react/build",
import React, { Component } from 'react';
import 'src/static/css/base.css';
import Slider from 'src/component/Slider';
import List from 'src/component/List';

class Home extends Component {
	render() {
		const slides = [
			{ imgSrc: "src/static/media/slide1.jpg" },
			{ imgSrc: "src/static/media/slide2.jpg" },
			{ imgSrc: "src/static/media/slide3.jpg" },
			{ imgSrc: "src/static/media/slide4.jpg" },
		];
		const list = [
			{ imgSrc: "//www.hwtrip.com/attached/image/20161129/LSAA_092016_Journal_Architecture_0025_v1_220x140.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20140522/20131022111042_97070_220x140.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20170222/漫游_220x140.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20140522/20131220160301_62903_300x200.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20160104/1_副本_220x140.png", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20170712/4_220x140.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20170222/日本WiFi1_220x140.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20140522/20130801091921_88694_220x140.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20160302/1_560x350_300x200.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
			{ imgSrc: "//www.hwtrip.com/attached/image/20150820/20150820103510_36242_300x200.jpg", 
				title: "【节后特价】<马尔代夫6星丽世岛（原狄娃岛） LUX island resorts6天4晚自由行>LUX*集团，拖尾沙滩，多国美食", price: 2342 
			},
		];
		return (
			<div className="main">
				<div className="search">
					<img src={require('src/static/media/logo.png')}/>
					<input placeholder="searching..."/>
				</div>
				<Slider items={slides}/>
				<List items={list} />
			</div>
		);
	}
}

export default Home;