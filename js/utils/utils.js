/**
 *	@file: utils.js
 *	@date: 2014-11-14
 *	@author: guotie
 *
 *	工具
 */

// 计算object中key的数量
var utils = {
	sizeOf: function(o) {
		var size = 0, key;
	    for (key in o) {
	        if (o.hasOwnProperty(key)) size++;
	    }

	    return size;
	}
}

module.exports = utils
