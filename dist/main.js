/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#main{\\n    height: 100vh;\\n    width: 100vw;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n}\\n.board{\\n    width: 480px;   \\n    height: 480px;\\n    border: 1px solid salmon;\\n    display: grid;\\n    grid-template-columns: repeat(10, 48px);\\n    grid-template-rows: repeat(10, 48px);\\n}\\n#boards{\\n    display: none;\\n    align-items: center;\\n    justify-content: space-evenly;\\n    width: 100vw;\\n}\\n#finishedMove{\\ndisplay: none;\\n}\\n.cell{\\n    height: 48px;\\n    width: 48px;\\n    border: 1px solid black;\\n    white-space: nowrap;\\noverflow: hidden;\\n    text-overflow: clip;\\n    cursor: crosshair;\\n}\\n.cell:hover{\\n    background-color: green;\\n}\\n\\n.occupied{\\n    background-color: orange;\\n}\\n.hit{\\n    background-color: red !important;\\n    cursor: not-allowed;\\n}\\n.missed{\\n    background-color: black !important;\\n    cursor: not-allowed;\\n}\\n\\n#settings{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n#buttonsDiv{\\n   display: flex;\\n   \\n}\\nbutton{\\n\\n    padding: 20px;\\n    width: 278px;\\n    \\n    font-size: 2rem;\\n}\\n#vsP2{\\n    margin-left: 30px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newGame\": () => (/* binding */ newGame)\n/* harmony export */ });\n/* harmony import */ var _logic_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/game.js */ \"./src/logic/game.js\");\n/* harmony import */ var _logic_default_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/default.js */ \"./src/logic/default.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst main = document.createElement('div');\n/**************GAME SCREEN HTML**************/\nconst playerBoardDiv= document.createElement('div');\nconst player2BoardDiv= document.createElement('div');\nconst boards = document.createElement('div');\nconst finishedMove=document.createElement('button');\nconst moveDescribe=document.createElement('p');\n    main.setAttribute('id', 'main');\n    playerBoardDiv.setAttribute('id', 'pBoard');\n    player2BoardDiv.setAttribute('id', 'cBoard');\n    playerBoardDiv.classList.add('board')\n    player2BoardDiv.classList.add('board')\n    boards.setAttribute('id', 'boards');\n    finishedMove.setAttribute('id', 'finishedMove');\n    moveDescribe.classList.add('moveText');\n    moveDescribe.setAttribute('id', 'moveText');\n    finishedMove.innerText='Finished Move';\n\nboards.append(playerBoardDiv, player2BoardDiv);\nconst body=document.querySelector('body');\nbody.appendChild(main);\n/**************WELCOME SCREEN**************/\nconst playSettings= document.createElement('div');\nconst playTypes=document.createElement('div'); //BUTTON'S DIV\nconst welcomeTitlte= document.createElement('h1');\nconst vsAI=document.createElement('button');\nconst vsP2=document.createElement('button');\n    welcomeTitlte.innerText='Battleship';\n    vsAI.innerText='Player Vs. AI';\n    vsP2.innerText='Player Vs. Player';\n    playSettings.setAttribute('id', 'settings');\n    playTypes.setAttribute('id', 'buttonsDiv');\n    vsAI.setAttribute('id', 'vsAI');\n    vsP2.setAttribute('id', 'vsP2');\nplayTypes.append(vsAI, vsP2);\nplaySettings.append(welcomeTitlte, playTypes);\nmain.append(playSettings,moveDescribe, boards, finishedMove);\n\n\ndocument.getElementById('vsAI').addEventListener('click', ()=>{\n    document.getElementById('settings').style.display='none';\n    const boards = document.querySelector('#boards');\n    boards.style.display='flex';\n   \n    \n})\ndocument.getElementById('vsP2').addEventListener('click', ()=>{\n    document.getElementById('settings').style.display='none';\n    const boards = document.querySelector('#boards');\n    boards.style.display='flex';\n    document.querySelector('#finishedMove').style.display='block';\n  \n   \n    const rematch = document.createElement('button');\n    rematch.setAttribute('id', 'rematch');\n    rematch.innerText = 'Rematch';\n    rematch.style.display = 'none';\n    main.appendChild(rematch);\n    console.log(rematch);\n    newGame();\n  \n})\n \nfunction newGame(){\n    const {\n        player,\n        computer,\n        userBoard,\n        compBoard\n    } = (0,_logic_default_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultPlayers)();\n    (0,_logic_default_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)(userBoard, playerBoardDiv, 'pBoard');\n    (0,_logic_default_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)(compBoard, player2BoardDiv, 'cBoard');\n    const game=new _logic_game_js__WEBPACK_IMPORTED_MODULE_0__.Game(player,computer,userBoard,compBoard, 'vsP2');\n    game.play();\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/logic/default.js":
/*!******************************!*\
  !*** ./src/logic/default.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard),\n/* harmony export */   \"getDefaultPlayers\": () => (/* binding */ getDefaultPlayers)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/logic/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/logic/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/logic/player.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.js */ \"./src/logic/game.js\");\n\n\n\n\n\nconst ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('carrier');\nconst ship1 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('battleship');\nconst ship2 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('cruiser');\nconst ship3 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('submarine');\nconst ship4 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('destroyer');\n\nconst ship5 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('carrier');\nconst ship6 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('battleship');\nconst ship7 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('cruiser');\nconst ship8 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('submarine');\nconst ship9 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship('destroyer');\nconst ships=[ship, ship1, ship2, ship3, ship4];\nconst ships2=[ship5, ship6, ship7, ship8, ship9];\nconst userBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Board('pBoard', 10, 10, ships, ships.length);\nconst compBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Board('cBoard', 10, 10, ships2, ships.length);\nuserBoard.placeShip(ship, 2, 1, 'right');\nuserBoard.placeShip(ship1, 0,5, 'right');\nuserBoard.placeShip(ship2, 7, 1, 'right');\nuserBoard.placeShip(ship3, 5,7, 'bottom'); \nuserBoard.placeShip(ship4, 9, 5, 'right');\n\ncompBoard.placeShip(ship5, 3,0, 'right');\n    compBoard.placeShip(ship6, 5, 7, 'bottom');\n    compBoard.placeShip(ship7, 7,2, 'bottom');\n    compBoard.placeShip(ship8, 1, 7, 'right');\n    compBoard.placeShip(ship9, 0,2, 'right');\n\n    \n    \n    const player= new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player('user', userBoard);\n    const computer= new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player('Computer', compBoard);\n\n    function getDefaultPlayers(){\n\n        return {\n            player,\n            computer,\n            userBoard,\n            compBoard\n        };\n    }\n\n\n\nfunction createBoard(boardName, divName, boardID){\n    \n    for(let i=0; i<boardName.userMap.length; i++){\n        for(let j=0; j<boardName.userMap[i].length; j++){\n            let cell=document.createElement('div');\n            cell.setAttribute(`dataX`, i);\n            cell.setAttribute('dataY', j);\n            cell.classList.add('cell');\n            cell.setAttribute('id', boardID);\n            if(boardName.userMap[i][j].occupied==true){\n            cell.classList.add('occupied')\n            cell.innerText= boardName.userMap[i][j].ship.type;\n            }\n            \n            divName.appendChild(cell);\n        }\n}\n\n}\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/logic/default.js?");

