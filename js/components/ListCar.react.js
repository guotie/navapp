/**
 *	@file: ListCar.react.js
 *	@date: 2014-11-12
 *
 *	列表显示我的车辆信息
 *
 */
var React = require('react'),
	CarStore = require('../stores/CarStore'),
	Router = require('react-router'),
	Link = Router.Link,
	Navigation = Router.Navigation;

var Title = require('./Title.react')

// 列出汽车条目，被ListCar引用
var CarItem = React.createClass({
	mixins: [Navigation],
	_onClick: function() {
		console.log(this.props.car)
		this.transitionTo("/editCar/" , {id:this.props.car.id})
	},

	render: function() {
		var car = this.props.car.car
		return (
			<li className="table-view-cell media">
			<a params={{carBrand: car.carBrand.no+"-"+car.carBrand.name}}
		     className="navigate-right" onClick={this._onClick}>
		      <span className="media-object pull-left icon-pages"></span>
		      <div className="media-body">{car.carBrand} - {car.carType}</div>
		    </a>
			</li>
		)
	}
})

// 
var CarItems = React.createClass({
	getInitialState: function() {
		return CarStore.getAll()
	},

	render: function() {
		var cars = []
		for (var carid in this.state) {
			console.log(this.state[carid])
			cars.push(<CarItem key={carid} car={this.state[carid]} />)
		}

		return (
			<ul className="table-view">
			{cars}
			<li><Link to="addCar">增加新车型</Link></li>
			</ul>
		)
	}
})

var ListCar = React.createClass({

	render: function() {
		return (
		<div>
			<Title title="我的爱车" left="index" />
			<div className="content">
				<CarItems />
			</div>
		</div>
		)
	}
})

module.exports = ListCar
