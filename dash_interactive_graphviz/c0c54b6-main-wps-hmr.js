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
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('.graph').graphviz().engine(engine).width(size.width).height(size.height).fit(true).transition(d3__WEBPACK_IMPORTED_MODULE_2__["transition"]('main').ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeLinear"]).duration(1000)).attributer(function (d, i, g) {
          if (onNodeClick && d.attributes["class"] === 'node') {
            this.onclick = function () {
              return onNodeClick(d.key);
            };
          } else if (onEdgeClick && d.attributes["class"] === 'edge') {
            this.onclick = function () {
              return onEdgeClick(d.key);
            };
          }
        }).renderDot(dot_source);
        var labelPositions = [];
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#graph0');
        var paths = svg.selectAll('.edge').selectAll('path').each(function (d, i) {
          var bounds = d.bbox;
          labelPositions.push({
            x: bounds.x + bounds.width / 2,
            y: bounds.y + bounds.height / 2
          });
        });
        var labels = svg.append('svg:g').selectAll('.labels');
        labels = labels.data(labelPositions);
        labels.exit().remove();
        labels.enter().append("text").classed("linklabel", true).text(function (d, i) {
          return i;
        }).attr({
          x: function x(d) {
            return d.x;
          },
          y: function y(d) {
            return d.y;
          }
        });
      } catch (e) {
        //Syntax error, Do nothing.
        console.error(e);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2ludGVyYWN0aXZlX2dyYXBodml6Ly4vc3JjL2xpYi9jb21wb25lbnRzL0Rhc2hJbnRlcmFjdGl2ZUdyYXBodml6LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkRhc2hJbnRlcmFjdGl2ZUdyYXBodml6IiwicHJvcHMiLCJkb3Rfc291cmNlIiwic2l6ZSIsImVuZ2luZSIsIm9uTm9kZUNsaWNrIiwibm9kZSIsIm9uRWRnZUNsaWNrIiwiZWRnZSIsImQzIiwiZ3JhcGh2aXoiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJhdHRyaWJ1dGVyIiwiZCIsImkiLCJnIiwiYXR0cmlidXRlcyIsIm9uY2xpY2siLCJrZXkiLCJyZW5kZXJEb3QiLCJsYWJlbFBvc2l0aW9ucyIsInN2ZyIsInBhdGhzIiwic2VsZWN0QWxsIiwiZWFjaCIsImJvdW5kcyIsImJib3giLCJwdXNoIiwieCIsInkiLCJsYWJlbHMiLCJhcHBlbmQiLCJkYXRhIiwiZXhpdCIsInJlbW92ZSIsImVudGVyIiwiY2xhc3NlZCIsInRleHQiLCJhdHRyIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlc2V0Wm9vbSIsInNldFByb3BzIiwic2VsZWN0ZWQiLCJzZWxlY3RlZF9ub2RlIiwic2VsZWN0ZWRfZWRnZSIsInByZXZQcm9wcyIsInNldEdyYXBoIiwiaWQiLCJzdHlsZSIsImZpdF9idXR0b25fc3R5bGUiLCJmaXRfYnV0dG9uX2NvbnRlbnQiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiZml0R3JhcGgiLCJjdXJzb3IiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwZXJzaXN0ZWRfcHJvcHMiLCJwZXJzaXN0ZW5jZV90eXBlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwicGVyc2lzdGVuY2UiLCJvbmVPZlR5cGUiLCJib29sIiwibnVtYmVyIiwiYXJyYXlPZiIsIm9uZU9mIiwiZnVuYyIsIndpdGhTaXplIiwibW9uaXRvckhlaWdodCIsInJlZnJlc2hNb2RlIiwicmVmcmVzaFJhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7SUFTTUEsdUI7Ozs7Ozs7Ozs7Ozs7K0JBQ1M7QUFBQTs7QUFBQSx3QkFDNEIsS0FBS0MsS0FEakM7QUFBQSxVQUNBQyxVQURBLGVBQ0FBLFVBREE7QUFBQSxVQUNZQyxJQURaLGVBQ1lBLElBRFo7QUFBQSxVQUNrQkMsTUFEbEIsZUFDa0JBLE1BRGxCOztBQUVQLFVBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQ7QUFBQSxlQUFVLEtBQUksQ0FBQ0QsV0FBTCxDQUFpQkMsSUFBakIsQ0FBVjtBQUFBLE9BQXBCOztBQUNBLFVBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQ7QUFBQSxlQUFVLEtBQUksQ0FBQ0QsV0FBTCxDQUFpQkMsSUFBakIsQ0FBVjtBQUFBLE9BQXBCOztBQUNBLFVBQUk7QUFDQUMsaURBQUEsQ0FBVSxRQUFWLEVBQ0tDLFFBREwsR0FFS04sTUFGTCxDQUVZQSxNQUZaLEVBR0tPLEtBSEwsQ0FHV1IsSUFBSSxDQUFDUSxLQUhoQixFQUlLQyxNQUpMLENBSVlULElBQUksQ0FBQ1MsTUFKakIsRUFLS0MsR0FMTCxDQUtTLElBTFQsRUFNS0MsVUFOTCxDQU9RTCw2Q0FBQSxDQUFjLE1BQWQsRUFBc0JNLElBQXRCLENBQTJCTiw2Q0FBM0IsRUFBMENPLFFBQTFDLENBQW1ELElBQW5ELENBUFIsRUFTS0MsVUFUTCxDQVNnQixVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQzNCLGNBQUlmLFdBQVcsSUFBSWEsQ0FBQyxDQUFDRyxVQUFGLGNBQXVCLE1BQTFDLEVBQWtEO0FBQzlDLGlCQUFLQyxPQUFMLEdBQWU7QUFBQSxxQkFBTWpCLFdBQVcsQ0FBQ2EsQ0FBQyxDQUFDSyxHQUFILENBQWpCO0FBQUEsYUFBZjtBQUNILFdBRkQsTUFFTyxJQUFJaEIsV0FBVyxJQUFJVyxDQUFDLENBQUNHLFVBQUYsY0FBdUIsTUFBMUMsRUFBaUQ7QUFDcEQsaUJBQUtDLE9BQUwsR0FBZTtBQUFBLHFCQUFNZixXQUFXLENBQUNXLENBQUMsQ0FBQ0ssR0FBSCxDQUFqQjtBQUFBLGFBQWY7QUFDSDtBQUNKLFNBZkwsRUFnQktDLFNBaEJMLENBZ0JldEIsVUFoQmY7QUFrQkksWUFBSXVCLGNBQWMsR0FBRyxFQUFyQjtBQUNBLFlBQUlDLEdBQUcsR0FBR2pCLHlDQUFBLENBQVUsU0FBVixDQUFWO0FBQ0EsWUFBSWtCLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxTQUFKLENBQWMsT0FBZCxFQUF1QkEsU0FBdkIsQ0FBaUMsTUFBakMsRUFBeUNDLElBQXpDLENBQ1IsVUFBVVgsQ0FBVixFQUFZQyxDQUFaLEVBQWM7QUFDVixjQUFJVyxNQUFNLEdBQUdaLENBQUMsQ0FBQ2EsSUFBZjtBQUNBTix3QkFBYyxDQUFDTyxJQUFmLENBQW9CO0FBQ2xCQyxhQUFDLEVBQUVILE1BQU0sQ0FBQ0csQ0FBUCxHQUFXSCxNQUFNLENBQUNuQixLQUFQLEdBQWUsQ0FEWDtBQUVsQnVCLGFBQUMsRUFBRUosTUFBTSxDQUFDSSxDQUFQLEdBQVdKLE1BQU0sQ0FBQ2xCLE1BQVAsR0FBZ0I7QUFGWixXQUFwQjtBQUlILFNBUE8sQ0FBWjtBQVVBLFlBQUl1QixNQUFNLEdBQUdULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLE9BQVgsRUFBb0JSLFNBQXBCLENBQThCLFNBQTlCLENBQWI7QUFDQU8sY0FBTSxHQUFHQSxNQUFNLENBQUNFLElBQVAsQ0FBWVosY0FBWixDQUFUO0FBQ0FVLGNBQU0sQ0FBQ0csSUFBUCxHQUFjQyxNQUFkO0FBRUFKLGNBQU0sQ0FBQ0ssS0FBUCxHQUNLSixNQURMLENBQ1ksTUFEWixFQUVLSyxPQUZMLENBRWEsV0FGYixFQUUwQixJQUYxQixFQUdLQyxJQUhMLENBR1UsVUFBU3hCLENBQVQsRUFBWUMsQ0FBWixFQUFjO0FBQUUsaUJBQU9BLENBQVA7QUFBVyxTQUhyQyxFQUlLd0IsSUFKTCxDQUlVO0FBQ0ZWLFdBQUMsRUFBRSxXQUFTZixDQUFULEVBQVc7QUFDVixtQkFBT0EsQ0FBQyxDQUFDZSxDQUFUO0FBQVksV0FGZDtBQUdGQyxXQUFDLEVBQUUsV0FBU2hCLENBQVQsRUFBVztBQUFDLG1CQUFPQSxDQUFDLENBQUNnQixDQUFUO0FBQVk7QUFIekIsU0FKVjtBQVVQLE9BN0NELENBNkNFLE9BQU9VLENBQVAsRUFBVTtBQUNSO0FBQ0FDLGVBQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFkO0FBQ0g7QUFDSjs7OytCQUVVO0FBQ1BuQywrQ0FBQSxDQUFVLFFBQVYsRUFBb0JDLFFBQXBCLEdBQStCRyxHQUEvQixDQUFtQyxJQUFuQyxFQUF5Q2tDLFNBQXpDO0FBR0g7OztnQ0FFV3pDLEksRUFBTTtBQUFBLFVBQ1AwQyxRQURPLEdBQ0ssS0FBSy9DLEtBRFYsQ0FDUCtDLFFBRE87QUFFZEEsY0FBUSxDQUFDO0FBQ0xDLGdCQUFRLEVBQUUzQyxJQURMO0FBRUw0QyxxQkFBYSxFQUFFNUMsSUFGVjtBQUdMNkMscUJBQWEsRUFBRztBQUhYLE9BQUQsQ0FBUjtBQUtIOzs7Z0NBRVczQyxJLEVBQU07QUFBQSxVQUNQd0MsUUFETyxHQUNLLEtBQUsvQyxLQURWLENBQ1ArQyxRQURPO0FBRWRBLGNBQVEsQ0FBQztBQUNMRSxxQkFBYSxFQUFFLElBRFY7QUFFTEMscUJBQWEsRUFBRzNDO0FBRlgsT0FBRCxDQUFSO0FBSUg7Ozt1Q0FHa0I0QyxTLEVBQVc7QUFBQSx5QkFDUyxLQUFLbkQsS0FEZDtBQUFBLFVBQ25CQyxVQURtQixnQkFDbkJBLFVBRG1CO0FBQUEsVUFDUEMsSUFETyxnQkFDUEEsSUFETztBQUFBLFVBQ0RDLE1BREMsZ0JBQ0RBLE1BREM7O0FBRzFCLFVBQ0lGLFVBQVUsSUFBSWtELFNBQVMsQ0FBQ2xELFVBQXhCLElBQ0FDLElBQUksQ0FBQ1MsTUFBTCxJQUFld0MsU0FBUyxDQUFDakQsSUFBVixDQUFlUyxNQUQ5QixJQUVBVCxJQUFJLENBQUNRLEtBQUwsSUFBY3lDLFNBQVMsQ0FBQ2pELElBQVYsQ0FBZVEsS0FGN0IsSUFHQVAsTUFBTSxJQUFJZ0QsU0FBUyxDQUFDaEQsTUFKeEIsRUFLRTtBQUNFLGFBQUtpRCxRQUFMO0FBQ0g7QUFDSjs7O3dDQUVtQjtBQUNoQixXQUFLQSxRQUFMO0FBQ0g7Ozs2QkFFUTtBQUFBOztBQUFBLHlCQUNxRCxLQUFLcEQsS0FEMUQ7QUFBQSxVQUNFcUQsRUFERixnQkFDRUEsRUFERjtBQUFBLFVBQ01DLEtBRE4sZ0JBQ01BLEtBRE47QUFBQSxVQUNhQyxnQkFEYixnQkFDYUEsZ0JBRGI7QUFBQSxVQUMrQkMsa0JBRC9CLGdCQUMrQkEsa0JBRC9CO0FBRUwsMEJBQ0k7QUFDSSxVQUFFLEVBQUVILEVBRFI7QUFFSSxhQUFLO0FBQ0RJLGtCQUFRLEVBQUUsVUFEVDtBQUVEOUMsZ0JBQU0sRUFBRSxNQUZQO0FBR0RELGVBQUssRUFBRTtBQUhOLFdBSUU0QyxLQUpGO0FBRlQsc0JBU0k7QUFDSSxpQkFBUyxFQUFDLE9BRGQ7QUFFSSxhQUFLLEVBQUU7QUFDSEcsa0JBQVEsRUFBRSxVQURQO0FBRUg5QyxnQkFBTSxFQUFFLE1BRkw7QUFHSEQsZUFBSyxFQUFFO0FBSEo7QUFGWCxRQVRKLGVBa0JJO0FBQ0ksYUFBSyxFQUFFO0FBQ0grQyxrQkFBUSxFQUFFLFVBRFA7QUFFSEMsZUFBSyxFQUFFLENBRko7QUFHSEMsYUFBRyxFQUFFO0FBSEY7QUFEWCxzQkFPSTtBQUNJLGVBQU8sRUFBRSxpQkFBQ2hCLENBQUQsRUFBTztBQUNaLGdCQUFJLENBQUNpQixRQUFMO0FBQ0gsU0FITDtBQUlJLGFBQUs7QUFBR0MsZ0JBQU0sRUFBRTtBQUFYLFdBQXlCTixnQkFBekIsQ0FKVDtBQUtJLGFBQUssRUFBQztBQUxWLFNBT0tDLGtCQVBMLENBUEosQ0FsQkosQ0FESjtBQXNDSDs7OztFQXpJaUNNLCtDOztBQTRJdEMvRCx1QkFBdUIsQ0FBQ2dFLFlBQXhCLEdBQXVDO0FBQ25DUCxvQkFBa0IsRUFBRSxRQURlO0FBRW5DRCxrQkFBZ0IsRUFBRSxFQUZpQjtBQUduQ0QsT0FBSyxFQUFFLEVBSDRCO0FBSW5DbkQsUUFBTSxFQUFFLEtBSjJCO0FBS25DNkQsaUJBQWUsRUFBRSxDQUFDLFVBQUQsRUFBYSxlQUFiLEVBQThCLGVBQTlCLEVBQStDLFlBQS9DLEVBQTZELFFBQTdELENBTGtCO0FBTW5DQyxrQkFBZ0IsRUFBRTtBQU5pQixDQUF2QztBQVNBbEUsdUJBQXVCLENBQUNtRSxTQUF4QixHQUFvQztBQUNoQzs7O0FBR0FiLElBQUUsRUFBRWMsaURBQVMsQ0FBQ0MsTUFKa0I7O0FBS2hDOzs7O0FBSUFwQixVQUFRLEVBQUVtQixpREFBUyxDQUFDQyxNQVRZOztBQVVoQzs7O0FBR0FuQixlQUFhLEVBQUVrQixpREFBUyxDQUFDQyxNQWJPOztBQWNoQzs7O0FBR0FsQixlQUFhLEVBQUVpQixpREFBUyxDQUFDQyxNQWpCTzs7QUFrQmhDOzs7QUFHQW5FLFlBQVUsRUFBRWtFLGlEQUFTLENBQUNDLE1BckJVOztBQXNCaEM7Ozs7QUFJQWpFLFFBQU0sRUFBRWdFLGlEQUFTLENBQUNDLE1BMUJjOztBQTJCaEM7Ozs7QUFJQWQsT0FBSyxFQUFFYSxpREFBUyxDQUFDRSxHQS9CZTs7QUFnQ2hDOzs7QUFHQWQsa0JBQWdCLEVBQUVZLGlEQUFTLENBQUNFLEdBbkNJOztBQW9DaEM7OztBQUdBYixvQkFBa0IsRUFBRVcsaURBQVMsQ0FBQ0MsTUF2Q0U7O0FBd0NoQzs7Ozs7Ozs7QUFRQUUsYUFBVyxFQUFFSCxpREFBUyxDQUFDSSxTQUFWLENBQW9CLENBQzdCSixpREFBUyxDQUFDSyxJQURtQixFQUU3QkwsaURBQVMsQ0FBQ0MsTUFGbUIsRUFHN0JELGlEQUFTLENBQUNNLE1BSG1CLENBQXBCLENBaERtQjs7QUFzRGhDOzs7OztBQUtBVCxpQkFBZSxFQUFFRyxpREFBUyxDQUFDTyxPQUFWLENBQ2JQLGlEQUFTLENBQUNRLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsZUFBYixFQUE4QixlQUE5QixFQUErQyxZQUEvQyxFQUE2RCxRQUE3RCxDQUFoQixDQURhLENBM0RlOztBQStEaEM7Ozs7OztBQU1BVixrQkFBZ0IsRUFBRUUsaURBQVMsQ0FBQ1EsS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFFBQXJCLENBQWhCLENBckVjOztBQXVFaEM7Ozs7QUFJQTVCLFVBQVEsRUFBRW9CLGlEQUFTLENBQUNTO0FBM0VZLENBQXBDO0FBOEVlQyw0SEFBUSxDQUFDO0FBQ3BCQyxlQUFhLEVBQUUsSUFESztBQUVwQkMsYUFBVyxFQUFFLFVBRk87QUFHcEJDLGFBQVcsRUFBRTtBQUhPLENBQUQsQ0FBUixDQUlaakYsdUJBSlksQ0FBZixFIiwiZmlsZSI6ImMwYzU0YjYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgKiBhcyBkM0dyYXBodml6IGZyb20gJ2QzLWdyYXBodml6JztcclxuaW1wb3J0IHt3aXRoU2l6ZX0gZnJvbSAncmVhY3Qtc2l6ZW1lJztcclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcmFjdGl2ZSBncmFwaHZpeiByZW5kZXJlci5cclxuICpcclxuICogUmVuZGVycyB0aGUgZG90IGxhbmd1YWdlIGluIHRoZSBicm93c2VyLiBJdCBhbGxvd3MgZm9yIHBhbm5pbmcgYW5kIHpvb21pbmdcclxuICogYW5kIG5vZGUgc2VsZWN0aW9uLiBDaGFuZ2VzIGluIHRoZSBkb3Rfc291cmNlIHdpbGwgYmUgYW5pbWF0ZWQuXHJcbiAqXHJcbiAqIEdyYXBodml6IGlzIHJ1biBpbiB0aGUgYnJvd3NlciB2aWEgdml6LmpzLCBzbyBpdCBjYW4gYmUgY29tcHV0YXRpb25hbGx5XHJcbiAqIGludGVuc2l2ZS5cclxuICovXHJcbmNsYXNzIERhc2hJbnRlcmFjdGl2ZUdyYXBodml6IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHNldEdyYXBoKCkge1xyXG4gICAgICAgIGNvbnN0IHtkb3Rfc291cmNlLCBzaXplLCBlbmdpbmV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBvbk5vZGVDbGljayA9IChub2RlKSA9PiB0aGlzLm9uTm9kZUNsaWNrKG5vZGUpO1xyXG4gICAgICAgIGNvbnN0IG9uRWRnZUNsaWNrID0gKGVkZ2UpID0+IHRoaXMub25FZGdlQ2xpY2soZWRnZSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkMy5zZWxlY3QoJy5ncmFwaCcpXHJcbiAgICAgICAgICAgICAgICAuZ3JhcGh2aXooKVxyXG4gICAgICAgICAgICAgICAgLmVuZ2luZShlbmdpbmUpXHJcbiAgICAgICAgICAgICAgICAud2lkdGgoc2l6ZS53aWR0aClcclxuICAgICAgICAgICAgICAgIC5oZWlnaHQoc2l6ZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAuZml0KHRydWUpXHJcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBkMy50cmFuc2l0aW9uKCdtYWluJykuZWFzZShkMy5lYXNlTGluZWFyKS5kdXJhdGlvbigxMDAwKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmF0dHJpYnV0ZXIoZnVuY3Rpb24gKGQsIGksIGcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25Ob2RlQ2xpY2sgJiYgZC5hdHRyaWJ1dGVzLmNsYXNzID09PSAnbm9kZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNsaWNrID0gKCkgPT4gb25Ob2RlQ2xpY2soZC5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob25FZGdlQ2xpY2sgJiYgZC5hdHRyaWJ1dGVzLmNsYXNzID09PSAnZWRnZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY2xpY2sgPSAoKSA9PiBvbkVkZ2VDbGljayhkLmtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZW5kZXJEb3QoZG90X3NvdXJjZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsUG9zaXRpb25zID0gW11cclxuICAgICAgICAgICAgICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoJyNncmFwaDAnKVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGhzID0gc3ZnLnNlbGVjdEFsbCgnLmVkZ2UnKS5zZWxlY3RBbGwoJ3BhdGgnKS5lYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkLGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm91bmRzID0gZC5iYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsYWJlbHMgPSBzdmcuYXBwZW5kKCdzdmc6ZycpLnNlbGVjdEFsbCgnLmxhYmVscycpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzID0gbGFiZWxzLmRhdGEobGFiZWxQb3NpdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzLmV4aXQoKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbHMuZW50ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoXCJsaW5rbGFiZWxcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbihkLCBpKXsgcmV0dXJuIGk7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBmdW5jdGlvbihkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLng7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZnVuY3Rpb24oZCl7cmV0dXJuIGQueTt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy9TeW50YXggZXJyb3IsIERvIG5vdGhpbmcuXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZml0R3JhcGgoKSB7XHJcbiAgICAgICAgZDMuc2VsZWN0KCcuZ3JhcGgnKS5ncmFwaHZpeigpLmZpdCh0cnVlKS5yZXNldFpvb20oKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Ob2RlQ2xpY2sobm9kZSkge1xyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNldFByb3BzKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUsIFxyXG4gICAgICAgICAgICBzZWxlY3RlZF9ub2RlOiBub2RlLCBcclxuICAgICAgICAgICAgc2VsZWN0ZWRfZWRnZSA6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVkZ2VDbGljayhlZGdlKSB7XHJcbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgc2V0UHJvcHMoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZF9ub2RlOiBudWxsLCAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWxlY3RlZF9lZGdlIDogZWRnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgY29uc3Qge2RvdF9zb3VyY2UsIHNpemUsIGVuZ2luZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRvdF9zb3VyY2UgIT0gcHJldlByb3BzLmRvdF9zb3VyY2UgfHxcclxuICAgICAgICAgICAgc2l6ZS5oZWlnaHQgIT0gcHJldlByb3BzLnNpemUuaGVpZ2h0IHx8XHJcbiAgICAgICAgICAgIHNpemUud2lkdGggIT0gcHJldlByb3BzLnNpemUud2lkdGggfHxcclxuICAgICAgICAgICAgZW5naW5lICE9IHByZXZQcm9wcy5lbmdpbmVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRHcmFwaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldEdyYXBoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpZCwgc3R5bGUsIGZpdF9idXR0b25fc3R5bGUsIGZpdF9idXR0b25fY29udGVudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmFwaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZml0R3JhcGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgLi4uZml0X2J1dHRvbl9zdHlsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRml0IGdyYXBoIGFuZCByZXNldCB6b29tXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaXRfYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkRhc2hJbnRlcmFjdGl2ZUdyYXBodml6LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZpdF9idXR0b25fY29udGVudDogJ1xcdTI1QTMnLFxyXG4gICAgZml0X2J1dHRvbl9zdHlsZToge30sXHJcbiAgICBzdHlsZToge30sXHJcbiAgICBlbmdpbmU6ICdkb3QnLFxyXG4gICAgcGVyc2lzdGVkX3Byb3BzOiBbJ3NlbGVjdGVkJywgJ3NlbGVjdGVkX25vZGUnLCAnc2VsZWN0ZWRfZWRnZScsICdkb3Rfc291cmNlJywgJ2VuZ2luZSddLFxyXG4gICAgcGVyc2lzdGVuY2VfdHlwZTogJ2xvY2FsJyxcclxufTtcclxuXHJcbkRhc2hJbnRlcmFjdGl2ZUdyYXBodml6LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBbUGVuZGluZyBEZXByZWNhdGlvbl0gVGhlIElEIG9mIHRoZSBzZWxlY3RlZCBub2RlLlxyXG4gICAgICogUGxlYXNlIHVzZSBzZWxlY3RlZF9ub2RlIChvciBzZWxlY3RlZF9lZGdlIGZvciBlZGdlcylcclxuICAgICAqL1xyXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgbm9kZS4gXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdGVkX25vZGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgZWRnZS5cclxuICAgICAqL1xyXG4gICAgc2VsZWN0ZWRfZWRnZTogUHJvcFR5cGVzLnN0cmluZywgICAgXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkb3QgbGFuZ3VhZ2Ugc291cmNlIG9mIHRoZSBncmFwaFxyXG4gICAgICovXHJcbiAgICBkb3Rfc291cmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBTdHlsaW5nIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGdyYXBoIGNvbnRhaW5lci4gWW91IG1heSB3YW50IHRvIGNoYW5nZVxyXG4gICAgICogeW91ciBncmFwaHZpeiBiYWNrZ3JvdW5kIHRvIHRyYW5zcGFyZW50LlxyXG4gICAgICovXHJcbiAgICBlbmdpbmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgdGhlIGxheW91dCBlbmdpbmUsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWFnamFjL2QzLWdyYXBodml6I2dyYXBodml6X2VuZ2luZVxyXG4gICAgICogZm9yIG1vcmUgaW5mb3JtYXRpb25cclxuICAgICAqL1xyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzdHlsZSBvZiB0aGUgZml0IGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgZml0X2J1dHRvbl9zdHlsZTogUHJvcFR5cGVzLmFueSxcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRleHQgY29udGVudCBvZiB0aGUgZml0IGJ1dHRvbiwgYnkgZGVmYXVsdCBpdCBpcyBhbiBzbWFsbCBzcXVhcmUgdW5pY29kZSBjaGFyYWN0ZXIuXHJcbiAgICAgKi9cclxuICAgIGZpdF9idXR0b25fY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBhbGxvdyB1c2VyIGludGVyYWN0aW9ucyBpbiB0aGlzIGNvbXBvbmVudCB0byBiZSBwZXJzaXN0ZWQgd2hlblxyXG4gICAgICogdGhlIGNvbXBvbmVudCAtIG9yIHRoZSBwYWdlIC0gaXMgcmVmcmVzaGVkLiBJZiBgcGVyc2lzdGVkYCBpcyB0cnV0aHkgYW5kXHJcbiAgICAgKiBoYXNuJ3QgY2hhbmdlZCBmcm9tIGl0cyBwcmV2aW91cyB2YWx1ZSwgYSBgdmFsdWVgIHRoYXQgdGhlIHVzZXIgaGFzXHJcbiAgICAgKiBjaGFuZ2VkIHdoaWxlIHVzaW5nIHRoZSBhcHAgd2lsbCBrZWVwIHRoYXQgY2hhbmdlLCBhcyBsb25nIGFzXHJcbiAgICAgKiB0aGUgbmV3IGB2YWx1ZWAgYWxzbyBtYXRjaGVzIHdoYXQgd2FzIGdpdmVuIG9yaWdpbmFsbHkuXHJcbiAgICAgKiBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHBlcnNpc3RlbmNlX3R5cGVgLlxyXG4gICAgICovXHJcbiAgICBwZXJzaXN0ZW5jZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgXSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9wZXJ0aWVzIHdob3NlIHVzZXIgaW50ZXJhY3Rpb25zIHdpbGwgcGVyc2lzdCBhZnRlciByZWZyZXNoaW5nIHRoZVxyXG4gICAgICogY29tcG9uZW50IG9yIHRoZSBwYWdlLiBTaW5jZSBvbmx5IGB2YWx1ZWAgaXMgYWxsb3dlZCB0aGlzIHByb3AgY2FuXHJcbiAgICAgKiBub3JtYWxseSBiZSBpZ25vcmVkLlxyXG4gICAgICovXHJcbiAgICBwZXJzaXN0ZWRfcHJvcHM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbJ3NlbGVjdGVkJywgJ3NlbGVjdGVkX25vZGUnICwnc2VsZWN0ZWRfZWRnZScgLCdkb3Rfc291cmNlJywgJ2VuZ2luZSddKVxyXG4gICAgKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXJlIHBlcnNpc3RlZCB1c2VyIGNoYW5nZXMgd2lsbCBiZSBzdG9yZWQ6XHJcbiAgICAgKiBtZW1vcnk6IG9ubHkga2VwdCBpbiBtZW1vcnksIHJlc2V0IG9uIHBhZ2UgcmVmcmVzaC5cclxuICAgICAqIGxvY2FsOiB3aW5kb3cubG9jYWxTdG9yYWdlLCBkYXRhIGlzIGtlcHQgYWZ0ZXIgdGhlIGJyb3dzZXIgcXVpdC5cclxuICAgICAqIHNlc3Npb246IHdpbmRvdy5zZXNzaW9uU3RvcmFnZSwgZGF0YSBpcyBjbGVhcmVkIG9uY2UgdGhlIGJyb3dzZXIgcXVpdC5cclxuICAgICAqL1xyXG4gICAgcGVyc2lzdGVuY2VfdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnbG9jYWwnLCAnc2Vzc2lvbicsICdtZW1vcnknXSksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xyXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2l6ZSh7XHJcbiAgICBtb25pdG9ySGVpZ2h0OiB0cnVlLFxyXG4gICAgcmVmcmVzaE1vZGU6ICdkZWJvdW5jZScsXHJcbiAgICByZWZyZXNoUmF0ZTogMTAwLFxyXG59KShEYXNoSW50ZXJhY3RpdmVHcmFwaHZpeik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=