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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);



var getRounds = function getRounds() {
    var rounds = [];
    for (var i = 1; i <= 4; i++) {
        rounds.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'circle' + i, key: 'circle' + i }));
    }
    return rounds;
};

var getContainers = function getContainers() {
    var res = [];
    for (var i = 1; i <= 3; i++) {
        res.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'spinner-container container' + i, key: i },
            getRounds()
        ));
    }
    return res;
};

var Loading = function Loading() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'maskj-conatiner' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'loading' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'spinner' },
                getContainers()
            )
        )
    );
};

var _default = Loading;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getRounds, 'getRounds', '/Users/apple/zp/mobx-react-cnode/app/components/Loading/index.jsx');

    __REACT_HOT_LOADER__.register(getContainers, 'getContainers', '/Users/apple/zp/mobx-react-cnode/app/components/Loading/index.jsx');

    __REACT_HOT_LOADER__.register(Loading, 'Loading', '/Users/apple/zp/mobx-react-cnode/app/components/Loading/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/components/Loading/index.jsx');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_Loading__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_MarkDown__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_less__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_less__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ShowInfo = (_temp = _class = function (_Component) {
    _inherits(ShowInfo, _Component);

    function ShowInfo(props) {
        _classCallCheck(this, ShowInfo);

        var _this = _possibleConstructorReturn(this, (ShowInfo.__proto__ || Object.getPrototypeOf(ShowInfo)).call(this, props));

        _this.state = {
            loading: !props.store[props.dataKey]
        };
        _this._name = props.dataKey.toUpperCase();
        return _this;
    }

    _createClass(ShowInfo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.state.loading) {
                this.props.store['fetch' + this._name]().then(function () {
                    _this2.setState({
                        loading: false
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var loading = this.state.loading,
                _props = this.props,
                dataKey = _props.dataKey,
                store = _props.store,
                name = _props.name;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'main-content' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'main-content-header' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'nav',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                            { to: '/', className: 'to-home' },
                            '\u4E3B\u9875'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'divide' },
                            '/'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'active-route' },
                            name
                        )
                    )
                ),
                loading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_Components_Loading__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_Components_MarkDown__["a" /* default */], { text: store[dataKey].text })
            );
        }
    }]);

    return ShowInfo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
    dataKey: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
}, _temp);
var _default = ShowInfo;


/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ShowInfo, 'ShowInfo', '/Users/apple/zp/mobx-react-cnode/app/components/ShowInfo/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/components/ShowInfo/index.jsx');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    'all': '全部',
    'good': '精华',
    'share': '分享',
    'ask': '问答',
    'job': '招聘'
};

var _default = config;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(config, 'config', '/Users/apple/zp/mobx-react-cnode/app/config.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/config.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);



var MarkDown = function MarkDown(_ref) {
    var text = _ref.text;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'markdown-area', dangerouslySetInnerHTML: {
            __html: text
        } });
};

var _default = MarkDown;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MarkDown, 'MarkDown', '/Users/apple/zp/mobx-react-cnode/app/components/MarkDown/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/components/MarkDown/index.jsx');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Root_config__ = __webpack_require__(5);



var getTab = function getTab(tab, top, good) {
    return top ? '置顶' : good ? '精华' : __WEBPACK_IMPORTED_MODULE_1_Root_config__["a" /* default */][tab];
},
    getClasses = function getClasses(top, good) {
    return classnames({
        'topic-tab': true,
        'topic-nice-tab': top || good
    });
};

var TopicTab = function TopicTab(_ref) {
    var tab = _ref.tab,
        top = _ref.top,
        good = _ref.good;
    return tab || good ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: getClasses(top, good) },
        getTab(tab, top, good)
    ) : null;
};

