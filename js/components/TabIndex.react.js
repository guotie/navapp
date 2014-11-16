/**
 *	@file: TabIndex.react.js
 *	@date: 2014-11-11
 *
 *	首页
 *
 */
var React = require('react'),
	utils = require('../utils/utils'),
	CarStore = require('../stores/CarStore');

var Router = require('react-router'),
	Link = Router.Link;

/**
 *	@TabIndex
 *
 *
 */
var TabIndex = React.createClass({
	getInitialState: function() {
		return {
			cars: CarStore.getAll()
		}
	},
	render: function() {
		var cars, defCar;

		console.log(this.state.cars)
		if (utils.sizeOf(this.state.cars)) {
			defCar = CarStore.getDefault()
			console.log(defCar)
			cars = <div className="row-block-50">
					<Link to="listCar">{defCar.carNo}</Link>
					</div>
		} else {
			cars = <div className="row-block-50">
					<Link to="addCar">添加车辆信息</Link>
				</div>
		}
		return (
		<div>
		<header className="bar bar-nav">
  			<h1 className="title">车友团</h1>
		</header>
		<div className="content">
			<div className="line-row">
				<div className="row-block-50">
					<Link to="my">我的</Link>
				</div>
				{cars}
			</div>
		</div>
		</div>
		)
	}
})

module.exports = TabIndex
