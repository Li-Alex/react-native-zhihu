import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

export class Header extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	onClick () {
		if(this.props.title === '首页') return
		let navigator = this.props.navigator
		navigator && navigator.pop()
	}
	render () {
		return (
			<View style={styles.header}>
				<TouchableOpacity style={styles.touch} onPress={this.onClick.bind(this)}>
					<Text style={styles.title}>{this.props.title}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
let styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'row',
		height: 45,
		backgroundColor: 'rgb(0,139,237)'
	},
	touch: {
		marginLeft: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		fontSize: 18,
		color: '#fff'
	}
})