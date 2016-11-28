import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native'
import {ArticleBox} from './components/articleBox'

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
    		this.setState(_ => {
    			return {
    				data: data
    			}
    		})
    	})
    	.catch(err => {
    		console.log('err: ' + err)
    	})
	}
	render(){
		if(!this.state.data) return(<View><Text>loading</Text></View>)
		let storyData = this.state.data.stories
		return(
			<View style={styles.articleList}>
				<ScrollView>
					{storyData.map(item => {
						return(
							<ArticleBox item={item} key={item.id}/>
						)
					})}
				</ScrollView>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	articleList: {
		flex: 1
	}
})