var _default = TopicTab;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getTab, 'getTab', '/Users/apple/zp/mobx-react-cnode/app/components/TopicTab/index.jsx');

    __REACT_HOT_LOADER__.register(getClasses, 'getClasses', '/Users/apple/zp/mobx-react-cnode/app/components/TopicTab/index.jsx');

    __REACT_HOT_LOADER__.register(TopicTab, 'TopicTab', '/Users/apple/zp/mobx-react-cnode/app/components/TopicTab/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/components/TopicTab/index.jsx');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
	baseUrl: 'http://cnodejs.org',
	port: 2017
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__(28),
    cheerio = __webpack_require__(27),
    _require = __webpack_require__(31),
    StringDecoder = _require.StringDecoder,
    decoder = new StringDecoder('utf-8'),
    _require2 = __webpack_require__(8),
    baseUrl = _require2.baseUrl;


var AsyncGet = function AsyncGet(url) {
    return new Promise(function (reslove, reject) {
        http.get(url, function (res) {
            var chunks = [];
            var size = 0;
            res.on('data', function (chunk) {
                chunks.push(chunk);
                size += chunk.length;
            });
            res.on('end', function () {
                var buf = Buffer.concat(chunks, size);
                reslove(decoder.write(buf));
            });
        }).on('error', function (e) {
            reject(e);
        });
    });
};

var CheerFilter = function CheerFilter(html) {
    return cheerio.load(html)(".topic_content").html();
};

var HandleRequest = function HandleRequest(req, res) {
    setTimeout(function () {
        AsyncGet(baseUrl + req.route.path).then(function (html) {
            res.status(200).json({
                text: CheerFilter(html)
            });
        }, function (e) {
            return console.log(e);
        });
    }, 2000);
};

var getData = function getData(url) {
    return function (req, res) {
        var path = req._parsedUrl.path;

        url = url || '';
        AsyncGet(baseUrl + '/api/v1' + path + url).then(function (data) {
            res.status(200).json(data);
        });
    };
};

module.exports = {
    AsyncGet: AsyncGet,
    HandleRequest: HandleRequest,
    getData: getData
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(decoder, 'decoder', '/Users/apple/zp/mobx-react-cnode/utils.js');

    __REACT_HOT_LOADER__.register(AsyncGet, 'AsyncGet', '/Users/apple/zp/mobx-react-cnode/utils.js');

    __REACT_HOT_LOADER__.register(CheerFilter, 'CheerFilter', '/Users/apple/zp/mobx-react-cnode/utils.js');

    __REACT_HOT_LOADER__.register(HandleRequest, 'HandleRequest', '/Users/apple/zp/mobx-react-cnode/utils.js');

    __REACT_HOT_LOADER__.register(getData, 'getData', '/Users/apple/zp/mobx-react-cnode/utils.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Containers_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Containers_API__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Containers_GetStart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Containers_About__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Containers_Topic__ = __webpack_require__(20);









var Container = function Container(_ref) {
    var children = _ref.children,
        location = _ref.location;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group___default.a,
        {
            component: 'div',
            className: 'tranistion-wrapper',
            transitionName: 'route',
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: location.pathname, className: 'router-container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'main-container' },
                children
            )
        )
    );
};

var _default = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { path: '/(?)', component: Container },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_3_Containers_index__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'api', component: __WEBPACK_IMPORTED_MODULE_4_Containers_API__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'getstart', component: __WEBPACK_IMPORTED_MODULE_5_Containers_GetStart__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6_Containers_About__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'topic/:id', component: __WEBPACK_IMPORTED_MODULE_7_Containers_Topic__["a" /* default */] })
);

/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Container, 'Container', '/Users/apple/zp/mobx-react-cnode/app/routes.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/routes.jsx');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



