/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Build styles
 */
__webpack_require__(/*! ./index.css */ "./src/index.css").toString();
/**
 * @typedef {object} ListData
 * @property {string} style - can be ordered or unordered
 * @property {Array} items - li elements
 */

/**
 * List Tool for the Editor.js 2.0
 */


var SimpleImage = /*#__PURE__*/function () {
  /**
   * Tool class constructor
   * @param {ImageToolData} data — previously saved data
   * @param {object} api — Editor.js Core API {@link  https://editorjs.io/api}
   * @param {ImageToolConfig} config — custom config that we provide to our tool's user
   */
  function SimpleImage(_ref) {
    var data = _ref.data,
        api = _ref.api,
        config = _ref.config,
        readOnly = _ref.readOnly;

    _classCallCheck(this, SimpleImage);

    this.api = api;
    this.config = config || {};
    this.data = {
      math: data.math || '',
      caption: data.caption || '',
      withBorder: data.withBorder !== undefined ? data.withBorder : false,
      withBackground: data.withBackground !== undefined ? data.withBackground : false,
      stretched: data.stretched !== undefined ? data.stretched : false
    };
    this.wrapper = undefined;
    this.readOnly = readOnly;
    this.settings = [{
      name: 'withBorder',
      icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z\"/></svg>"
    }, {
      name: 'stretched',
      icon: "<svg width=\"17\" height=\"10\" viewBox=\"0 0 17 10\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z\"/></svg>"
    }, {
      name: 'withBackground',
      icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z\"/></svg>"
    }];
  }
  /**
   * Return a Tool's UI
   * @return {HTMLElement}
   */


  _createClass(SimpleImage, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('simple-image');

      if (this.data && this.data.math) {
        this._createImage(this.data.math, this.data.caption);

        return this.wrapper;
      }

      var input = document.createElement('input');
      input.placeholder = this.config.placeholder || 'Paste an image math...';
      input.addEventListener('paste', function (event) {
        _this._createImage(event.clipboardData.getData('text'));
      });
      this.wrapper.appendChild(input);
      return this.wrapper;
    }
    /**
     * @private
     * Create image with caption field
     * @param {string} math — image source
     * @param {string} captionText — caption value
     */

  }, {
    key: "_createImage",
    value: function _createImage(math, captionText) {
      var image = document.createElement('p'); // const caption = document.createElement('div');
      // image.src = math;
      // caption.contentEditable = true;
      // caption.innerHTML = captionText || '';

      katex.render(math, image, {
        throwOnError: false
      });
      this.wrapper.innerHTML = '';
      this.wrapper.appendChild(image); // this.wrapper.appendChild(caption);

      this._acceptTuneView();
    }
    /**
     * Extract data from the UI
     * @param {HTMLElement} blockContent — element returned by render method
     * @return {SimpleImageData}
     */

  }, {
    key: "save",
    value: function save(blockContent) {
      var image = blockContent.querySelector('p'); //  const caption = blockContent.querySelector('[contenteditable]');

      return Object.assign(this.data, {
        math: image.innerHTML //  caption: caption.innerHTML || ''

      });
    }
    /**
     * Skip empty blocks
     * @see {@link https://editorjs.io/saved-data-validation}
     * @param {ImageToolConfig} savedData
     * @return {boolean}
     */

  }, {
    key: "validate",
    value: function validate(savedData) {
      if (!savedData.math.trim()) {
        return false;
      }

      return true;
    }
    /**
     * Making a Block settings: 'add border', 'add background', 'stretch to full width'
     * @see https://editorjs.io/making-a-block-settings — tutorial
     * @see https://editorjs.io/tools-api#rendersettings - API method description
     * @return {HTMLDivElement}
     */

  }, {
    key: "renderSettings",
    value: function renderSettings() {
      var _this2 = this;

      var wrapper = document.createElement('div');
      this.settings.forEach(function (tune) {
        var button = document.createElement('div');
        button.classList.add(_this2.api.styles.settingsButton);
        button.classList.toggle(_this2.api.styles.settingsButtonActive, _this2.data[tune.name]);
        button.innerHTML = tune.icon;
        wrapper.appendChild(button);
        button.addEventListener('click', function () {
          _this2._toggleTune(tune.name);

          button.classList.toggle(_this2.api.styles.settingsButtonActive);
        });
      });
      return wrapper;
    }
    /**
     * @private
     * Click on the Settings Button
     * @param {string} tune — tune name from this.settings
     */

  }, {
    key: "_toggleTune",
    value: function _toggleTune(tune) {
      this.data[tune] = !this.data[tune];

      this._acceptTuneView();
    }
    /**
     * Add specified class corresponds with activated tunes
     * @private
     */

  }, {
    key: "_acceptTuneView",
    value: function _acceptTuneView() {
      var _this3 = this;

      this.settings.forEach(function (tune) {
        _this3.wrapper.classList.toggle(tune.name, !!_this3.data[tune.name]);

        if (tune.name === 'stretched') {
          _this3.api.blocks.stretchBlock(_this3.api.blocks.getCurrentBlockIndex(), !!_this3.data.stretched);
        }
      });
    }
    /**
     * Handle paste event
     * @see https://editorjs.io/tools-api#onpaste - API description
     * @param {CustomEvent }event
     */

  }, {
    key: "onPaste",
    value: function onPaste(event) {
      var _this4 = this;

      switch (event.type) {
        case 'tag':
          var imgTag = event.detail.data;

          this._createImage(imgTag.src);

          break;

        case 'file':
          /* We need to read file here as base64 string */
          var file = event.detail.file;
          var reader = new FileReader();

          reader.onload = function (loadEvent) {
            _this4._createImage(loadEvent.target.result);
          };

          reader.readAsDatamath(file);
          break;

        case 'pattern':
          var src = event.detail.data;

          this._createImage(src);

          break;
      }
    }
  }], [{
    key: "toolbox",
    get:
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    function get() {
      return {
        title: 'Image',
        icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
      };
    }
    /**
     * Allow render Image Blocks by pasting HTML tags, files and maths
     * @see {@link https://editorjs.io/paste-substitutions}
     * @return {{tags: string[], files: {mimeTypes: string[], extensions: string[]}, patterns: {image: RegExp}}}
     */

  }, {
    key: "pasteConfig",
    get: function get() {
      return {
        tags: ['IMG'],
        files: {
          mimeTypes: ['image/*'],
          extensions: ['gif', 'jpg', 'png'] // You can specify extensions instead of mime-types

        },
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
        }
      };
    }
    /**
     * Automatic sanitize config
     * @see {@link https://editorjs.io/sanitize-saved-data}
     */

  }, {
    key: "sanitize",
    get: function get() {
      return {
        math: {},
        caption: {
          b: true,
          a: {
            href: true
          },
          i: true
        }
      };
    }
  }, {
    key: "isReadOnlySupported",
    get: function get() {
      return true;
    }
  }]);

  return SimpleImage;
}();

