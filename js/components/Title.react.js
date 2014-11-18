/**
 *	@file: Title.react.js
 *	@date: 2014-11-11
 *
 *	通用页面的title
 *
 */
var React = require('react'),
	Link = require('react-router').Link;

/**
	props: {
	left: {
		to: "",
		click: "",
		name: ""
	},
	right: {
		click: "",
		name: ""
	},
	title: ""
 }
 */
var Title = React.createClass({
	render: function() {
		var a = null,
			right = null;
		if (this.props.left) {
			a = <Link className="pull-left icon icon-left-nav" to={this.props.left}/> 
		}
		if (this.props.right) {
			right = <button className="btn btn-link btn-nav pull-right">{this.props.right.name}</button>
		}
		return (
			<header className="bar bar-nav">
				{a}
  				<h1 className="title">{this.props.title}</h1>
				{right}
			</header>
		)
	}
})

module.exports = Title