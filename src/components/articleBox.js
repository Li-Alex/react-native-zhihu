import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native'
import {ArticleDetail} from './articleDetail'

export class ArticleBox extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	_getDetail (){
		let id = this.props.item.id
		let navigator = this.props.navigator
		if(navigator) {
            navigator.push({
            	index: 1,
                name: 'articleDetail',
                component: ArticleDetail,
                navigator: navigator,
                params: {
                	id: id
                }
            })
        }
	}
	render () {
		let item = this.props.item
		return(
			<View>
				<TouchableOpacity style={styles.articleBox} onPress={this._getDetail.bind(this)}>
					<View style={styles.text}>
						<Text>{item.title}</Text>
					</View>
					<View style={styles.imageBox}>
						<Image source={{uri: item.images[0]}} style={styles.image} />
					</View>
				</TouchableOpacity>
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
		marginTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5,
		paddingBottom: 5,
		maxWidth: 750,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderRadius: 6,
		borderStyle: 'solid',
		borderColor: 'rgba(0,0,0,.1)'
	},
	text: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: 5,
		maxWidth: 240,
		height: 80
	},
	imageBox: {
		flexDirection: 'row',
		width:80,
		height:80
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 10
	}
})