module.exports = SimpleImage;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".simple-image {\r\n    padding: 20px 0;\r\n    font-size: 20px;\r\n}\r\n\r\n.simple-image input,\r\n.simple-image [contenteditable] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid #e4e4e4;\r\n    background: #fff;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    font-size: 14px;\r\n}\r\n\r\n.simple-image p {\r\n    max-width: 100%;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.simple-image.withBorder p {\r\n    border: 1px solid #e8e8eb;\r\n}\r\n\r\n.simple-image.withBackground {\r\n    background: #eff2f5;\r\n    padding: 10px;\r\n}\r\n\r\n.simple-image.withBackground p {\r\n    display: block;\r\n    max-width: 60%;\r\n    margin: 0 auto 15px;\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;;IAEI,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;AACvB","sourcesContent":[".simple-image {\r\n    padding: 20px 0;\r\n    font-size: 20px;\r\n}\r\n\r\n.simple-image input,\r\n.simple-image [contenteditable] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid #e4e4e4;\r\n    background: #fff;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    font-size: 14px;\r\n}\r\n\r\n.simple-image p {\r\n    max-width: 100%;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.simple-image.withBorder p {\r\n    border: 1px solid #e8e8eb;\r\n}\r\n\r\n.simple-image.withBackground {\r\n    background: #eff2f5;\r\n    padding: 10px;\r\n}\r\n\r\n.simple-image.withBackground p {\r\n    display: block;\r\n    max-width: 60%;\r\n    margin: 0 auto 15px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQnVpbGQgc3R5bGVzXHJcbiAqL1xyXG4gcmVxdWlyZSgnLi9pbmRleC5jc3MnKS50b1N0cmluZygpO1xyXG5cclxuIC8qKlxyXG4gICogQHR5cGVkZWYge29iamVjdH0gTGlzdERhdGFcclxuICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdHlsZSAtIGNhbiBiZSBvcmRlcmVkIG9yIHVub3JkZXJlZFxyXG4gICogQHByb3BlcnR5IHtBcnJheX0gaXRlbXMgLSBsaSBlbGVtZW50c1xyXG4gICovXHJcbiBcclxuIC8qKlxyXG4gICogTGlzdCBUb29sIGZvciB0aGUgRWRpdG9yLmpzIDIuMFxyXG4gICovXHJcbiAgY2xhc3MgU2ltcGxlSW1hZ2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgdG9vbCBzaG91bGQgYmUgcGxhY2VkIGF0IHRoZSBUb29sYm94LCBzbyBkZXNjcmliZSBhbiBpY29uIGFuZCB0aXRsZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IHRvb2xib3goKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6ICdJbWFnZScsXHJcbiAgICAgICAgaWNvbjogJzxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAzMzYgMjc2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMjkxIDE1MFY3OWMwLTE5LTE1LTM0LTM0LTM0SDc5Yy0xOSAwLTM0IDE1LTM0IDM0djQybDY3LTQ0IDgxIDcyIDU2LTI5IDQyIDMwem0wIDUybC00My0zMC01NiAzMC04MS02Ny02NiAzOXYyM2MwIDE5IDE1IDM0IDM0IDM0aDE3OGMxNyAwIDMxLTEzIDM0LTI5ek03OSAwaDE3OGM0NCAwIDc5IDM1IDc5IDc5djExOGMwIDQ0LTM1IDc5LTc5IDc5SDc5Yy00NCAwLTc5LTM1LTc5LTc5Vjc5QzAgMzUgMzUgMCA3OSAwelwiLz48L3N2Zz4nXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHJlbmRlciBJbWFnZSBCbG9ja3MgYnkgcGFzdGluZyBIVE1MIHRhZ3MsIGZpbGVzIGFuZCBtYXRoc1xyXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9lZGl0b3Jqcy5pby9wYXN0ZS1zdWJzdGl0dXRpb25zfVxyXG4gICAgICogQHJldHVybiB7e3RhZ3M6IHN0cmluZ1tdLCBmaWxlczoge21pbWVUeXBlczogc3RyaW5nW10sIGV4dGVuc2lvbnM6IHN0cmluZ1tdfSwgcGF0dGVybnM6IHtpbWFnZTogUmVnRXhwfX19XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgcGFzdGVDb25maWcoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGFnczogWydJTUcnXSxcclxuICAgICAgICBmaWxlczoge1xyXG4gICAgICAgICAgbWltZVR5cGVzOiBbJ2ltYWdlLyonXSxcclxuICAgICAgICAgIGV4dGVuc2lvbnM6IFsnZ2lmJywgJ2pwZycsICdwbmcnXSAvLyBZb3UgY2FuIHNwZWNpZnkgZXh0ZW5zaW9ucyBpbnN0ZWFkIG9mIG1pbWUtdHlwZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhdHRlcm5zOiB7XHJcbiAgICAgICAgICBpbWFnZTogL2h0dHBzPzpcXC9cXC9cXFMrXFwuKGdpZnxqcGU/Z3x0aWZmfHBuZykkL2lcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICogQXV0b21hdGljIHNhbml0aXplIGNvbmZpZ1xyXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9lZGl0b3Jqcy5pby9zYW5pdGl6ZS1zYXZlZC1kYXRhfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IHNhbml0aXplKCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF0aDoge30sXHJcbiAgICAgICAgY2FwdGlvbjoge1xyXG4gICAgICAgICAgYjogdHJ1ZSxcclxuICAgICAgICAgIGE6IHtcclxuICAgICAgICAgICAgaHJlZjogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICogVG9vbCBjbGFzcyBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtJbWFnZVRvb2xEYXRhfSBkYXRhIOKAlCBwcmV2aW91c2x5IHNhdmVkIGRhdGFcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcGkg4oCUIEVkaXRvci5qcyBDb3JlIEFQSSB7QGxpbmsgIGh0dHBzOi8vZWRpdG9yanMuaW8vYXBpfVxyXG4gICAgICogQHBhcmFtIHtJbWFnZVRvb2xDb25maWd9IGNvbmZpZyDigJQgY3VzdG9tIGNvbmZpZyB0aGF0IHdlIHByb3ZpZGUgdG8gb3VyIHRvb2wncyB1c2VyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHtkYXRhLCBhcGksIGNvbmZpZyxyZWFkT25seX0pe1xyXG4gICAgICB0aGlzLmFwaSA9IGFwaTtcclxuICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XHJcbiAgXHJcbiAgICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICBtYXRoOiBkYXRhLm1hdGggfHwgJycsXHJcbiAgICAgICAgY2FwdGlvbjogZGF0YS5jYXB0aW9uIHx8ICcnLFxyXG4gICAgICAgIHdpdGhCb3JkZXI6IGRhdGEud2l0aEJvcmRlciAhPT0gdW5kZWZpbmVkID8gZGF0YS53aXRoQm9yZGVyIDogZmFsc2UsXHJcbiAgICAgICAgd2l0aEJhY2tncm91bmQ6IGRhdGEud2l0aEJhY2tncm91bmQgIT09IHVuZGVmaW5lZCA/IGRhdGEud2l0aEJhY2tncm91bmQgOiBmYWxzZSxcclxuICAgICAgICBzdHJldGNoZWQ6IGRhdGEuc3RyZXRjaGVkICE9PSB1bmRlZmluZWQgPyBkYXRhLnN0cmV0Y2hlZCA6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICB0aGlzLndyYXBwZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMucmVhZE9ubHk9cmVhZE9ubHk7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3dpdGhCb3JkZXInLFxyXG4gICAgICAgICAgaWNvbjogYDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1LjggMTAuNTkydjIuMDQzaDIuMzV2Mi4xMzhIMTUuOHYyLjIzMmgtMi4yNXYtMi4yMzJoLTIuNHYtMi4xMzhoMi40di0yLjI4aDIuMjV2LjIzN2gxLjE1LTEuMTV6TTEuOSA4LjQ1NXYtMy40MmMwLTEuMTU0Ljk4NS0yLjA5IDIuMi0yLjA5aDQuMnYyLjEzN0g0LjE1djMuMzczSDEuOXptMCAyLjEzN2gyLjI1djMuMzI1SDguM3YyLjEzOEg0LjFjLTEuMjE1IDAtMi4yLS45MzYtMi4yLTIuMDl2LTMuMzczem0xNS4wNS0yLjEzN0gxNC43VjUuMDgyaC00LjE1VjIuOTQ1aDQuMmMxLjIxNSAwIDIuMi45MzYgMi4yIDIuMDl2My40MnpcIi8+PC9zdmc+YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3N0cmV0Y2hlZCcsXHJcbiAgICAgICAgICBpY29uOiBgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTMuNTY4IDUuOTI1SDQuMDU2bDEuNzAzIDEuNzAzYTEuMTI1IDEuMTI1IDAgMCAxLTEuNTkgMS41OTFMLjk2MiA2LjAxNEExLjA2OSAxLjA2OSAwIDAgMSAuNTg4IDQuMjZMNC4zOC40NjlhMS4wNjkgMS4wNjkgMCAwIDEgMS41MTIgMS41MTFMNC4wODQgMy43ODdoOS42MDZsLTEuODUtMS44NWExLjA2OSAxLjA2OSAwIDEgMSAxLjUxMi0xLjUxbDMuNzkyIDMuNzkxYTEuMDY5IDEuMDY5IDAgMCAxLS40NzUgMS43ODhMMTMuNTE0IDkuMTZhMS4xMjUgMS4xMjUgMCAwIDEtMS41OS0xLjU5MWwxLjY0NC0xLjY0NHpcIi8+PC9zdmc+YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3dpdGhCYWNrZ3JvdW5kJyxcclxuICAgICAgICAgIGljb246IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMC4wNDMgOC4yNjVsMy4xODMtMy4xODNoLTIuOTI0TDQuNzUgMTAuNjM2djIuOTIzbDQuMTUtNC4xNXYyLjM1MWwtMi4xNTggMi4xNTlIOC45djIuMTM3SDQuN2MtMS4yMTUgMC0yLjItLjkzNi0yLjItMi4wOXYtOC45M2MwLTEuMTU0Ljk4NS0yLjA5IDIuMi0yLjA5aDEwLjY2M2wuMDMzLS4wMzMuMDM0LjAzNGMxLjE3OC4wNCAyLjEyLjk2IDIuMTIgMi4wODl2My4yM0gxNS4zVjUuMzU5bC0yLjkwNiAyLjkwNmgtMi4zNXpNNy45NTEgNS4wODJINC43NXYzLjIwMWwzLjIwMS0zLjJ6bTUuMDk5IDcuMDc4djMuMDRoNC4xNXYtMy4wNGgtNC4xNXptLTEuMS0yLjEzN2g2LjM1Yy42MzUgMCAxLjE1LjQ4OSAxLjE1IDEuMDkydjUuMTNjMCAuNjAzLS41MTUgMS4wOTItMS4xNSAxLjA5MmgtNi4zNWMtLjYzNSAwLTEuMTUtLjQ4OS0xLjE1LTEuMDkydi01LjEzYzAtLjYwMy41MTUtMS4wOTIgMS4xNS0xLjA5MnpcIi8+PC9zdmc+YFxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgVG9vbCdzIFVJXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2ltcGxlLWltYWdlJyk7XHJcbiAgXHJcbiAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLm1hdGgpe1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUltYWdlKHRoaXMuZGF0YS5tYXRoLCB0aGlzLmRhdGEuY2FwdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcHBlcjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgXHJcbiAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5jb25maWcucGxhY2Vob2xkZXIgfHwgJ1Bhc3RlIGFuIGltYWdlIG1hdGguLi4nO1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUltYWdlKGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpKTtcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgXHJcbiAgICAgIHJldHVybiB0aGlzLndyYXBwZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBDcmVhdGUgaW1hZ2Ugd2l0aCBjYXB0aW9uIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aCDigJQgaW1hZ2Ugc291cmNlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FwdGlvblRleHQg4oCUIGNhcHRpb24gdmFsdWVcclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZUltYWdlKG1hdGgsIGNhcHRpb25UZXh0KXtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIC8vIGNvbnN0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBcclxuICAgICAvLyBpbWFnZS5zcmMgPSBtYXRoO1xyXG4gICAgICAvLyBjYXB0aW9uLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgIC8vIGNhcHRpb24uaW5uZXJIVE1MID0gY2FwdGlvblRleHQgfHwgJyc7XHJcbiAgICAgIGthdGV4LnJlbmRlcihtYXRoLCBpbWFnZSwge1xyXG4gICAgICAgIHRocm93T25FcnJvcjogZmFsc2VcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgICB0aGlzLndyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgIC8vIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChjYXB0aW9uKTtcclxuICBcclxuICAgICAgdGhpcy5fYWNjZXB0VHVuZVZpZXcoKTtcclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCBkYXRhIGZyb20gdGhlIFVJXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBibG9ja0NvbnRlbnQg4oCUIGVsZW1lbnQgcmV0dXJuZWQgYnkgcmVuZGVyIG1ldGhvZFxyXG4gICAgICogQHJldHVybiB7U2ltcGxlSW1hZ2VEYXRhfVxyXG4gICAgICovXHJcbiAgICBzYXZlKGJsb2NrQ29udGVudCl7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gYmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuICAgIC8vICBjb25zdCBjYXB0aW9uID0gYmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjb250ZW50ZWRpdGFibGVdJyk7XHJcbiAgXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMuZGF0YSwge1xyXG4gICAgICAgIG1hdGg6IGltYWdlLmlubmVySFRNTCxcclxuICAgICAgLy8gIGNhcHRpb246IGNhcHRpb24uaW5uZXJIVE1MIHx8ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiBTa2lwIGVtcHR5IGJsb2Nrc1xyXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9lZGl0b3Jqcy5pby9zYXZlZC1kYXRhLXZhbGlkYXRpb259XHJcbiAgICAgKiBAcGFyYW0ge0ltYWdlVG9vbENvbmZpZ30gc2F2ZWREYXRhXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZShzYXZlZERhdGEpe1xyXG4gICAgICBpZiAoIXNhdmVkRGF0YS5tYXRoLnRyaW0oKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtpbmcgYSBCbG9jayBzZXR0aW5nczogJ2FkZCBib3JkZXInLCAnYWRkIGJhY2tncm91bmQnLCAnc3RyZXRjaCB0byBmdWxsIHdpZHRoJ1xyXG4gICAgICogQHNlZSBodHRwczovL2VkaXRvcmpzLmlvL21ha2luZy1hLWJsb2NrLXNldHRpbmdzIOKAlCB0dXRvcmlhbFxyXG4gICAgICogQHNlZSBodHRwczovL2VkaXRvcmpzLmlvL3Rvb2xzLWFwaSNyZW5kZXJzZXR0aW5ncyAtIEFQSSBtZXRob2QgZGVzY3JpcHRpb25cclxuICAgICAqIEByZXR1cm4ge0hUTUxEaXZFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICByZW5kZXJTZXR0aW5ncygpe1xyXG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuZm9yRWFjaCggdHVuZSA9PiB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIFxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuYXBpLnN0eWxlcy5zZXR0aW5nc0J1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUodGhpcy5hcGkuc3R5bGVzLnNldHRpbmdzQnV0dG9uQWN0aXZlLCB0aGlzLmRhdGFbdHVuZS5uYW1lXSk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHR1bmUuaWNvbjtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG9nZ2xlVHVuZSh0dW5lLm5hbWUpO1xyXG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUodGhpcy5hcGkuc3R5bGVzLnNldHRpbmdzQnV0dG9uQWN0aXZlKTtcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQ2xpY2sgb24gdGhlIFNldHRpbmdzIEJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR1bmUg4oCUIHR1bmUgbmFtZSBmcm9tIHRoaXMuc2V0dGluZ3NcclxuICAgICAqL1xyXG4gICAgX3RvZ2dsZVR1bmUodHVuZSkge1xyXG4gICAgICB0aGlzLmRhdGFbdHVuZV0gPSAhdGhpcy5kYXRhW3R1bmVdO1xyXG4gICAgICB0aGlzLl9hY2NlcHRUdW5lVmlldygpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgc3BlY2lmaWVkIGNsYXNzIGNvcnJlc3BvbmRzIHdpdGggYWN0aXZhdGVkIHR1bmVzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfYWNjZXB0VHVuZVZpZXcoKSB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuZm9yRWFjaCggdHVuZSA9PiB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUodHVuZS5uYW1lLCAhIXRoaXMuZGF0YVt0dW5lLm5hbWVdKTtcclxuICBcclxuICAgICAgICBpZiAodHVuZS5uYW1lID09PSAnc3RyZXRjaGVkJykge1xyXG4gICAgICAgICAgdGhpcy5hcGkuYmxvY2tzLnN0cmV0Y2hCbG9jayh0aGlzLmFwaS5ibG9ja3MuZ2V0Q3VycmVudEJsb2NrSW5kZXgoKSwgISF0aGlzLmRhdGEuc3RyZXRjaGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgcGFzdGUgZXZlbnRcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9lZGl0b3Jqcy5pby90b29scy1hcGkjb25wYXN0ZSAtIEFQSSBkZXNjcmlwdGlvblxyXG4gICAgICogQHBhcmFtIHtDdXN0b21FdmVudCB9ZXZlbnRcclxuICAgICAqL1xyXG4gICAgIHN0YXRpYyBnZXQgaXNSZWFkT25seVN1cHBvcnRlZCgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBvblBhc3RlKGV2ZW50KXtcclxuICAgICAgc3dpdGNoIChldmVudC50eXBlKXtcclxuICAgICAgICBjYXNlICd0YWcnOlxyXG4gICAgICAgICAgY29uc3QgaW1nVGFnID0gZXZlbnQuZGV0YWlsLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLl9jcmVhdGVJbWFnZShpbWdUYWcuc3JjKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxyXG4gICAgICAgICAgLyogV2UgbmVlZCB0byByZWFkIGZpbGUgaGVyZSBhcyBiYXNlNjQgc3RyaW5nICovXHJcbiAgICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQuZGV0YWlsLmZpbGU7XHJcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIFxyXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChsb2FkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlSW1hZ2UobG9hZEV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgfTtcclxuICBcclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhbWF0aChmaWxlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3BhdHRlcm4nOlxyXG4gICAgICAgICAgY29uc3Qgc3JjID0gZXZlbnQuZGV0YWlsLmRhdGE7XHJcbiAgXHJcbiAgICAgICAgICB0aGlzLl9jcmVhdGVJbWFnZShzcmMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBTaW1wbGVJbWFnZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaW1wbGUtaW1hZ2Uge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbXBsZS1pbWFnZSBpbnB1dCxcXHJcXG4uc2ltcGxlLWltYWdlIFtjb250ZW50ZWRpdGFibGVdIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2ltcGxlLWltYWdlIHAge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbXBsZS1pbWFnZS53aXRoQm9yZGVyIHAge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGViO1xcclxcbn1cXHJcXG5cXHJcXG4uc2ltcGxlLWltYWdlLndpdGhCYWNrZ3JvdW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VmZjJmNTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbXBsZS1pbWFnZS53aXRoQmFja2dyb3VuZCBwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogNjAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2ltcGxlLWltYWdlIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaW1wbGUtaW1hZ2UgaW5wdXQsXFxyXFxuLnNpbXBsZS1pbWFnZSBbY29udGVudGVkaXRhYmxlXSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbXBsZS1pbWFnZSBwIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaW1wbGUtaW1hZ2Uud2l0aEJvcmRlciBwIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbXBsZS1pbWFnZS53aXRoQmFja2dyb3VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlZmYyZjU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaW1wbGUtaW1hZ2Uud2l0aEJhY2tncm91bmQgcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMTVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidG9TdHJpbmciLCJTaW1wbGVJbWFnZSIsImRhdGEiLCJhcGkiLCJjb25maWciLCJyZWFkT25seSIsIm1hdGgiLCJjYXB0aW9uIiwid2l0aEJvcmRlciIsInVuZGVmaW5lZCIsIndpdGhCYWNrZ3JvdW5kIiwic3RyZXRjaGVkIiwid3JhcHBlciIsInNldHRpbmdzIiwibmFtZSIsImljb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfY3JlYXRlSW1hZ2UiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJhcHBlbmRDaGlsZCIsImNhcHRpb25UZXh0IiwiaW1hZ2UiLCJrYXRleCIsInJlbmRlciIsInRocm93T25FcnJvciIsImlubmVySFRNTCIsIl9hY2NlcHRUdW5lVmlldyIsImJsb2NrQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJPYmplY3QiLCJhc3NpZ24iLCJzYXZlZERhdGEiLCJ0cmltIiwiZm9yRWFjaCIsInR1bmUiLCJidXR0b24iLCJzdHlsZXMiLCJzZXR0aW5nc0J1dHRvbiIsInRvZ2dsZSIsInNldHRpbmdzQnV0dG9uQWN0aXZlIiwiX3RvZ2dsZVR1bmUiLCJibG9ja3MiLCJzdHJldGNoQmxvY2siLCJnZXRDdXJyZW50QmxvY2tJbmRleCIsInR5cGUiLCJpbWdUYWciLCJkZXRhaWwiLCJzcmMiLCJmaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImxvYWRFdmVudCIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFtYXRoIiwidGl0bGUiLCJ0YWdzIiwiZmlsZXMiLCJtaW1lVHlwZXMiLCJleHRlbnNpb25zIiwicGF0dGVybnMiLCJiIiwiYSIsImhyZWYiLCJpIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=