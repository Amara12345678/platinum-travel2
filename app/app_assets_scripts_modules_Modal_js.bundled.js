"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkplatinum_travel_site"] = self["webpackChunkplatinum_travel_site"] || []).push([["app_assets_scripts_modules_Modal_js"],{

/***/ "./app/assets/scripts/modules/Modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Modal {\r\n  constructor() {\r\n    this.injectHTML();\r\n    this.modal = document.querySelector(\".modal\");\r\n    this.closeIcon = document.querySelector(\".modal__close\");\r\n    this.events();\r\n  }\r\n\r\n  events() {\r\n    //хаагдаж байгааг ажиглана\r\n    this.closeIcon.addEventListener(\"click\", () => this.closeModal());\r\n    //keyboard дээр дарсан эсэхийг ажиглана\r\n    document.addEventListener(\"keyup\", (e) => this.keyPressHandler(e));\r\n  }\r\n\r\n  keyPressHandler(e) {\r\n    if (e.keyCode === 27) {\r\n      this.closeModal();\r\n    }\r\n  }\r\n\r\n  openModal() {\r\n    this.modal.classList.add(\"modal--is-visible\");\r\n  }\r\n\r\n  closeModal() {\r\n    this.modal.classList.remove(\"modal--is-visible\");\r\n  }\r\n  injectHTML() {\r\n    document.body.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n    <div class=\"modal\">\r\n    <div class=\"modal__inner\">\r\n      <h2\r\n        class=\"section-title section-title--blue section-title--less-margin\">\r\n        <img src=\"assets/images/icons/mail.svg\" class=\"section-title__icon\" />\r\n        Хамт <strong>Аялах</strong>\r\n      </h2>\r\n      <div class=\"wrapper wrapper--narrow\">\r\n        <p class=\"modal__description\">\r\n          Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та\r\n          одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох\r\n          боломжтой!\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"social-icons\">\r\n        <a href=\"#\" class=\"social-icons__icon\"\r\n          ><img src=\"assets/images/icons/facebook.svg\" alt=\"Facebook\"\r\n        /></a>\r\n        <a href=\"#\" class=\"social-icons__icon\"\r\n          ><img src=\"assets/images/icons/twitter.svg\" alt=\"Twitter\"\r\n        /></a>\r\n        <a href=\"#\" class=\"social-icons__icon\"\r\n          ><img src=\"assets/images/icons/instagram.svg\" alt=\"Instagram\"\r\n        /></a>\r\n        <a href=\"#\" class=\"social-icons__icon\"\r\n          ><img src=\"assets/images/icons/youtube.svg\" alt=\"YouTube\"\r\n        /></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__close\">X</div>\r\n  </div>`\r\n    );\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\r\n\n\n//# sourceURL=webpack://platinum-travel-site/./app/assets/scripts/modules/Modal.js?");

/***/ })

}]);