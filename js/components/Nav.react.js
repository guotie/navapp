var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link;

var _tabs = require('../constants/NavtabConstants');

var Index = require('./TabIndex.react'),
	Group = require('./TabGroup.react'),
	Forum = require('./TabForum.react'),
	My = require('./TabMy.react');

var Nav = React.createClass({
	getInitialState: function() {
		return {slug: this.props.activeSlug};
	},

	render: function() {
		var self = this;
		var tabitems = _tabs.map(function(tab) {
      		return (
      		<Link to={tab.slug} className='tab-item' key={tab.slug}>
				<span className={tab.icon}></span>
        		<span className='tab-label'>{tab.name}</span>
        	</Link>
        	)
    	});

		return (
			<div>
			<this.props.activeRouteHandler/>
			<nav className='bar bar-tab'>{tabitems}</nav>
			</div>
		)
	}
})

module.exports = Nav;
