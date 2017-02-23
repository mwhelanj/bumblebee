(function(){
	'use strict';

	var util = require('./util.js');

	function menuItem(config){
	config = config || {};

	var o = {
		ele: null,
		data:null,
		data:config.data,
		init: function(){
			this.initEle();
			this.initEvent();
		},
		initEle: function(){
			this.ele = document.createElement('div','app_menu-item');
			this.ele.innerHTML = this.data;
		},
		initEvent: function(){}
	};
	o.init();
	return o;
	}

	module.exports = menuItem;
})();

