"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ReactDroppedItem = props => {
  const {
    droppedElementProps,
    dropContext,
    dragX,
    dragY,
    index,
    uniqueid
  } = props;
  const {
    targetId
  } = dropContext;

  const onDragStart = event => {
    dropContext["move"] = index;
    event.dataTransfer.setData(targetId, "move");
  };

  const styles = {
    "position": "fixed",
    "height": "fit-content",
    "transform": "translate(-50%, -50%)",
    "cursor": "pointer"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropped-item",
    draggable: "true",
    onDragStart: onDragStart,
    style: _objectSpread({
      left: dragX,
      top: dragY
    }, styles),
    uniqueid: uniqueid
  }, _react.default.Children.map(droppedElementProps, child => {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      uniqueid
    });
  }));
};

var _default = ReactDroppedItem;
exports.default = _default;