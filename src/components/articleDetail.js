import React from 'react'
import {
	View,
	Text,
	ScrollView,
	WebView,
	StyleSheet,
	Dimensions,
	Image
} from 'react-native'
import {Header} from './header'

export class ArticleDetail extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			pageData: {}
		}
	}
	componentDidMount () {
		this.getData()
	}
	getData () {
		let id = this.props.id
		let url = 'http://news-at.zhihu.com/api/4/news/' + id
		fetch(url).then(res => {
			return res.json()
		}).then(data => {
			this.setState({
				pageData: data
			})
		})
	}
	catchErr () {
		console.warn('err happen')
	}
	getcontent () {
		// 调整html字符串，加入自定义的一些css，img
		let content = this.state.pageData.body
		let cssUrl = this.state.pageData.css
		let imgUrl = this.state.pageData.image
		let injectImg = `<div className="headline"><div class="img-wrap"><img src="${imgUrl}" alt="图片" /></div></div>\n`
		let injectLink = `<link href="${cssUrl}" rel="stylesheet">\n`
		let injectCss = `<style>.content-wrap{padding-bottom:20px!important;} .img-wrap{margin-bottom:-200px;width:${_width};height:250px;overflow:hidden;} .img-wrap img{width:100%}</style>`

		return injectLink + injectCss + injectImg + content
	}
	render () {
		content = this.getcontent()

		if(!content) return(<View><Text>loading..</Text></View>)
		return (
			<View>
				<Header title="返回" navigator={this.props.navigator}></Header>
				<WebView 
					style={styles.webview} 
					source={{html:content}}
					onError={this.catchErr.bind(this)}>
				</WebView>
			</View>
		)
	}
}
let _width = Dimensions.get('window').width
let _height = Dimensions.get('window').height
let styles = StyleSheet.create({
	img: {
		flex: 1,
		width: _width,
		height: 200
	},
	webview: {
		position: 'absolute',
		width: _width,
		height: _height,
		paddingBottom: 50
	}
})