function BaseFetch(url, cb) {
    return fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        return cb(data);
    });
}
var getData = function getData(key) {

    var data = typeof localStorage === 'undefined' ? null : localStorage.getItem('mobx-cnode-' + key);
    return data && JSON.parse(data);
};
var getPath = function getPath() {
    var _location = location,
        pathname = _location.pathname;

    return pathname === '/' ? 'all' : pathname;
};
var Store = (_class = function () {
    function Store() {
        _classCallCheck(this, Store);

        _initDefineProp(this, 'api', _descriptor, this);

        _initDefineProp(this, 'getstart', _descriptor2, this);

        _initDefineProp(this, 'about', _descriptor3, this);

        _initDefineProp(this, 'list', _descriptor4, this);

        _initDefineProp(this, 'topic', _descriptor5, this);

        console.log('init');
    }

    _createClass(Store, [{
        key: 'fetchAPI',
        value: function fetchAPI() {
            return Store.fetchData.call(this, 'api');
        }
    }, {
        key: 'fetchGETSTART',
        value: function fetchGETSTART() {
            return Store.fetchData.call(this, 'getstart');
        }
    }, {
        key: 'fetchABOUT',
        value: function fetchABOUT() {
            return Store.fetchData.call(this, 'about');
        }
    }, {
        key: 'fetchList',
        value: function fetchList(query) {
            var _this = this;

            return fetch('/server/api/v1/topics?' + query).then(function (res) {
                return res.json();
            }).then(function (data) {
                data = JSON.parse(data);
                _this.list = data.data;
            });
        }
    }, {
        key: 'fetchTopic',
        value: function fetchTopic(id) {
            var _this2 = this;

            return BaseFetch('/server/api/v1/topic/' + id, function (data) {
                data = JSON.parse(data).data;
                _this2.topic = data;
            });
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(key) {
            var _this3 = this;

            return BaseFetch('/server/' + key, function (data) {
                _this3[key] = data;
                localStorage.setItem('mobx-cnode-' + key, JSON.stringify(data));
            });
        }
    }]);

    return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'api', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
    enumerable: true,
    initializer: function initializer() {
        return getData('api');
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'getstart', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
    enumerable: true,
    initializer: function initializer() {
        return getData('getstart');
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'about', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
    enumerable: true,
    initializer: function initializer() {
        return getData('about');
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'list', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'topic', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
})), _class);
var _default = Store;


/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BaseFetch, 'BaseFetch', '/Users/apple/zp/mobx-react-cnode/app/stores/index.jsx');

    __REACT_HOT_LOADER__.register(getData, 'getData', '/Users/apple/zp/mobx-react-cnode/app/stores/index.jsx');

    __REACT_HOT_LOADER__.register(getPath, 'getPath', '/Users/apple/zp/mobx-react-cnode/app/stores/index.jsx');

    __REACT_HOT_LOADER__.register(Store, 'Store', '/Users/apple/zp/mobx-react-cnode/app/stores/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/stores/index.jsx');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(9),
    getData = _require.getData,
    _require2 = __webpack_require__(8),
    baseUrl = _require2.baseUrl,
    _require3 = __webpack_require__(9),
    HandleRequest = _require3.HandleRequest;

module.exports = function (app, express) {
    var ServerRouter = express.Router(),
        APIRouter = express.Router();

    APIRouter.get('/topics', getData('&limit=40'));
    APIRouter.get('/topic/:id', getData());
    app.use('/server/api/v1', APIRouter);

    ServerRouter.get('/api', HandleRequest);
    ServerRouter.get('/getstart', HandleRequest);
    ServerRouter.get('/about', HandleRequest);
    app.use('/server', ServerRouter);
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_less__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_less__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Page = (_temp = _class = function (_Component) {
    _inherits(Page, _Component);

    _createClass(Page, null, [{
        key: 'getLinks',
        value: function getLinks(active, end, limit) {
            var mid = ~~(limit / 2),
                res = [],
                flag = end - mid > active;
            var s, e;
            if (active - mid <= 1) {
                s = 1;
                e = end < limit ? end : limit;
            } else {
                res.push({ text: '...', page: null });
                if (!flag) {
                    s = end - limit + 1;
                    e = end;
                } else {
                    s = active - mid;
                    e = active + mid;
                }
            }
            for (var i = s; i <= e; i++) {
                res.push({ text: i, page: i });
            }
            flag && res.push({ text: '...', page: null });
            return res;
        }
    }]);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this.state = {
            active: props.active
        };
        return _this;
    }

    _createClass(Page, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                end = _props.end,
                link = _props.link,
                limit = _props.limit,
                active = this.state.active,
                pageLinks = Page.getLinks(active, end, limit);

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'page-area' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        active === 1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'page-link-to first-page' },
                            '\xAB'
                        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                            { to: '/?' + link + '=1', className: 'first-page' },
                            '\xAB'
                        )
                    ),
                    pageLinks.map(function (page, i) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'li',
                            { key: i },
                            page.page ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                { 'data-page': page.page,
                                    to: '/?' + link + '=' + page.page,
                                    className: page.page === active ? 'active-page' : ''
                                },
                                page.text
                            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'dot' },
                                page.text
                            )
                        );
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        active === end ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'page-link-to end-page' },
                            '\xBB'
                        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                            { to: '/?' + link + '=' + end, className: 'end-page' },
                            '\xBB'
                        )
                    )
                )
            );
        }
    }]);

    return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
    limit: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired,
    active: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired,
    end: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired,
    link: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
}, _class.defaultProps = {
    limit: 5
}, _temp);
var _default = Page;


