(function(){
	//'use strict';
	var menuItem = require('./menu-item.js');
	var util = require('./utils.js');

	var data = [
		'home','contact us', 'about us', 'other'
	];
	console.log('My menu');
	var menu = {
		ele: null,
		data: data,
		menuItem:[],
		init: function(){
			this.initEle();
			this.initEvent();
		},
		initEle: function(){
			var d;
			var mi;
			for (var i = 0, ln = this.data.length;i < ln; i++) {
				d = this.data[i];
				mi = menuItem({
					data:d
				});
				this.menuItem.push(mi);
			}
		},
		initEvent: function(){},
	};
	menu.init();
	
	module.exports = menu;

	

})();
