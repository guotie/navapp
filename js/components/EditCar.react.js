/**
 *	@file: EditCar.react.js
 *	@date: 2014-11-12
 *
 *	显示, 编辑我的车辆的详细信息
 *
 */
var React = require('react'),
	CarStore = require('../stores/CarStore'),
	Title = require('./Title.react'),
	Router = require('react-router'),
	Link = Router.Link

var EditCar = React.createClass({
	getInitialState: function() {
		return CarStore.getById(this.props.params.id) || null
	},
	render: function() {
		var content;

		if (!this.state) {
			content = <div className="content">
			<ul className="table-view">
				<li className="table-view-cell media">
			      <div className="media-body">出错了~~ 没有找到车辆</div>
			 	</li>
			 </ul>
			</div>
		} else {
			content = <div className="content">
				<ul className="table-view">
				<li className="table-view-cell media">
			    <Link to="carBrand" className="navigate-right">
			      <span className="media-object pull-left icon icon-gear"></span>
			      <div className="media-body">{this.state.car.carBrand}</div>
			    </Link>
			 	</li>
			 	<li className="table-view-cell media">
			    <Link to="carType" params={{carBrand: self.state.car.catCategory+"-"+self.state.car.carBrand}}
			     className="navigate-right">
			      <span className="media-object pull-left icon icon-gear"></span>
			      <div className="media-body">{this.state.car.carType}</div>
			    </Link>
			 	</li>
			 	</ul>
			</div>
		}
		return (
			<div>
			<Title title="编辑车辆信息" left="listCar" />
			{content}
			</div>
		)
	}
})

module.exports = EditCar