/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Page, 'Page', '/Users/apple/zp/mobx-react-cnode/app/components/Page/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/components/Page/index.jsx');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_ShowInfo__ = __webpack_require__(4);




var API = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('store')(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(function (_ref) {
    var store = _ref.store;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_Components_ShowInfo__["a" /* default */], { store: store, name: 'API', dataKey: 'api' });
}));

var _default = API;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(API, 'API', '/Users/apple/zp/mobx-react-cnode/app/containers/API.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/containers/API.jsx');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_ShowInfo__ = __webpack_require__(4);




var About = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('store')(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(function (_ref) {
    var store = _ref.store;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_Components_ShowInfo__["a" /* default */], { store: store, name: '\u5173\u4E8E', dataKey: 'about' });
}));

var _default = About;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(About, 'About', '/Users/apple/zp/mobx-react-cnode/app/containers/About.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/containers/About.jsx');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_ShowInfo__ = __webpack_require__(4);




var GetStart = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('store')(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(function (_ref) {
    var store = _ref.store;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_Components_ShowInfo__["a" /* default */], { store: store, name: '\u65B0\u624B\u5165\u95E8', dataKey: 'getstart' });
}));

var _default = GetStart;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(GetStart, 'GetStart', '/Users/apple/zp/mobx-react-cnode/app/containers/GetStart.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/containers/GetStart.jsx');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_Loading__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_MarkDown__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_TopicTab__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Styles_topic_less__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Styles_topic_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_Styles_topic_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Root_config__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Topic = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('store'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = function (_Component) {
    _inherits(Topic, _Component);

    function Topic(props) {
        _classCallCheck(this, Topic);

        var _this = _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).call(this, props));

        _this.state = {
            loading: true,
            topic: props.store.topic,
            id: props.params.id
        };
        return _this;
    }

    _createClass(Topic, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var store = this.props.store;

            store.fetchTopic(this.state.id).then(function () {
                console.log(store.topic);
                _this2.setState({
                    loading: false,
                    data: store.topic
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                loading = _state.loading,
                data = _state.data;

            return loading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_Components_Loading__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'topic-content-conatiner main-content' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'topic-header' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'topic-header-title' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_Components_TopicTab__["a" /* default */], { tab: data.tab, good: data.good, top: data.top }),
                        data.title
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'topic-header-info' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            null,
                            '\u4F5C\u8005 ',
                            data.author.loginname,
                            ' '
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            null,
                            data.visit_count,
                            ' \u6B21\u6D4F\u89C8 '
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            null,
                            '\u6765\u81EA ',
                            __WEBPACK_IMPORTED_MODULE_6_Root_config__["a" /* default */][data.tab],
                            ' '
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_Components_MarkDown__["a" /* default */], { text: data.content })
            );
        }
    }]);

    return Topic;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
var _default = Topic;


/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Topic, 'Topic', '/Users/apple/zp/mobx-react-cnode/app/containers/Topic.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/containers/Topic.jsx');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Loading__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_Page__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_TopicTab__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Root_config__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var TopicList = function TopicList(_ref) {
    var list = _ref.list;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'topic-list' },
        list.map(function (val) {
            var tab = val.tab,
                top = val.top,
                good = val.good,
                id = val.id,
                title = val.title,
                reply_count = val.reply_count,
                visit_count = val.visit_count,
                author = val.author,
                classes = classnames({
                'topic-tab': true,
                'topic-nice-tab': top || good
            });

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { key: id, className: 'cell' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: author.avatar_url, title: author.loginname, className: 'user-img' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'topic-counts' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'reply-count' },
                        reply_count
                    ),
                    '/',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'visit-count' },
                        visit_count
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_Components_TopicTab__["a" /* default */], { tab: tab, good: good, top: top }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/topic/' + id, className: 'topic-title' },
                    title
                )
            );
        })
    );
};

