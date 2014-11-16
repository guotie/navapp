/**
 *	@file: ChooseCarType.react.js
 *	@date: 2014-11-12
 *
 *	选择车辆品牌下的车辆型号
 *
 */
var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link,
	Redirect = Router.Redirect,
	Navigation = Router.Navigation;

var carBrands = require('../constants/CarbrandConstants'),
	NewCarActions = require('../actions/NewCarActions');

var CarTypeItem = React.createClass({
	_onClick: function(e) {
		console.log('car type item clicked.')
		NewCarActions.updateTypes(this.props.name)
		Redirect(to="addCar")
	},
	render: function() {
		return (
			<li>
				<Link to="addCar" onClick={this._onClick}><div className="media-body">{this.props.name}</div></Link>
			</li>
		)
	}
})

var ChooseCarType = React.createClass({
	_getCarFromParam: function() {
		var _car,
			params = this.props.params.carBrand.split('-'),
			carNo = params[0],
			carBrand = params[1];
		var cars = carBrands[carNo] || [],
			i = 0;
		
		for (; i < cars.length; i ++) {
			if (cars[i].name == carBrand) {
				_car = cars[i];
				return _car;
			}
		}
		// 没有任何信息
		return null;
	},

	render: function() {
		var items = [];
		var choosedCar = this._getCarFromParam();

		for (i = 0; i < choosedCar.types.length; i ++) {
			items.push(<CarTypeItem name={choosedCar.types[i]} />)
		}

		return (
		<div>
			<header className="bar bar-nav">
				<a className="pull-left" onClick={this.goBack}><span className="icon icon-left-nav "></span></a>
  				<h1 className="title">选择车辆型号</h1>
			</header>
			<div className="content">
				<ul className="table-view">{items}</ul>
			</div>
		</div>
		)
	}
})

module.exports = ChooseCarType
