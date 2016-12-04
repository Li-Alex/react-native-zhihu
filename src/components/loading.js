import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions
} from 'react-native'

export class Loading extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			backgroundUrl: ''
		}
	}
	componentDidMount () {
		let url = 'http://news-at.zhihu.com/api/4/start-image/1080*1776'
		fetch(url).then(res => {
			return res.json()
		}).then(data => {
			this.setState({
				backgroundUrl: data.img
			})
		})
	}
	render () {
		let imgUrl = this.state.backgroundUrl
		if(!imgUrl){
			return (
				<View style={styles.bgConatiner}>
					<View style={styles.bottom}>
						<Text style={styles.bottomText}>知乎日报
						</Text>
						<Text style={styles.bottomSubText}>@华农吴彦祖</Text>
					</View>
				</View>
			)
		}
		else {
			return (
				<View style={styles.bgConatiner}>
					<Image style={styles.img} resizeMode={Image.resizeMode.contain} source={{uri: imgUrl}} />
					<View style={styles.bottom}>
						<Text style={styles.bottomText}>知乎日报
						</Text>
						<Text style={styles.bottomSubText}>@华农吴彦祖</Text>
					</View>
				</View>
			)
		}
	}
}
let _width = Dimensions.get('window').width
let _height = Dimensions.get('window').height

let styles = StyleSheet.create({
	bgConatiner: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#222'
	},
	img: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#333',
		minWidth: _width,
		minHeight: _height
	},
	bottom: {
		position: 'absolute',
		flex: 1,
		flexWrap: 'nowrap',
		left: 0,
		right: 0,
		bottom: 0,
		height: 80,
		backgroundColor: '#222'
	},
	bottomText: {
		flex: 0,
		color: '#fff',
		fontSize: 20,
		marginTop: 13,
		marginLeft: 10
	},
	bottomSubText: {
		color: '#858585',
		fontSize: 10,
		marginLeft: 10,
	}
})