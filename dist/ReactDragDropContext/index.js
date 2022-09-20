"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let createReactDragDropContext = targetId => {
  return {
    targetId,
    data: []
  };
};

var _default = createReactDragDropContext;
exports.default = _default;