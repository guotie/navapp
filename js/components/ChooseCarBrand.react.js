/**
 *	@file: ChooseCarBrand.react.js
 *	@date: 2014-11-12
 *
 *	选择车辆品牌信息
 *
 */
var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link,
	Navigation = Router.Navigation;
var carBrands = require('../constants/CarbrandConstants'),
	NewCarActions = require('../actions/NewCarActions');

var CarBrandItem = React.createClass({
	_onClick: function(e) {
		NewCarActions.updateBrand(this.props.carBrand.name, this.props.carBrand.image, this.props.carBrand.no)
	},
	render: function() {
		return (
		 <li className="table-view-cell media">
		    <Link to="carType" params={{carBrand: this.props.carBrand.no+"-"+this.props.carBrand.name}}
		     className="navigate-right" onClick={this._onClick}>
		      <span className="media-object pull-left icon-pages"></span>
		      <div className="media-body">{this.props.carBrand.name}</div>
		    </Link>
		  </li>
		)
	}
})

var CarBrandSet = React.createClass({
	render: function() {
		var catName = this.props.catName,
			brands = this.props.brands,
			items = [];

		if (brands.length == 0) return;
		brands.map(function(brand) {
			items.push(<CarBrandItem key={brand.name} carBrand={brand}/>) 
		})

		return (
		<div>
			<p className="brand-segment">{catName}</p>
			<ul className="table-view">{items}</ul>
		</div>
		)
	}
})

var ChooseCarBrand = React.createClass({
	mixins: [Navigation],
	render: function() {
		var allBrands = []

		for (name in carBrands) {
			allBrands.push(<CarBrandSet catName={name} brands={carBrands[name]}/>)
		}

		return (
		<div>
			<header className="bar bar-nav">
				<a className="pull-left" onClick={this.goBack}><span className="icon icon-left-nav "></span></a>
  				<h1 className="title">选择车辆品牌</h1>
			</header>
			<div className="content">
				{allBrands}
			</div>
		</div>
		)
	}
})

module.exports = ChooseCarBrand
