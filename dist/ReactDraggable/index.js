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

const ReactDraggable = props => {
  const {
    targetContext,
    uniqueid
  } = props;
  const {
    targetId
  } = targetContext;
  const newProps = {
    draggable: true
  };

  const onDragStart = event => {
    const newPropReference = "copy";
    targetContext[newPropReference] = props.children;
    targetContext["uniqueid"] = uniqueid;
    event.dataTransfer.setData(targetId, newPropReference);
  };

  const styles = {
    "height": "fit-content",
    "cursor": "pointer",
    "display": "inline-block"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "draggable-item",
    draggable: "true",
    onDragStart: onDragStart,
    style: _objectSpread({}, styles)
  }, _react.default.Children.map(props.children, child => {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      newProps
    }, null);
  }));
};

var _default = ReactDraggable;
exports.default = _default;