var Index = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('store'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.state = _this.getState(props.store);
        return _this;
    }

    _createClass(Index, [{
        key: 'getState',
        value: function getState(store) {
            var list = store.list;

            return {
                loading: !list.length,
                list: list
            };
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props$location$query = this.props.location.query,
                tab = _props$location$query.tab,
                page = _props$location$query.page;

            this.state.tab = tab || 'all';
            this.state.page = +page || 1;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var _state = this.state,
                tab = _state.tab,
                page = _state.page,
                nextTab = nextProps.location.query.tab || 'all',
                nextPage = +nextProps.location.query.page || 1,
                flag = tab === nextTab && page === nextPage; // 防止点击同一url也会re-render

            this.flag = flag;
            if (!flag) {
                this.setState({
                    loading: true,
                    tab: nextTab,
                    page: nextPage
                }, function () {
                    _this2.getList();
                });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            var res = !this.flag;
            this.flag = false;
            return res;
        }
    }, {
        key: 'getList',
        value: function getList() {
            var _this3 = this;

            var store = this.props.store,
                _state2 = this.state,
                tab = _state2.tab,
                page = _state2.page;

            store.fetchList('tab=' + tab + '&page=' + page).then(function () {
                _this3.setState(_this3.getState(store));
            });
        }
    }, {
        key: 'getHeader',
        value: function getHeader() {
            var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_6_Root_config__["a" /* default */]),
                tab = this.state.tab;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'main-content-header' },
                keys.map(function (key) {
                    var classes = classnames({
                        'index-container-tab': true,
                        'active-container-tab': tab === key
                    });
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                        { to: '/?tab=' + key,
                            key: key,
                            className: classes
                        },
                        __WEBPACK_IMPORTED_MODULE_6_Root_config__["a" /* default */][key]
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _state3 = this.state,
                loading = _state3.loading,
                list = _state3.list,
                tab = _state3.tab,
                page = _state3.page;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'main-content' },
                loading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'mask-container' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_Components_Loading__["a" /* default */], null)
                ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'conatiner' },
                    this.getHeader(),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TopicList, { list: list }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_Components_Page__["a" /* default */], { active: page, end: 15, link: 'tab=' + tab + '&page' })
                )
            );
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);
var _default = Index;


/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TopicList, 'TopicList', '/Users/apple/zp/mobx-react-cnode/app/containers/index.jsx');

    __REACT_HOT_LOADER__.register(Index, 'Index', '/Users/apple/zp/mobx-react-cnode/app/containers/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/apple/zp/mobx-react-cnode/app/containers/index.jsx');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Stores__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__router__);










var app = new __WEBPACK_IMPORTED_MODULE_2_express___default.a(),
    port = 9000;

app.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname)));
// server端接口
__WEBPACK_IMPORTED_MODULE_8__router___default()(app, __WEBPACK_IMPORTED_MODULE_2_express___default.a);
// 渲染
app.use(function (req, res, next) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* default */], location: req.url }, function (err, redirect, props) {
        console.log(props);
        if (err) {
            res.status(500).end('Interal Server Error');
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            var store = new __WEBPACK_IMPORTED_MODULE_7_Stores__["a" /* default */]();
            html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_mobx_react__["Provider"],
                { store: store },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["RouterContext"], props)
            ));
            res.render('index.ejs', {
                html: html,
                title: 'text'
            });
        } else {
            res.status(404).end('404 Not Found');
        }
    });
});

app.listen(port, function () {
    console.log('server is on ' + port);
});
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(app, 'app', '/Users/apple/zp/mobx-react-cnode/app.js');

    __REACT_HOT_LOADER__.register(port, 'port', '/Users/apple/zp/mobx-react-cnode/app.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, ""))

/***/ })
/******/ ]);