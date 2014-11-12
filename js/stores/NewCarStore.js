/**
 *	@file: NewCarStore.js
 *	@date: 2014-11-12
 *
 *	保存添加车辆的信息
 *
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _car = {
	'carBrandImg': '',
	'carBrand':    null,
	'carType':     null,
	'carProvince': null,
	'carCityNo':   null,
	'catNo':       null
}

var NewCar = assign({}, EventEmitter.prototype, {
	getCar: function() {
		return _car
	}
})

module.exports = NewCar
