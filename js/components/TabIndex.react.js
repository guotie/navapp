/**
 *	@file: TabIndex.react.js
 *	@date: 2014-11-11
 *
 *	首页
 *
 */
var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link;

var TabIndex = React.createClass({
	render: function() {
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
				<div className="row-block-50">
					<Link to="addCar">添加车辆信息</Link>
				</div>
			</div>
		</div>
		</div>
		)
	}
})

module.exports = TabIndex
