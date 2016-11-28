import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native'

export class ArticleBox extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		let item = this.props.item
		return(
			<View style={styles.articleBox}>
				<View style={styles.text}>
					<Text>{item.title}</Text>
				</View>
				<View style={styles.imageBox}>
					<Image source={{uri: item.images[0]}} style={styles.image} />
				</View>
			</View>
		)
	}
}
let styles = StyleSheet.create({
	articleBox: {
		flex: 1,
		flexWrap: 'nowrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
		maxWidth: 750,
		backgroundColor: '#fff',
	},
	text: {
		height: 80,
		backgroundColor: 'blue'
	},
	imageBox: {
		width:120,
		height:80
	},
	image: {
		backgroundColor: 'red',
		width: 120,
		height: 80,
	}
})