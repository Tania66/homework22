/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var images = [{\n  src: \"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260\"\n}, {\n  src: \"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260\"\n}, {\n  src: \"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260\"\n}, {\n  src: \"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg\"\n}, {\n  src: \"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg\"\n}, {\n  src: \"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg\"\n}, {\n  src: \"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg\"\n}, {\n  src: \"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg\"\n}];\nvar slider = document.querySelector(\".slider\");\nvar dotsContainer = document.querySelector(\".slider-dots\");\nvar prevBtn = document.querySelector(\".prev-button\");\nvar nextBtn = document.querySelector(\".next-button\");\nvar sliderCount = images.length;\nvar indexSlide = 0;\nfunction createImgSlides() {\n  images.forEach(function (element) {\n    var slide = document.createElement(\"img\");\n    slide.classList.add(\"images\");\n    slide.src = element.src;\n    slider.append(slide);\n  });\n}\ncreateImgSlides();\nfunction createDots() {\n  for (var i = 1; i <= sliderCount; i++) {\n    var spanEl = document.createElement(\"span\");\n    spanEl.classList.add(\"dots-item\");\n    dotsContainer.append(spanEl);\n  }\n}\ncreateDots();\nfunction updateSlide() {\n  var allSlides = slider.querySelectorAll(\"img\");\n  allSlides.forEach(function (element, index) {\n    if (index === indexSlide) {\n      element.style.display = \"block\";\n    } else {\n      element.style.display = \"none\";\n    }\n    if (indexSlide === 0) {\n      prevBtn.style.display = \"none\";\n    } else {\n      prevBtn.style.display = \"block\";\n    }\n    if (indexSlide === sliderCount - 1) {\n      nextBtn.style.display = \"none\";\n    } else {\n      nextBtn.style.display = \"block\";\n    }\n  });\n}\nupdateSlide();\nvar handleNextClick = function handleNextClick() {\n  indexSlide = (indexSlide + 1) % sliderCount;\n  currentSlideDot(indexSlide);\n  updateSlide();\n};\nvar handlePrevClick = function handlePrevClick() {\n  indexSlide = (indexSlide - 1) % sliderCount;\n  currentSlideDot(indexSlide);\n  updateSlide();\n};\nvar allDots = document.querySelectorAll(\".dots-item\");\nallDots[0].classList.add(\"active-dot\");\nfunction currentSlideDot(indexSlide) {\n  allDots.forEach(function (element, index) {\n    if (index === indexSlide) {\n      element.classList.add(\"active-dot\");\n    } else {\n      element.classList.remove(\"active-dot\");\n    }\n  });\n}\nfunction onDotsClick() {\n  allDots.forEach(function (element, index) {\n    element.addEventListener(\"click\", function () {\n      indexSlide = index;\n      currentSlideDot(indexSlide);\n      updateSlide();\n    });\n  });\n}\nonDotsClick();\nprevBtn.addEventListener(\"click\", handlePrevClick);\nnextBtn.addEventListener(\"click\", handleNextClick);\n\n//# sourceURL=webpack://homework22/./src/index.js?");

/***/ }),

/***/ "./css/styled.css":
/*!************************!*\
  !*** ./css/styled.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://homework22/./css/styled.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./css/styled.css"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;