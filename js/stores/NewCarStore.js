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
var NewCarConstants = require('../constants/CarConstants');

var _car = {
	'catCategory': '', 
	'carBrandImg': '',
	'carBrand':    null,
	'carType':     null,
	'carProvince': null,
	'carCityNo':   null,
	'carNo':       null
}

var NewCarStore = assign({}, EventEmitter.prototype, {
	getCar: function() {
		return _car
	},
	emitChange: function() {
    	this.emit('NEWCAR_UPDATE_EVENT');
  }
})

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var car;

  switch(action.actionType) {
    case NewCarConstants.NEWCAR_BRAND:
    case NewCarConstants.NEWCAR_TYPE:
    case NewCarConstants.NEWCAR_BRAND_TYPE:
    case NewCarConstants.NEWCAR_NO:
    case NewCarConstants.NEWCAR_PROVINCE:
    case NewCarConstants.NEWCAR_CITY_NO:
  		car = action.car
  		for (var key in car) {
  			_car[key] = car[key]
  		}
    	break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  NewCarStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = NewCarStore
