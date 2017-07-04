import React, { Component } from 'react';
import { AppRegistry, Text, View, TextImput, Switch } from 'react-native'; 

export default class Component3 extends Component {

	constructor(){
		super();
		this.state = {
			textValue='Hello',
			swithValue: false
		}
	}

	onChangeText(value) {
		this.setState({
			textValue: value
		});
	}

	onSubmit() {
		console.log("Input Submitted");
	}

	onSwitchChange(value) {
		tis.setState({
			swithValue: value
		});
	}

	render() {

		return (

			<View>

				<TextInput 
					placeholder="Enter Text"
					value={this.state.textValue}
					onChangeText={(value) => this.onChangeText(value)}
					onSubmitEditing={this.onSubmit}
				/>
				<Text>{this.state.textValue}</Text>
				<Switch 
					value={this.state.swithValue}
					onValueChange={ (value) => this.onSwitchChange(value)}
				/>
			</View>

			);

	}

}

AppRegistry.registerComponent('Component3', () => Component3);