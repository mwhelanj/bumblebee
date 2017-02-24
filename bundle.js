/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	//'use strict';
	var menuItem = __webpack_require__(3);
	var util = __webpack_require__(2);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	'use strict';
	
	var menu = __webpack_require__(0);
	console.log('My app');
})();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	'use strict';

	var util = __webpack_require__(2);

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



/***/ })
/******/ ]);