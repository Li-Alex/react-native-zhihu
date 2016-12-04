import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
  	StatusBar
} from 'react-native'
import {ArticleBox} from './components/articleBox'
import {Loading} from './components/loading'
import {Header} from './components/header'
import {Banner} from './components/banner'

export class ArticleList extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: null
		}
	}
	componentDidMount(){
    	let newsUrl = 'http://news-at.zhihu.com/api/4/news/latest'
    	fetch(newsUrl)
    	.then(res => {
    		return res.json()
    	})
    	.then(data => {
    		setTimeout(_ => {
    			this.setState(_ => {
	    			return {
	    				data: data
	    			}
	    		})
    		},1000)
    	})
    	.catch(err => {
    		console.log('err: ' + err)
    	})
	}
	getTopImgArr () {
		let topStories = this.state.data.top_stories
		return topStories.map(item => {
			return {
				image: item.image,
				title: item.title,
				id: item.id
			}
		})
	}
	render(){
		if(!this.state.data) return(<Loading />)
		let storyData = this.state.data.stories
		topImgArr = this.getTopImgArr()

		return(
			<View style={styles.articleList}>
				<StatusBar
		          hidden={false}
		          backgroundColor={'rgb(0,139,237)'}
		        />
		        <Header title='首页' navigator={this.props.navigator}></Header>
				<ScrollView style={styles.scrollContainer}>
			        <Banner imagesList={topImgArr} navigator={this.props.navigator}></Banner>
			        <View style={styles.listContainer}>
						{storyData.map(item => {
							return(
								<ArticleBox navigator={this.props.navigator} item={item} key={item.id}/>
							)
						})}
			        </View>
				</ScrollView>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	articleList: {
		flex: 1,
	},
	scrollContainer: {
	},
	listContainer: {
		paddingLeft: 10,
		paddingRight: 10
	}
})