/**
 *	@file: NewCarAction.js
 *	@date: 2014-11-13
 *
 *	保存车辆触发的动作
 *
 */
var AppDispatcher = require('../dispatcher/AppDispatcher'),
	NewCarConstants = require('../constants/CarConstants');

var NewCarActions = {

  /**
   * 更新车辆品牌，型号信息
   * @param  {string} brand
   */
  update: function(brand, brandImg, catNo, carType) {
    AppDispatcher.handleViewAction({
      actionType: NewCarConstants.NEWCAR_BRAND_TYPE,
      car: {
      	'carBrand':    brand,
      	'carBrandImg': brandImg,
      	'catCategory': catNo,
      	'carType':     carType
      }
    });
  },
  /**
   * 更新车辆品牌信息
   * @param 
   */
  updateBrand: function(brand, brandImg, catNo) {
  	AppDispatcher.handleViewAction({
      actionType: NewCarConstants.NEWCAR_BRAND,
      car: {
      	'carBrand': brand,
      	'carBrandImg': brandImg,
      	'catCategory': catNo
      }
    });
  },

  /**
   * 更新车辆型号信息
   * @param  
   */
  updateTypes: function(carType) {
  	AppDispatcher.handleViewAction({
      actionType: NewCarConstants.NEWCAR_TYPE,
      car: {
      	'carType': carType
      }
  	})
  },

  // 更新车牌号
  updateCarNo: function(carNo) {
    AppDispatcher.handleViewAction({
      actionType: NewCarConstants.NEWCAR_NO,
      car: {
        'carNo': carNo
      }
    })
  },

  // 点击保存，触发事件
  saveNewCar: function(newCar) {
  	AppDispatcher.handleViewAction({
      actionType: NewCarConstants.NEWCAR_CREATED,
      car: newCar
  	})
  }
}

module.exports = NewCarActions