/***/ }),

/***/ "./src/logic/dom.js":
/*!**************************!*\
  !*** ./src/logic/dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endScreen\": () => (/* binding */ endScreen),\n/* harmony export */   \"hidden\": () => (/* binding */ hidden),\n/* harmony export */   \"hitDom\": () => (/* binding */ hitDom),\n/* harmony export */   \"missDom\": () => (/* binding */ missDom),\n/* harmony export */   \"notClickable\": () => (/* binding */ notClickable),\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"sunkedShip\": () => (/* binding */ sunkedShip)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/logic/game.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/logic/gameboard.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ \"./src/logic/default.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\n\n\nfunction hitDom(board, row, colmn){\n    const cell=  document.querySelector(`[datax=\"${row}\"][datay=\"${colmn}\"][id=\"${board.id}\"]`);\n    cell.classList.add('hit');\n}\nfunction missDom(board, row, colmn){\n    const cell=  document.querySelector(`[datax=\"${row}\"][datay=\"${colmn}\"][id=\"${board.id}\"]`);\n    cell.classList.add('missed');\n}\nfunction endScreen(player, computer, userBoard, compBoard){\n    console.log('endScreen called');\n    document.getElementById('finishedMove').style.display='none';\n    document.getElementById('rematch').style.display='block';\n/*     const main = document.getElementById('main'); */\n    if(document.getElementById('rematch')){\n        const rematch= document.querySelector('#rematch');\n    rematch.addEventListener('click', ()=>{ \n        console.log('clicked');\n       \n        \n       \n     clearBoard(userBoard);\n     clearBoard(compBoard);\n        (0,___WEBPACK_IMPORTED_MODULE_3__.newGame)();\n    });\n    \n    }\n\n}\nfunction clearBoard(board){\n  \n    for(let i=0; i<board.userMap.length; i++){\n        for(let j=0; j<board.userMap[i].length; j++){\n            if(board.userMap[i][j].occupied==true){\n                const cell= document.querySelector(`[datax=\"${i}\"][datay=\"${j}\"][id=\"${board.id}\"]`);\n            if(cell.classList.contains('hit')){\n                cell.classList.remove('hit');\n            }\n            else if(cell.classList.contains('missed')){\n                cell.classList.remove('missed');\n            }\n            }}}\n\n        \n}\n\nfunction hidden(board){\n    console.log(board);\nconst boardDiv = document.getElementById(board);\nfor(let i=0; i<boardDiv.childNodes.length; i++){\n    if(!boardDiv.childNodes[i].classList.contains('sunked')){\n        \n    boardDiv.childNodes[i].innerHTML='';\n    }\n    boardDiv.childNodes[i].classList.remove('occupied');\n}\n}\nfunction show(board){\n    console.log('show');\n    console.log(board);\n    const boardDiv = document.getElementById(board.id);\n    let cell;\n    \n    for(let i=0; i<board.userMap.length; i++){\n        for(let j=0; j<board.userMap[i].length; j++){\n            if(board.userMap[i][j].occupied==true){\n                cell= document.querySelector(`[datax=\"${i}\"][datay=\"${j}\"][id=\"${board.id}\"]`);\n            cell.classList.add('occupied')\n            cell.innerText= board.userMap[i][j].ship.type;\n            }\n\n        }\n}\n    }\n    function sunkedShip(board, hitsArr, ship){\n        console.log(board);\n        console.log(hitsArr);\n        for(let i=0; i<hitsArr.length; i++){\n           let cell= document.querySelector(`[datax=\"${hitsArr[i][0]}\"][datay=\"${hitsArr[i][1]}\"][id=\"${board.id}\"]`);\n            cell.innerText = ship.type;\n            cell.classList.add('sunked');\n        }\n    }\n    function notClickable(board, row, colmn){\n        const cell= document.querySelector(`[datax=\"${row}\"][datay=\"${colmn}\"][id=\"${board.id}\"]`);\n        cell.classList.add('clicked');\n    }\n\n\n\n\n//# sourceURL=webpack://battleship/./src/logic/dom.js?");

