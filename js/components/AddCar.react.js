/**
 *	@file: AddCar.react.js
 *	@date: 2014-11-11
 *
 *	添加车辆信息
 *
 */
var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link,
	Navigation = Router.Navigation;

var AddCar = React.createClass({
	mixins: [Navigation],
	getInitialState: function() {
		return {
			'carBrandImg': '',
			'carBrand':    null,
			'carType':     null,
			'carProvince': null,
			'carCityNo':   null,
			'catNo':       null
		}
	},

	render: function() {
		console.log('add car ...')
		return (
		<div>
			<header className="bar bar-nav">
				<a className="icon icon-left-nav pull-left" onClick={this.goBack}>&nbsp;</a>
  				<h1 className="title">添加车辆信息</h1>
  				<button className="btn btn-link btn-nav pull-right">保存</button>
			</header>
			<div className="content">
			<ul className="table-view">
				<li className="table-view-cell media">
			    <Link to="carBrand" className="navigate-right">
			      <span className="media-object pull-left icon icon-gear"></span>
			      <div className="media-body">选择品牌</div>
			    </Link>
			 	</li>
			 	<li className="table-view-cell media">
			    <a className="navigate-right">
			      <span className="media-object pull-left icon icon-gear"></span>
			      <div className="media-body">选择车型</div>
			    </a>
			 	</li>
			 	<li className="input-row">
    				<label>车牌号</label>
    				<input type="text" placeholder="苏A" />
  				</li>
			</ul>
			<button className="btn btn-positive btn-block">保存</button>
			</div>
		</div>
		)
	}
})

module.exports = AddCar
