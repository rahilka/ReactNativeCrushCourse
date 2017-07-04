import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheer, TouchableHighlight } from 'react-native'; 

export default class Component4 extends Component {

	constructor() {
		super();

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		this.state = {
			userdataSource: ds,
		}
	}

	componentDidMount() {
		this.fetchusers();
	}

	fetchusers() {
		fetch('url')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					userdataSource: this.state.userdataSource.cloneWithRose(response)
				});
			});
	}

	onPress(user) {} 
		this.props.navigator.push({
			id: '6omponent6'
		});
	}

	renderRow(user, sectionId, rowId, highlightRow) {
		return(
			<TouchableHighligh onPress={() => {this.onPress(user)}>
				<View style={styles.row}>
					<Text style={styles.rowText}>{user.name}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	render() {

		return (

			
			<ListView 
				dataSource = {this.state.userdataSource}
				renderRow={this.renderRow.bind(this)}
			/>

			);

	}

}

const styles = StyleSheet.create({
	row:{
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#f4f4f4',
		marginBotton: 3
	},
	rowText: {
		flex: 1
	}
});

AppRegistry.registerComponent('Component4', () => Component4);
