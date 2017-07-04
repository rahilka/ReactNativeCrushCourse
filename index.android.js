import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native'; 

import Component5 form './app/components/Component5/Component5';
import Component6 form './app/components/Component6/Component6';

export default class Component6 extends Component {

	renderScene(route, navigator) {
		switch(route.id){
			case 'component5': 
				return (<Component5 navigator={navigator} title="Component5" />)
			case 'component6': 
				return (<Component5 navigator={navigator} title="Component6" />)
		}
	}

	render() {

		return (

			<Navigator
				initialRoute={{id: 'component5'}}
				renderScene={this.renderScene}
				configureScreen={(route, routeStack) => Navigator.SceneConfig.FloatFromBotton}
			/>

			);

	}

}

AppRegistry.registerComponent('Component6', () => Component6);
