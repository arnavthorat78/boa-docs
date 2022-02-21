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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\r\n/**\r\n * The button that will be clicked to download the software.\r\n */\r\nconst downloadButton = document.querySelector(\".download-button\");\r\n/**\r\n * The element for the message to display to the user if their OS does not support the installer.\r\n */\r\nconst downloadMessage = document.querySelector(\".download-message\");\r\n/**\r\n * A boolean value which indicates if the user is on a `macOS` machine.\r\n */\r\nconst osIsMac = navigator.platform.toLowerCase().includes(\"mac\"); // TODO Change navigator.platform to a non-deprecated value\r\nif (!osIsMac) {\r\n    downloadButton.classList.add(\"disabled\");\r\n    downloadMessage.innerHTML = \"The installer can only be run on <strong>macOS</strong>.\";\r\n}\r\n\n\n//# sourceURL=webpack://boa-docs/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;