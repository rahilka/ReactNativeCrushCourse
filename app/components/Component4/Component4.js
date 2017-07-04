import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet } from 'react-native'; 

import Component4 from './app/components/Component4/Component4';

const users = [
	{name: 'Rahilka Simonova'},
	{name: 'Risto Simonov'},
	{name: 'Ljubica Simonova'},
	{name: 'Ana Simonova'}
];

export default class myapp extends Component {

	constructor() {
		super();

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
		this.state = {
			userdataSource: ds.cloneWithRows(users),
		}
	}

	renderRow(user, sectionId, rowId, highlightRow) {
		return(
			<View style={styles.row}>
				<Text style={styles.rowText}>{user.name}</Text>
			</View>
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

AppRegistry.registerComponent('myapp', () => myapp);