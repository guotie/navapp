/**
 *	@file: ChooseCarBrand.react.js
 *	@date: 2014-11-12
 *
 *	选择车辆品牌信息
 *
 */
var React = require('react'),
	Router = require('react-router'),
	Navigation = Router.Navigation;
var carBrands = require('../constants/CarbrandConstants');

var CarBrandItem = React.createClass({
	render: function() {
		 <li className="table-view-cell media">
		    <a className="navigate-right">
		      <span className="media-object pull-left icon-pages"></span>
		      <div className="media-body">{this.props.carBrand.name}</div>
		    </a>
		  </li>
	}
})

var CarBrandSet = React.createClass({
	render: function() {
		var brands = this.props.brands,
			items = [];

		if (brands.length == 0) return;
		brands.map(function(brand) {
			items.push(<CarBrandItem key={brand.name} carBrand={brand}/>) 
		})

		return (
		<div>
			<h1>brands[0].no</h1>
			<ul>{items}</ul>
		</div>
		)
	}
})

var ChooseCarBrand = React.createClass({
	render: function() {
		console.log('choose car brand...')
		return (
		<div>
			<header className="bar bar-nav">
				<a className="icon icon-left-nav pull-left" onClick={this.goBack}>&nbsp;</a>
  				<h1 className="title">选择车辆品牌</h1>
			</header>
			<div className="content">
			</div>
		</div>
		)
	}
})

module.exports = ChooseCarBrand
