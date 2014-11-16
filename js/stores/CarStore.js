/**
 *	@file: CarStore.js
 *	@date: 2014-11-12
 *
 *	用户的车辆信息
 *
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var utils = require('../utils/utils')
var NewCarConstants = require('../constants/CarConstants')
var stor = window.localStorage;

var CHANGE_EVENT = 'change';
/*
_cars = {
	'id': {
		id: id,
		car : car,	// new car
		isDefault: true or false
	}
}
*/
var _cars = JSON.parse(stor.getItem('cars') || '{}')

function saveStor() {
	stor.setItem('cars', JSON.stringify(_cars))
}
// 新加一个车辆
function create(car) {
	var isDefault = utils.sizeOf(_cars) == 0 ? true : false,
		id = ((+new Date())* 1000000 + Math.floor(Math.random() * 999999)).toString(36);

	_cars[id] = {
	    id: id,
	    car: car,
	    isDefault: isDefault
  	}

	saveStor() 
}

function update(car) {

}

function remove(car) {
	delete _cars[car.id]
}

var CarStore = assign({}, EventEmitter.prototype, {
	getAll: function() {
		return _cars
	},
	getById: function(id) {
		return _cars[id]
	},
	getDefault: function() {
		for (var car in _cars) {
			if (_cars[car].isDefault) {
				return _cars[car].car
			}
		}
	},
	emitChange: function() {
    	this.emit('NEWCAR_UPDATE_EVENT');
  	}
})

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case NewCarConstants.NEWCAR_CREATED:
    	create(action.car)
    	break

    default:
      return true
  }

  CarStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
})

module.exports = CarStore
