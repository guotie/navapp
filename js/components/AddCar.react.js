/**
 *	@file: AddCar.react.js
 *	@date: 2014-11-11
 *
 *	添加车辆信息
 *
 */
var React = require('react'),
	NewCarStore = require('../stores/NewCarStore'),
	Router = require('react-router'),
	Link = Router.Link,
	Redirect = Router.Redirect,
	Navigation = Router.Navigation;

var NewCarActions = require('../actions/NewCarActions');

var AddCar = React.createClass({
	mixins: [Navigation],
	getInitialState: function() {
		var car = NewCarStore.getCar()

		return {
			'catCategory': car.catCategory,
			'carBrandImg': car.carBrandImg,
			'carBrand':    car.carBrand,
			'carType':     car.carType,
			'carProvince': car.carProvince,
			'carCityNo':   car.carCityNo,
			'carNo':       car.carNo
		}
	},

	render: function() {
		var li, self = this;
		if (this.state.catCategory) {
			// 已经选择了品牌
			li = [<li className="table-view-cell media">
			    <Link to="carBrand" className="navigate-right">
			      <span className="media-object pull-left icon icon-gear"></span>
			      <div className="media-body">{this.state.carBrand}</div>
			    </Link>
			 	</li>,
			 	<li className="table-view-cell media">
			    <Link to="carType" params={{carBrand: self.state.catCategory+"-"+self.state.carBrand}}
			     className="navigate-right">
			      <span className="media-object pull-left icon icon-gear"></span>
			      <div className="media-body">{this.state.carType}</div>
			    </Link>
			 	</li>]
		} else {
			// 还没有选择品牌，这时只显示选择品牌一个item
			li = <li className="table-view-cell media">
			    <Link to="carBrand" className="navigate-right">
			      <span className="media-object pull-left icon icon-gear"></span>
			      <div className="media-body">选择品牌</div>
			    </Link>
			 	</li>
		}

		return (
		<div>
			<header className="bar bar-nav">
				<Link to="index" className="icon icon-left-nav pull-left">&nbsp;</Link>
  				<h1 className="title">添加车辆信息</h1>
  				<button className="btn btn-link btn-nav pull-right" onClick={this._onSave}>保存</button>
			</header>
			<div className="content">
			<ul className="table-view">
				{li}
			 	<li className="input-row">
    				<label>车牌号</label>
    				<input type="text" placeholder="苏A"
    				 onChange={this._onChangeCarNo} value={this.state.carNo} autofocus="true" />
  				</li>
			</ul>
			<button className="btn btn-positive btn-block" onClick={this._onSave}>保存</button>
			</div>
		</div>
		)
	},

	// 填写了car no，修改state
	_onChangeCarNo: function(e) {
		this.state.carNo = e.target.value
		NewCarActions.updateCarNo(this.state.carNo)
	},

	_onSave: function() {
		if ((!this.state.carNo) || (!this.state.carBrand)) {
			console.log('car no or car brand MUST fill in.')
			return
		}
		NewCarActions.saveNewCar(this.state)
		// 跳转到首页
		this.transitionTo("index")
	}
})

module.exports = AddCar