/***/ }),

/***/ "./src/logic/game.js":
/*!***************************!*\
  !*** ./src/logic/game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/logic/dom.js\");\n\n\nlet hitRow; let r; let c;\nlet hitColmn;\nclass Game{\n    constructor(player1, player2, board1, board2, playType){\n        this.player1=player1;\n        this.player2=player2;\n        this.board1=board1;\n        this.board2=board2;\n        this.playType=playType; \n    }\n    async play(){\n        \n        let currentPlayer=this.player1;\n        let currentBoard = this.board2;\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.hidden)('cBoard');\n        let clicked=true;\n      \n        while(!this.gameEnd(currentBoard, currentPlayer)){\n\n            const {player, targetBoard} = this.turn(currentPlayer, currentBoard);\n            \n\n            const {row, colmn}= await this.getUserClick(currentBoard);\n            console.log(\"currentboard and user is:\");\n            console.log(currentBoard);\n            console.log(currentPlayer);\n           \n            console.log(\"*****************\");\n\n                document.querySelector('#finishedMove').addEventListener('click', ()=>{\n                    clicked=true;\n                    if(currentPlayer==this.player1){\n                     \n                        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.hidden)('cBoard');\n                        document.querySelector('#finishedMove').textContent= \"Curtain!\";\n                      \n                        setTimeout(()=>{(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.show)(this.board1)}, 1000);\n                        setTimeout(()=>{document.querySelector('#finishedMove').textContent='Finished Move'}, 1000);\n                        setTimeout(()=>{document.getElementById('moveText').textContent=`${currentPlayer.playerName} is going to make a move`;\n                    }, 1000)\n\n                    } else if(currentPlayer==this.player2){\n                      \n                        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.hidden)('pBoard');\n                        \n                        \n                        document.querySelector('#finishedMove').textContent= \"Curtain!\";\n                        setTimeout(()=>{(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.show)(this.board2)}, 1000);\n                        setTimeout(()=>{document.querySelector('#finishedMove').textContent='Finished Move'}, 1000);\n                        setTimeout(()=>{document.getElementById('moveText').textContent=`${currentPlayer.playerName} is going to make a move`;\n                    }, 1000)\n                    }\n        \n                });\n                if(clicked==true){\n                   \n                    document.getElementById('moveText').textContent=`${currentPlayer.playerName} is attacking...`;\n                if(currentPlayer.attack(currentBoard, row, colmn)){\n                    this.gameEnd(currentBoard, currentPlayer);           \n                    currentPlayer=player;              \n                    currentBoard=targetBoard;\n                    clicked=false;\n                }\n                    /* notClickable(currentBoard, row, colmn); */\n                    \n\n                }\n        }\n    }\n\n    getUserClick(currentBoard){\n        return new Promise(resolve=>{\n            document.getElementById(currentBoard.id).addEventListener('click', (e)=>{\n            \n                const row =  e.target.getAttribute('datax');\n                const colmn =  e.target.getAttribute('datay');\n                resolve({row, colmn});\n        })\n        })\n       \n}\n       \n      \n    \n    aiMove(currentBoard, currentPlayer){\n        \n        if(hitRow==undefined){\n         r=Math.floor(Math.random()*10);\n         c=Math.floor(Math.random()*10);}\n        else if(hitRow==r && currentBoard.missAttacks[currentBoard.missAttacks.length-1][0]==hitRow+1){\n            r=hitRow+1;\n        }\n        else if(r==hitRow+1){\n                r=hitRow-1;\n        }\n        \n        if(this.player2.attack(currentBoard, r, c)){\n           \n            hitRow=r;\n            hitColmn=c;\n            this.gameEnd(currentBoard, currentPlayer);\n        }\n        console.log(currentBoard.missAttacks);\n    }\n \n        turn(player, targetBoard){\n            console.log(\"turn called\")\n            if(player==this.player1){\n               \n                player=this.player2;\n                targetBoard=this.board1;\n                return {player, targetBoard};\n                \n            }\n            else if(player==this.player2){\n                player=this.player1;\n                targetBoard=this.board2;\n                \n                return {player, targetBoard};\n                \n            }\n           \n            \n        }\n    gameEnd(board, winner){\n        \n       if(board.isAllShipsSunked(board)){\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.endScreen)();\n        return true;\n       }\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/logic/game.js?");

/***/ }),

