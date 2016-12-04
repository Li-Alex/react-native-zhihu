import React from 'react'
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	Dimensions,
	Animated,
	TouchableOpacity
} from 'react-native'
import {ArticleDetail} from './articleDetail'


export class Banner extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
		this._index = 0
		this._imgLength = this.props.imagesList.length
		this._contentOffsetX = 0
		this._scrollView = null
	}
	_onscroll () {
	}
	_getDetail (id) {
		let navigator = this.props.navigator
		navigator && navigator.push({
			name: 'articleDetail',
            component: ArticleDetail,
            navigator: navigator,
            params: {
            	id: id
            }
		})
	}
	render () {
		let imagesList = this.props.imagesList
		return (
			<ScrollView style={styles.scrollContainer} 
						horizontal={true} 
						showsHorizontalScrollIndicator={false}
						ref={(scrollView) => { this._scrollView = scrollView}}
			>
				<Animated.View style={{flexDirection:'row'}}>
					{imagesList.map(item => {
						return(
							<TouchableOpacity  key={item.id}  onPress={this._getDetail.bind(this,item.id)}>
								<Image style={styles.img} source={{uri: item.image}}>
									<Text style={styles.title}>{item.title}</Text>
								</Image>
							</TouchableOpacity>
						)
					})}
				</Animated.View>
			</ScrollView>
		)
	}
}
let _width = Dimensions.get('window').width
let _height = Dimensions.get('window').height

let styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: _width,
		height: 200
	},
	img: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		width: _width,
		height: 200,
	},
	title: {
		flex: 1,
		flexWrap: 'wrap',
		marginLeft: 10,
		marginBottom: 15,
		color: '#fff',
		fontSize: 18
	}
})