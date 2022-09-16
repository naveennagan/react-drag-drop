"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import ReactDroppedItem from "../ReactDroppedItem";
var ReactDroppedItem = require('../ReactDroppedItem').default;

const ReactDropArea = props => {
  const {
    dropContext
  } = props;
  const {
    targetId
  } = dropContext;
  const newProps = {
    draggable: true
  };
  let [droppedElementsProps, setDroppedElementsProps] = (0, _react.useState)([]);

  const onDrop = event => {
    event.preventDefault();
    var dragX = event.pageX;
    var dragY = event.pageY;
    const eventType = event.dataTransfer.getData(targetId);

    if (eventType.includes("move")) {
      var index = dropContext[eventType];
      droppedElementsProps[index].dragX = dragX;
      droppedElementsProps[index].dragY = dragY;
      setDroppedElementsProps([...droppedElementsProps]);
    } else if (eventType.includes("copy")) {
      let droppedItemChidProps = dropContext[eventType];
      let droppedItemProps = {
        droppedItemChidProps,
        dragX,
        dragY
      };
      droppedElementsProps = droppedElementsProps.concat(droppedItemProps);
      setDroppedElementsProps(droppedElementsProps);
    }
  };

  const onDragOver = event => {
    event.preventDefault();
  };

  const getDroppedView = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, droppedElementsProps && droppedElementsProps.length > 0 && droppedElementsProps.map((droppedElementProps, index) => {
      return /*#__PURE__*/_react.default.createElement(ReactDroppedItem, {
        index: index,
        dragX: droppedElementProps.dragX,
        dragY: droppedElementProps.dragY,
        droppedElementProps: droppedElementProps.droppedItemChidProps,
        dropContext: dropContext
      });
    }));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    onDrop: onDrop,
    onDragOver: onDragOver,
    className: "drop-container",
    style: {
      "position": "relative"
    }
  }, _react.default.Children.map(props.children, child => {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      newProps
    }, null);
  }), droppedElementsProps && droppedElementsProps.length > 0 && getDroppedView());
};

var _default = ReactDropArea;
exports.default = _default;