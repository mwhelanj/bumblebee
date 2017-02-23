(function(){
	'use strict';

	var menuItem = {
		make: function(type,cls){
			var ele = document.createElement(type);
			ele.clasName = cls;
			return ele;
		}
	};

	module.exports = menuItem;

})();