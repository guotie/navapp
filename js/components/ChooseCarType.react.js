/**
 *	@file: ChooseCarType.react.js
 *	@date: 2014-11-12
 *
 *	选择车辆品牌下的车辆型号
 *
 */
var React = require('react'),
	Router = require('react-router'),
	Navigation = Router.Navigation;

var carBrands = require('../constants/CarbrandConstants');

var CarTypeItem = React.createClass({
	render: function() {
		return (
			<li>car type item</li>
		)
	}
})

var ChooseCarType = React.createClass({
	render: function() {
		return (
			<ul>hoho</ul>
		)
	}
})

module.exports = ChooseCarType
