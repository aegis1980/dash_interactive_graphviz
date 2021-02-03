webpackHotUpdatedash_interactive_graphviz("main",{

/***/ "./src/lib/components/DashInteractiveGraphviz.react.js":
/*!*************************************************************!*\
  !*** ./src/lib/components/DashInteractiveGraphviz.react.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_graphviz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-graphviz */ "./node_modules/d3-graphviz/build/d3-graphviz.js");
/* harmony import */ var d3_graphviz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_graphviz__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import React, {Component} from 'react';
// import PropTypes from 'prop-types';





/**
 * An interactive graphviz renderer.
 *
 * Renders the dot language in the browser. It allows for panning and zooming
 * and node selection. Changes in the dot_source will be animated.
 *
 * Graphviz is run in the browser via viz.js, so it can be computationally
 * intensive.
 */

var DashInteractiveGraphviz = /*#__PURE__*/function (_Component) {
  _inherits(DashInteractiveGraphviz, _Component);

  var _super = _createSuper(DashInteractiveGraphviz);

  function DashInteractiveGraphviz() {
    _classCallCheck(this, DashInteractiveGraphviz);

    return _super.apply(this, arguments);
  }

  _createClass(DashInteractiveGraphviz, [{
    key: "setGraph",
    value: function setGraph() {
      var _this = this;

      var _this$props = this.props,
          dot_source = _this$props.dot_source,
          size = _this$props.size,
          engine = _this$props.engine;

      var onNodeClick = function onNodeClick(node) {
        return _this.onNodeClick(node);
      };

      var onEdgeClick = function onEdgeClick(edge) {
        return _this.onEdgeClick(edge);
      };

      try {
        var self = this;
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('.graph').graphviz().engine(engine).width(size.width).height(size.height).fit(true) // .transition(
        //     d3.transition('main').ease(d3.easeLinear).duration(1000)
        // )
        .attributer(function (d, i, g) {
          if (onNodeClick && d.attributes["class"] === 'node') {
            self.onclick = function () {
              return onNodeClick(d.key);
            };
          } else if (onEdgeClick && d.attributes["class"] === 'edge') {
            self.onclick = function () {
              return onEdgeClick(d.key);
            };
          }
        }).renderDot(dot_source);
        self.drawLabels();
      } catch (e) {
        //Syntax error, Do nothing.
        console.error(e);
      }
    } // Returns an attrTween for translating along the specified path element.

  }, {
    key: "positionAlong",
    value: function positionAlong(path, p) {
      var l = path.getTotalLength();
      var pt = path.children.getPointAtLength(p * l);
      return pt;
    }
  }, {
    key: "drawLabels",
    value: function drawLabels() {
      var labelPositions = [];
      var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#graph0');
      var self = this;
      svg.selectAll('.edge').selectAll('path').each(function (d) {
        var pt = self.positionAlong(d, 0.5);
        labelPositions.push({
          x: pt.x,
          y: pt.y
        });
      });
      var labels = svg.append('svg:g').selectAll('.labels');
      labels.exit().remove();
      labels = labels.data(labelPositions);
      labels.exit().remove();
      labels.enter().append("text").classed("linklabel", true).text(function (d, i) {
        return i;
      }).attr('x', function (d) {
        return d.x;
      }).attr('y', function (d) {
        return d.y;
      });
    }
  }, {
    key: "fitGraph",
    value: function fitGraph() {
      d3__WEBPACK_IMPORTED_MODULE_2__["select"]('.graph').graphviz().fit(true).resetZoom();
    }
  }, {
    key: "onNodeClick",
    value: function onNodeClick(node) {
      var setProps = this.props.setProps;
      setProps({
        selected: node,
        selected_node: node,
        selected_edge: null
      });
    }
  }, {
    key: "onEdgeClick",
    value: function onEdgeClick(edge) {
      var setProps = this.props.setProps;
      setProps({
        selected_node: null,
        selected_edge: edge
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          dot_source = _this$props2.dot_source,
          size = _this$props2.size,
          engine = _this$props2.engine;

      if (dot_source != prevProps.dot_source || size.height != prevProps.size.height || size.width != prevProps.size.width || engine != prevProps.engine) {
        this.setGraph();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setGraph();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          id = _this$props3.id,
          style = _this$props3.style,
          fit_button_style = _this$props3.fit_button_style,
          fit_button_content = _this$props3.fit_button_content;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        style: _objectSpread({
          position: 'absolute',
          height: '100%',
          width: '100%'
        }, style)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "graph",
        style: {
          position: 'absolute',
          height: '100%',
          width: '100%'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: 'absolute',
          right: 0,
          top: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: function onClick(e) {
          _this2.fitGraph();
        },
        style: _objectSpread({
          cursor: 'pointer'
        }, fit_button_style),
        title: "Fit graph and reset zoom"
      }, fit_button_content)));
    }
  }]);

  return DashInteractiveGraphviz;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DashInteractiveGraphviz.defaultProps = {
  fit_button_content: "\u25A3",
  fit_button_style: {},
  style: {},
  engine: 'dot',
  persisted_props: ['selected', 'selected_node', 'selected_edge', 'dot_source', 'engine'],
  persistence_type: 'local'
};
DashInteractiveGraphviz.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * [Pending Deprecation] The ID of the selected node.
   * Please use selected_node (or selected_edge for edges)
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ID of the selected node. 
   */
  selected_node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The ID of the selected edge.
   */
  selected_edge: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The dot language source of the graph
   */
  dot_source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Styling to be applied to the graph container. You may want to change
   * your graphviz background to transparent.
   */
  engine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Changes the layout engine, see https://github.com/magjac/d3-graphviz#graphviz_engine
   * for more information
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * The style of the fit button.
   */
  fit_button_style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * The text content of the fit button, by default it is an small square unicode character.
   */
  fit_button_content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
  persistence: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),

  /**
   * Properties whose user interactions will persist after refreshing the
   * component or the page. Since only `value` is allowed this prop can
   * normally be ignored.
   */
  persisted_props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['selected', 'selected_node', 'selected_edge', 'dot_source', 'engine'])),

  /**
   * Where persisted user changes will be stored:
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  persistence_type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['local', 'session', 'memory']),

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_sizeme__WEBPACK_IMPORTED_MODULE_4__["withSize"])({
  monitorHeight: true,
  refreshMode: 'debounce',
  refreshRate: 100
})(DashInteractiveGraphviz));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2ludGVyYWN0aXZlX2dyYXBodml6Ly4vc3JjL2xpYi9jb21wb25lbnRzL0Rhc2hJbnRlcmFjdGl2ZUdyYXBodml6LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkRhc2hJbnRlcmFjdGl2ZUdyYXBodml6IiwicHJvcHMiLCJkb3Rfc291cmNlIiwic2l6ZSIsImVuZ2luZSIsIm9uTm9kZUNsaWNrIiwibm9kZSIsIm9uRWRnZUNsaWNrIiwiZWRnZSIsInNlbGYiLCJkMyIsImdyYXBodml6Iiwid2lkdGgiLCJoZWlnaHQiLCJmaXQiLCJhdHRyaWJ1dGVyIiwiZCIsImkiLCJnIiwiYXR0cmlidXRlcyIsIm9uY2xpY2siLCJrZXkiLCJyZW5kZXJEb3QiLCJkcmF3TGFiZWxzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInBhdGgiLCJwIiwibCIsImdldFRvdGFsTGVuZ3RoIiwicHQiLCJjaGlsZHJlbiIsImdldFBvaW50QXRMZW5ndGgiLCJsYWJlbFBvc2l0aW9ucyIsInN2ZyIsInNlbGVjdEFsbCIsImVhY2giLCJwb3NpdGlvbkFsb25nIiwicHVzaCIsIngiLCJ5IiwibGFiZWxzIiwiYXBwZW5kIiwiZXhpdCIsInJlbW92ZSIsImRhdGEiLCJlbnRlciIsImNsYXNzZWQiLCJ0ZXh0IiwiYXR0ciIsInJlc2V0Wm9vbSIsInNldFByb3BzIiwic2VsZWN0ZWQiLCJzZWxlY3RlZF9ub2RlIiwic2VsZWN0ZWRfZWRnZSIsInByZXZQcm9wcyIsInNldEdyYXBoIiwiaWQiLCJzdHlsZSIsImZpdF9idXR0b25fc3R5bGUiLCJmaXRfYnV0dG9uX2NvbnRlbnQiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiZml0R3JhcGgiLCJjdXJzb3IiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwZXJzaXN0ZWRfcHJvcHMiLCJwZXJzaXN0ZW5jZV90eXBlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwicGVyc2lzdGVuY2UiLCJvbmVPZlR5cGUiLCJib29sIiwibnVtYmVyIiwiYXJyYXlPZiIsIm9uZU9mIiwiZnVuYyIsIndpdGhTaXplIiwibW9uaXRvckhlaWdodCIsInJlZnJlc2hNb2RlIiwicmVmcmVzaFJhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7SUFTTUEsdUI7Ozs7Ozs7Ozs7Ozs7K0JBQ1M7QUFBQTs7QUFBQSx3QkFDNEIsS0FBS0MsS0FEakM7QUFBQSxVQUNBQyxVQURBLGVBQ0FBLFVBREE7QUFBQSxVQUNZQyxJQURaLGVBQ1lBLElBRFo7QUFBQSxVQUNrQkMsTUFEbEIsZUFDa0JBLE1BRGxCOztBQUVQLFVBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQ7QUFBQSxlQUFVLEtBQUksQ0FBQ0QsV0FBTCxDQUFpQkMsSUFBakIsQ0FBVjtBQUFBLE9BQXBCOztBQUNBLFVBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQ7QUFBQSxlQUFVLEtBQUksQ0FBQ0QsV0FBTCxDQUFpQkMsSUFBakIsQ0FBVjtBQUFBLE9BQXBCOztBQUNBLFVBQUk7QUFDQSxZQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBQyxpREFBQSxDQUFVLFFBQVYsRUFDS0MsUUFETCxHQUVLUCxNQUZMLENBRVlBLE1BRlosRUFHS1EsS0FITCxDQUdXVCxJQUFJLENBQUNTLEtBSGhCLEVBSUtDLE1BSkwsQ0FJWVYsSUFBSSxDQUFDVSxNQUpqQixFQUtLQyxHQUxMLENBS1MsSUFMVCxFQU1JO0FBQ0E7QUFDQTtBQVJKLFNBU0tDLFVBVEwsQ0FTZ0IsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtBQUMzQixjQUFJYixXQUFXLElBQUlXLENBQUMsQ0FBQ0csVUFBRixjQUF1QixNQUExQyxFQUFrRDtBQUM5Q1YsZ0JBQUksQ0FBQ1csT0FBTCxHQUFlO0FB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QVcsRUFBRUgsaURBQVMsQ0FBQ0ksU0FBVixDQUFvQixDQUM3QkosaURBQVMsQ0FBQ0ssSUFEbUIsRUFFN0JMLGlEQUFTLENBQUNDLE1BRm1CLEVBRzdCRCxpREFBUyxDQUFDTSxNQUhtQixDQUFwQixDQWhEbUI7O0FBc0RoQzs7Ozs7QUFLQVQsaUJBQWUsRUFBRUcsaURBQVMsQ0FBQ08sT0FBVixDQUNiUCxpREFBUyxDQUFDUSxLQUFWLENBQWdCLENBQUMsVUFBRCxFQUFhLGVBQWIsRUFBOEIsZUFBOUIsRUFBK0MsWUFBL0MsRUFBNkQsUUFBN0QsQ0FBaEIsQ0FEYSxDQTNEZTs7QUErRGhDOzs7Ozs7QUFNQVYsa0JBQWdCLEVBQUVFLGlEQUFTLENBQUNRLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixRQUFyQixDQUFoQixDQXJFYzs7QUF1RWhDOzs7O0FBSUE1QixVQUFRLEVBQUVvQixpREFBUyxDQUFDUztBQTNFWSxDQUFwQztBQThFZUMsNEhBQVEsQ0FBQztBQUNwQkMsZUFBYSxFQUFFLElBREs7QUFFcEJDLGFBQVcsRUFBRSxVQUZPO0FBR3BCQyxhQUFXLEVBQUU7QUFITyxDQUFELENBQVIsQ0FJWnJGLHVCQUpZLENBQWYsRSIsImZpbGUiOiI3ZjY4ZmI2LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0ICogYXMgZDNHcmFwaHZpeiBmcm9tICdkMy1ncmFwaHZpeic7XHJcbmltcG9ydCB7d2l0aFNpemV9IGZyb20gJ3JlYWN0LXNpemVtZSc7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJhY3RpdmUgZ3JhcGh2aXogcmVuZGVyZXIuXHJcbiAqXHJcbiAqIFJlbmRlcnMgdGhlIGRvdCBsYW5ndWFnZSBpbiB0aGUgYnJvd3Nlci4gSXQgYWxsb3dzIGZvciBwYW5uaW5nIGFuZCB6b29taW5nXHJcbiAqIGFuZCBub2RlIHNlbGVjdGlvbi4gQ2hhbmdlcyBpbiB0aGUgZG90X3NvdXJjZSB3aWxsIGJlIGFuaW1hdGVkLlxyXG4gKlxyXG4gKiBHcmFwaHZpeiBpcyBydW4gaW4gdGhlIGJyb3dzZXIgdmlhIHZpei5qcywgc28gaXQgY2FuIGJlIGNvbXB1dGF0aW9uYWxseVxyXG4gKiBpbnRlbnNpdmUuXHJcbiAqL1xyXG5jbGFzcyBEYXNoSW50ZXJhY3RpdmVHcmFwaHZpeiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzZXRHcmFwaCgpIHtcclxuICAgICAgICBjb25zdCB7ZG90X3NvdXJjZSwgc2l6ZSwgZW5naW5lfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgb25Ob2RlQ2xpY2sgPSAobm9kZSkgPT4gdGhpcy5vbk5vZGVDbGljayhub2RlKTtcclxuICAgICAgICBjb25zdCBvbkVkZ2VDbGljayA9IChlZGdlKSA9PiB0aGlzLm9uRWRnZUNsaWNrKGVkZ2UpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiAgPXRoaXM7XHJcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnLmdyYXBoJylcclxuICAgICAgICAgICAgICAgIC5ncmFwaHZpeigpXHJcbiAgICAgICAgICAgICAgICAuZW5naW5lKGVuZ2luZSlcclxuICAgICAgICAgICAgICAgIC53aWR0aChzaXplLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgLmhlaWdodChzaXplLmhlaWdodClcclxuICAgICAgICAgICAgICAgIC5maXQodHJ1ZSlcclxuICAgICAgICAgICAgICAgIC8vIC50cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGQzLnRyYW5zaXRpb24oJ21haW4nKS5lYXNlKGQzLmVhc2VMaW5lYXIpLmR1cmF0aW9uKDEwMDApXHJcbiAgICAgICAgICAgICAgICAvLyApXHJcbiAgICAgICAgICAgICAgICAuYXR0cmlidXRlcihmdW5jdGlvbiAoZCwgaSwgZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbk5vZGVDbGljayAmJiBkLmF0dHJpYnV0ZXMuY2xhc3MgPT09ICdub2RlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9uY2xpY2sgPSAoKSA9PiBvbk5vZGVDbGljayhkLmtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbkVkZ2VDbGljayAmJiBkLmF0dHJpYnV0ZXMuY2xhc3MgPT09ICdlZGdlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25jbGljayA9ICgpID0+IG9uRWRnZUNsaWNrKGQua2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZW5kZXJEb3QoZG90X3NvdXJjZSk7XHJcbiAgICAgICAgICAgIHNlbGYuZHJhd0xhYmVscygpXHJcblxyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vU3ludGF4IGVycm9yLCBEbyBub3RoaW5nLlxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybnMgYW4gYXR0clR3ZWVuIGZvciB0cmFuc2xhdGluZyBhbG9uZyB0aGUgc3BlY2lmaWVkIHBhdGggZWxlbWVudC5cclxuICAgIHBvc2l0aW9uQWxvbmcocGF0aCwgcCApe1xyXG4gICAgICAgIHZhciBsID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgICAgIHZhciBwdCA9IHBhdGguY2hpbGRyZW4uZ2V0UG9pbnRBdExlbmd0aChwKiBsKTtcclxuICAgICAgICByZXR1cm4gcHRcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TGFiZWxzKCl7XHJcbiAgICAgICAgdmFyIGxhYmVsUG9zaXRpb25zID0gW11cclxuICAgICAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KCcjZ3JhcGgwJylcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCcuZWRnZScpLnNlbGVjdEFsbCgncGF0aCcpLmVhY2goXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkKXtcclxuICAgICAgICAgICAgICAgIHZhciBwdCA9IHNlbGYucG9zaXRpb25BbG9uZyhkLDAuNSlcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICB4OiBwdC54LFxyXG4gICAgICAgICAgICAgICAgICB5OiBwdC55XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciBsYWJlbHMgPSBzdmcuYXBwZW5kKCdzdmc6ZycpLnNlbGVjdEFsbCgnLmxhYmVscycpO1xyXG4gICAgICAgIGxhYmVscy5leGl0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgbGFiZWxzID0gbGFiZWxzLmRhdGEobGFiZWxQb3NpdGlvbnMpO1xyXG4gICAgICAgIGxhYmVscy5leGl0KCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGxhYmVscy5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibGlua2xhYmVsXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQsIGkpeyByZXR1cm4gaX0pXHJcbiAgICAgICAgICAgIC5hdHRyKCd4JyAsZnVuY3Rpb24oZCl7cmV0dXJuIGQueH0pXHJcbiAgICAgICAgICAgIC5hdHRyKCd5JyAsZnVuY3Rpb24oZCl7cmV0dXJuIGQueX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpdEdyYXBoKCkge1xyXG4gICAgICAgIGQzLnNlbGVjdCgnLmdyYXBoJykuZ3JhcGh2aXooKS5maXQodHJ1ZSkucmVzZXRab29tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob2RlQ2xpY2sobm9kZSkge1xyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNldFByb3BzKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUsIFxyXG4gICAgICAgICAgICBzZWxlY3RlZF9ub2RlOiBub2RlLCBcclxuICAgICAgICAgICAgc2VsZWN0ZWRfZWRnZSA6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVkZ2VDbGljayhlZGdlKSB7XHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgc2V0UHJvcHMoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZF9ub2RlOiBudWxsLCAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWxlY3RlZF9lZGdlIDogZWRnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgY29uc3Qge2RvdF9zb3VyY2UsIHNpemUsIGVuZ2luZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRvdF9zb3VyY2UgIT0gcHJldlByb3BzLmRvdF9zb3VyY2UgfHxcclxuICAgICAgICAgICAgc2l6ZS5oZWlnaHQgIT0gcHJldlByb3BzLnNpemUuaGVpZ2h0IHx8XHJcbiAgICAgICAgICAgIHNpemUud2lkdGggIT0gcHJldlByb3BzLnNpemUud2lkdGggfHxcclxuICAgICAgICAgICAgZW5naW5lICE9IHByZXZQcm9wcy5lbmdpbmVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRHcmFwaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldEdyYXBoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpZCwgc3R5bGUsIGZpdF9idXR0b25fc3R5bGUsIGZpdF9idXR0b25fY29udGVudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmFwaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZml0R3JhcGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgLi4uZml0X2J1dHRvbl9zdHlsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRml0IGdyYXBoIGFuZCByZXNldCB6b29tXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaXRfYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkRhc2hJbnRlcmFjdGl2ZUdyYXBodml6LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZpdF9idXR0b25fY29udGVudDogJ1xcdTI1QTMnLFxyXG4gICAgZml0X2J1dHRvbl9zdHlsZToge30sXHJcbiAgICBzdHlsZToge30sXHJcbiAgICBlbmdpbmU6ICdkb3QnLFxyXG4gICAgcGVyc2lzdGVkX3Byb3BzOiBbJ3NlbGVjdGVkJywgJ3NlbGVjdGVkX25vZGUnLCAnc2VsZWN0ZWRfZWRnZScsICdkb3Rfc291cmNlJywgJ2VuZ2luZSddLFxyXG4gICAgcGVyc2lzdGVuY2VfdHlwZTogJ2xvY2FsJyxcclxufTtcclxuXHJcbkRhc2hJbnRlcmFjdGl2ZUdyYXBodml6LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBbUGVuZGluZyBEZXByZWNhdGlvbl0gVGhlIElEIG9mIHRoZSBzZWxlY3RlZCBub2RlLlxyXG4gICAgICogUGxlYXNlIHVzZSBzZWxlY3RlZF9ub2RlIChvciBzZWxlY3RlZF9lZGdlIGZvciBlZGdlcylcclxuICAgICAqL1xyXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgbm9kZS4gXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdGVkX25vZGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgZWRnZS5cclxuICAgICAqL1xyXG4gICAgc2VsZWN0ZWRfZWRnZTogUHJvcFR5cGVzLnN0cmluZywgICAgXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkb3QgbGFuZ3VhZ2Ugc291cmNlIG9mIHRoZSBncmFwaFxyXG4gICAgICovXHJcbiAgICBkb3Rfc291cmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBTdHlsaW5nIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGdyYXBoIGNvbnRhaW5lci4gWW91IG1heSB3YW50IHRvIGNoYW5nZVxyXG4gICAgICogeW91ciBncmFwaHZpeiBiYWNrZ3JvdW5kIHRvIHRyYW5zcGFyZW50LlxyXG4gICAgICovXHJcbiAgICBlbmdpbmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgdGhlIGxheW91dCBlbmdpbmUsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWFnamFjL2QzLWdyYXBodml6I2dyYXBodml6X2VuZ2luZVxyXG4gICAgICogZm9yIG1vcmUgaW5mb3JtYXRpb25cclxuICAgICAqL1xyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzdHlsZSBvZiB0aGUgZml0IGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgZml0X2J1dHRvbl9zdHlsZTogUHJvcFR5cGVzLmFueSxcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRleHQgY29udGVudCBvZiB0aGUgZml0IGJ1dHRvbiwgYnkgZGVmYXVsdCBpdCBpcyBhbiBzbWFsbCBzcXVhcmUgdW5pY29kZSBjaGFyYWN0ZXIuXHJcbiAgICAgKi9cclxuICAgIGZpdF9idXR0b25fY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBhbGxvdyB1c2VyIGludGVyYWN0aW9ucyBpbiB0aGlzIGNvbXBvbmVudCB0byBiZSBwZXJzaXN0ZWQgd2hlblxyXG4gICAgICogdGhlIGNvbXBvbmVudCAtIG9yIHRoZSBwYWdlIC0gaXMgcmVmcmVzaGVkLiBJZiBgcGVyc2lzdGVkYCBpcyB0cnV0aHkgYW5kXHJcbiAgICAgKiBoYXNuJ3QgY2hhbmdlZCBmcm9tIGl0cyBwcmV2aW91cyB2YWx1ZSwgYSBgdmFsdWVgIHRoYXQgdGhlIHVzZXIgaGFzXHJcbiAgICAgKiBjaGFuZ2VkIHdoaWxlIHVzaW5nIHRoZSBhcHAgd2lsbCBrZWVwIHRoYXQgY2hhbmdlLCBhcyBsb25nIGFzXHJcbiAgICAgKiB0aGUgbmV3IGB2YWx1ZWAgYWxzbyBtYXRjaGVzIHdoYXQgd2FzIGdpdmVuIG9yaWdpbmFsbHkuXHJcbiAgICAgKiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHBlcnNpc3RlbmNlX3R5cGVgLlxyXG4gICAgICovXHJcbiAgICBwZXJzaXN0ZW5jZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgXSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9wZXJ0aWVzIHdob3NlIHVzZXIgaW50ZXJhY3Rpb25zIHdpbGwgcGVyc2lzdCBhZnRlciByZWZyZXNoaW5nIHRoZVxyXG4gICAgICogY29tcG9uZW50IG9yIHRoZSBwYWdlLiBTaW5jZSBvbmx5IGB2YWx1ZWAgaXMgYWxsb3dlZCB0aGlzIHByb3AgY2FuXHJcbiAgICAgKiBub3JtYWxseSBiZSBpZ25vcmVkLlxyXG4gICAgICovXHJcbiAgICBwZXJzaXN0ZWRfcHJvcHM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbJ3NlbGVjdGVkJywgJ3NlbGVjdGVkX25vZGUnICwnc2VsZWN0ZWRfZWRnZScgLCdkb3Rfc291cmNlJywgJ2VuZ2luZSddKVxyXG4gICAgKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXJlIHBlcnNpc3RlZCB1c2VyIGNoYW5nZXMgd2lsbCBiZSBzdG9yZWQ6XHJcbiAgICAgKiBtZW1vcnk6IG9ubHkga2VwdCBpbiBtZW1vcnksIHJlc2V0IG9uIHBhZ2UgcmVmcmVzaC5cclxuICAgICAqIGxvY2FsOiB3aW5kb3cubG9jYWxTdG9yYWdlLCBkYXRhIGlzIGtlcHQgYWZ0ZXIgdGhlIGJyb3dzZXIgcXVpdC5cclxuICAgICAqIHNlc3Npb246IHdpbmRvdy5zZXNzaW9uU3RvcmFnZSwgZGF0YSBpcyBjbGVhcmVkIG9uY2UgdGhlIGJyb3dzZXIgcXVpdC5cclxuICAgICAqL1xyXG4gICAgcGVyc2lzdGVuY2VfdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnbG9jYWwnLCAnc2Vzc2lvbicsICdtZW1vcnknXSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2l6ZSh7XHJcbiAgICBtb25pdG9ySGVpZ2h0OiB0cnVlLFxyXG4gICAgcmVmcmVzaE1vZGU6ICdkZWJvdW5jZScsXHJcbiAgICByZWZyZXNoUmF0ZTogMTAwLFxyXG59KShEYXNoSW50ZXJhY3RpdmVHcmFwaHZpeik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=