/***/ "./src/logic/gameboard.js":
/*!********************************!*\
  !*** ./src/logic/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/logic/dom.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/logic/ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/logic/game.js\");\n\n\n\nclass Board{\n    constructor(id,rows, cols, ship, currentShips){\n        this.id=id;\n        this.rows = rows;\n        this.cols = cols;\n        this.userMap = this.createBoard(rows, cols)\n        this.ship = ship;\n        this.currentShips=currentShips;\n    }\n    createBoard(rows, cols){\n        const board=[];\n        for(let i=0; i<rows; i++){\n        const row=[];\n        for(let j=0; j<cols; j++){\n            row.push(\n                {\n                    occupied: false,\n                    hit: false,\n                    ship:null,\n                });\n        }\n        board.push(row);\n\n    }\n    return board;\n}\n\n    placeShip(ship, row, colm, rotation){\n        if(rotation=='right'){\n            for(let i=colm; i<colm+ship.length; i++){\n                this.userMap[row][i].occupied=true;\n                this.userMap[row][i].ship=ship;\n            }\n        }\n        else{\n            for(let i=row; i<row+ship.length; i++){\n                this.userMap[i][colm].occupied=true;\n                this.userMap[i][colm].ship=ship;\n            }\n        }\n     \n    }\n    \n    receiveAttack(board, row, colmn){\n        console.log(this.ship);\n        console.log(row);\n        console.log(colmn);\n     \n       \n        \n        if(this.userMap[row][colmn].occupied==true){\n            const model = this.userMap[row][colmn].ship.type\n            const index = this.ship.findIndex(a=>a.type==model);\n            this.ship[index].hit(row, colmn);\n            \n           \n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hitDom)(board, row, colmn);\n\n            document.getElementById('moveText').textContent=`It's a hit!`;\n            console.log(\"It's a hit!\");\n            console.log(board);\n            return this.isAllShipsSunked(board);\n        }\n        else{\n           \n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.missDom)(board, row, colmn);\n            document.getElementById('moveText').textContent=`It's a miss!`;\n            console.log(`Miss at ${row} | ${colmn}`);\n        }\n  \n    }\n    isAllShipsSunked(board){\n        let sunked=0;\n       /*  console.log(this.ship); */\n        for(let i=0; i<this.ship.length; i++){\n      \n            if(this.ship[i].isSunk()==true){\n                sunked++;\n                console.log(board);\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.sunkedShip)(board, this.ship[i].hits, this.ship[i]);\n            }\n        }\n        if(sunked==this.ship.length){\n            return true;\n        }\n        else{\n            return false;}\n    }\n\n}\n\n\n//# sourceURL=webpack://battleship/./src/logic/gameboard.js?");

