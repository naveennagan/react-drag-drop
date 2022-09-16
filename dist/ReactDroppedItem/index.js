"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactDroppedItem = props => {
  const {
    droppedElementProps,
    dropContext,
    dragX,
    dragY,
    index
  } = props;
  const {
    targetId
  } = dropContext;
  const newProps = {
    draggable: true
  };

  const onDragStart = event => {
    dropContext["move"] = index;
    event.dataTransfer.setData(targetId, "move");
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropped-item",
    draggable: "true",
    onDragStart: onDragStart,
    style: {
      left: dragX,
      top: dragY
    }
  }, _react.default.Children.map(droppedElementProps, child => {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      newProps
    }, null);
  }));
};

var _default = ReactDroppedItem;
exports.default = _default;