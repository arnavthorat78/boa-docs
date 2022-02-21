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
/***/ (function() {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst downloadButton = document.querySelector(\".download-button\");\r\nconst downloadMessage = document.querySelector(\".download-message\");\r\nconst osIsMac = navigator.platform.toLowerCase().includes(\"mac\");\r\nif (!osIsMac) {\r\n    downloadButton.classList.add(\"disabled\");\r\n    downloadMessage.innerHTML = \"The installer can only be run on <strong>macOS</strong>.\";\r\n}\r\nconst TEXT_CODE = `truth = \"This is the worst code demo ever!\"\\nprint(\"Why would anyone look at this demo? \" + truth)\\nprint(\"I am not even sure if this is a joke...\")\\nstrToIter = \"LOL\"\\n\\nfor char : strToIter do {\\n    \\tprint(char)\\n}\\n\\nfor i = 0 to 5 do {\\n    \\tprint(i)\\n}\\n\\ni = 0\\nwhile i < lenOf(strToIter) do {\\n    \\tprint(strToIter ? i)\\n    \\ti += 1\\n}\\n\\nprint(\"Somehow, this all compiled without a memory error in my interpreter!\")`;\r\nconst carouselList = [{ text: TEXT_CODE }];\r\nconst typeSentence = (sentence, eleRef, delay = 100) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const letters = sentence.split(\"\");\r\n    let i = 0;\r\n    while (i < letters.length) {\r\n        if (TEXT_CODE.charAt(i) == \"\\n\") {\r\n            document.querySelector(\"#sentence\").innerHTML += \"<br />\";\r\n        }\r\n        else if (TEXT_CODE.charAt(i) == \"\\t\") {\r\n            document.querySelector(\"#sentence\").innerHTML += \"&nbsp;&nbsp;&nbsp;&nbsp;\";\r\n        }\r\n        yield waitForMs(delay);\r\n        $(eleRef).append(letters[i]);\r\n        i++;\r\n    }\r\n    return;\r\n});\r\nconst waitForMs = (ms) => {\r\n    return new Promise((resolve) => setTimeout(resolve, ms));\r\n};\r\n$(document).ready(() => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield typeSentence(carouselList[0].text, \"#sentence\");\r\n}));\r\n\n\n//# sourceURL=webpack://boa-docs/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;