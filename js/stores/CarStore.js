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

var CHANGE_EVENT = 'change';

var _cars = {}

function create(car) {

}

function update(car) {

}

function remove(car) {

}

var CarStore = assign({}, EventEmitter.prototype, {
})

module.exports = CarStore
