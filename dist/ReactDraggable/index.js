"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactDraggable = props => {
  const {
    targetContext
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
    event.dataTransfer.setData(targetId, newPropReference);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "draggable-item",
    draggable: "true",
    onDragStart: onDragStart
  }, _react.default.Children.map(props.children, child => {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      newProps
    }, null);
  }));
};

var _default = ReactDraggable;
exports.default = _default;