/***/ }),

/***/ "./src/logic/player.js":
/*!*****************************!*\
  !*** ./src/logic/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player{\n    constructor(playerName, board){\n        this.playerName = playerName;\n        this.board=board;\n        this.attackedCells=[];\n    }\n     attack(enemyBoard, row, colmn){\n        \n        if(this.attackedCells.some((e)=>e[0]==row && e[1]==colmn)){\n            console.log(\"This cell has already been attacked!\");\n            document.getElementById('moveText').textContent=`This cell has already been attacked`;\n            setTimeout(()=>{document.getElementById('moveText').textContent=`Please make a new move!`},1000);\n\n            return false;\n        }\n        else{\n            this.attackedCells.push([row, colmn]);\n            return setTimeout(()=>{enemyBoard.receiveAttack(enemyBoard, row, colmn)},1000);\n\n        }\n         \n        \n    }\n    \n}\n\n\n\n//# sourceURL=webpack://battleship/./src/logic/player.js?");

/***/ }),

/***/ "./src/logic/ship.js":
/*!***************************!*\
  !*** ./src/logic/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst ships = {\n    carrier: 5,\n    battleship: 4,\n    cruiser: 3,\n    submarine: 3,\n    destroyer: 2\n}\n\nclass Ship{\n        constructor(type){\n            this.type=type;\n            this.length=ships[type];\n            this.sunk = false;\n            this.hits=[];\n        }\n        hit(x, y){\n            this.hits.push([x, y]);\n            this.isSunk();\n           return this.hits;\n           \n        }\n        isSunk(){\n            if(this.length===this.hits.length){\n                this.sunk=true;\n            }\n            return this.sunk;\n        }\n\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/logic/ship.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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