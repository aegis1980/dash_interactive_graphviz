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
        svg.selectAll('.edge').selectAll('path').each(function (d, i) {
          var bounds = d.getBBox();
          labelPositions[i] = {
            x: bounds.x + bounds.width / 2,
            y: bounds.y + bounds.height / 2
          };
          console.log('hello');
        });
        console.log('hello');
        var label = svg.selectAll("text.linklabel").data(labelPositions);
        label.exit().remove();
        label.enter().append("text").classed("linklabel", true).style({
          fill: "red"
        });
        label.text(function (d, i) {
          return i;
        }).attr({
          x: function x(d) {
            return d.x;
          },
          y: function y(d) {
            return d.y;
          }
        });
      } catch (e) {//Syntax error, Do nothing.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2ludGVyYWN0aXZlX2dyYXBodml6Ly4vc3JjL2xpYi9jb21wb25lbnRzL0Rhc2hJbnRlcmFjdGl2ZUdyYXBodml6LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkRhc2hJbnRlcmFjdGl2ZUdyYXBodml6IiwicHJvcHMiLCJkb3Rfc291cmNlIiwic2l6ZSIsImVuZ2luZSIsIm9uTm9kZUNsaWNrIiwibm9kZSIsIm9uRWRnZUNsaWNrIiwiZWRnZSIsImQzIiwiZ3JhcGh2aXoiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJhdHRyaWJ1dGVyIiwiZCIsImkiLCJnIiwiYXR0cmlidXRlcyIsIm9uY2xpY2siLCJrZXkiLCJyZW5kZXJEb3QiLCJsYWJlbFBvc2l0aW9ucyIsInN2ZyIsInNlbGVjdEFsbCIsImVhY2giLCJib3VuZHMiLCJnZXRCQm94IiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJkYXRhIiwiZXhpdCIsInJlbW92ZSIsImVudGVyIiwiYXBwZW5kIiwiY2xhc3NlZCIsInN0eWxlIiwiZmlsbCIsInRleHQiLCJhdHRyIiwiZSIsInJlc2V0Wm9vbSIsInNldFByb3BzIiwic2VsZWN0ZWQiLCJzZWxlY3RlZF9ub2RlIiwic2VsZWN0ZWRfZWRnZSIsInByZXZQcm9wcyIsInNldEdyYXBoIiwiaWQiLCJmaXRfYnV0dG9uX3N0eWxlIiwiZml0X2J1dHRvbl9jb250ZW50IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImZpdEdyYXBoIiwiY3Vyc29yIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicGVyc2lzdGVkX3Byb3BzIiwicGVyc2lzdGVuY2VfdHlwZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsInBlcnNpc3RlbmNlIiwib25lT2ZUeXBlIiwiYm9vbCIsIm51bWJlciIsImFycmF5T2YiLCJvbmVPZiIsImZ1bmMiLCJ3aXRoU2l6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VUFBRCxFQUFhLGVBQWIsRUFBOEIsZUFBOUIsRUFBK0MsWUFBL0MsRUFBNkQsUUFBN0QsQ0FBaEIsQ0FEYSxDQTNEZTs7QUErRGhDOzs7Ozs7QUFNQVYsa0JBQWdCLEVBQUVFLGlEQUFTLENBQUNRLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixRQUFyQixDQUFoQixDQXJFYzs7QUF1RWhDOzs7O0FBSUEzQixVQUFRLEVBQUVtQixpREFBUyxDQUFDUztBQTNFWSxDQUFwQztBQThFZUMsNEhBQVEsQ0FBQztBQUNwQkMsZUFBYSxFQUFFLElBREs7QUFFcEJDLGFBQVcsRUFBRSxVQUZPO0FBR3BCQyxhQUFXLEVBQUU7QUFITyxDQUFELENBQVIsQ0FJWmhGLHVCQUpZLENBQWYsRSIsImZpbGUiOiI5NmEwNmNhLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0ICogYXMgZDNHcmFwaHZpeiBmcm9tICdkMy1ncmFwaHZpeic7XHJcbmltcG9ydCB7d2l0aFNpemV9IGZyb20gJ3JlYWN0LXNpemVtZSc7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJhY3RpdmUgZ3JhcGh2aXogcmVuZGVyZXIuXHJcbiAqXHJcbiAqIFJlbmRlcnMgdGhlIGRvdCBsYW5ndWFnZSBpbiB0aGUgYnJvd3Nlci4gSXQgYWxsb3dzIGZvciBwYW5uaW5nIGFuZCB6b29taW5nXHJcbiAqIGFuZCBub2RlIHNlbGVjdGlvbi4gQ2hhbmdlcyBpbiB0aGUgZG90X3NvdXJjZSB3aWxsIGJlIGFuaW1hdGVkLlxyXG4gKlxyXG4gKiBHcmFwaHZpeiBpcyBydW4gaW4gdGhlIGJyb3dzZXIgdmlhIHZpei5qcywgc28gaXQgY2FuIGJlIGNvbXB1dGF0aW9uYWxseVxyXG4gKiBpbnRlbnNpdmUuXHJcbiAqL1xyXG5jbGFzcyBEYXNoSW50ZXJhY3RpdmVHcmFwaHZpeiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzZXRHcmFwaCgpIHtcclxuICAgICAgICBjb25zdCB7ZG90X3NvdXJjZSwgc2l6ZSwgZW5naW5lfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgb25Ob2RlQ2xpY2sgPSAobm9kZSkgPT4gdGhpcy5vbk5vZGVDbGljayhub2RlKTtcclxuICAgICAgICBjb25zdCBvbkVkZ2VDbGljayA9IChlZGdlKSA9PiB0aGlzLm9uRWRnZUNsaWNrKGVkZ2UpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZDMuc2VsZWN0KCcuZ3JhcGgnKVxyXG4gICAgICAgICAgICAgICAgLmdyYXBodml6KClcclxuICAgICAgICAgICAgICAgIC5lbmdpbmUoZW5naW5lKVxyXG4gICAgICAgICAgICAgICAgLndpZHRoKHNpemUud2lkdGgpXHJcbiAgICAgICAgICAgICAgICAuaGVpZ2h0KHNpemUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLmZpdCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgZDMudHJhbnNpdGlvbignbWFpbicpLmVhc2UoZDMuZWFzZUxpbmVhcikuZHVyYXRpb24oMTAwMClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5hdHRyaWJ1dGVyKGZ1bmN0aW9uIChkLCBpLCBnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTm9kZUNsaWNrICYmIGQuYXR0cmlidXRlcy5jbGFzcyA9PT0gJ25vZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25jbGljayA9ICgpID0+IG9uTm9kZUNsaWNrKGQua2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9uRWRnZUNsaWNrICYmIGQuYXR0cmlidXRlcy5jbGFzcyA9PT0gJ2VkZ2UnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNsaWNrID0gKCkgPT4gb25FZGdlQ2xpY2soZC5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAucmVuZGVyRG90KGRvdF9zb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsYWJlbFBvc2l0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgICAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KCcjZ3JhcGgwJylcclxuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoJy5lZGdlJykuc2VsZWN0QWxsKCdwYXRoJykuZWFjaChcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZCxpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvdW5kcyA9IGQuZ2V0QkJveCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uc1tpXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbmNvbnNvbGUubG9nKCdoZWxsbycpXHJcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBzdmdcclxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dC5saW5rbGFiZWxcIilcclxuICAgICAgICAgICAgICAgICAgICAuZGF0YShsYWJlbFBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGFiZWwuZXhpdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsLmVudGVyKClcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwibGlua2xhYmVsXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKHtmaWxsOiBcInJlZFwifSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dChmdW5jdGlvbihkLCBpKXsgcmV0dXJuIGk7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBmdW5jdGlvbihkKXtyZXR1cm4gZC54O30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGZ1bmN0aW9uKGQpe3JldHVybiBkLnk7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vU3ludGF4IGVycm9yLCBEbyBub3RoaW5nLlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXRHcmFwaCgpIHtcclxuICAgICAgICBkMy5zZWxlY3QoJy5ncmFwaCcpLmdyYXBodml6KCkuZml0KHRydWUpLnJlc2V0Wm9vbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTm9kZUNsaWNrKG5vZGUpIHtcclxuICAgICAgICBjb25zdCB7c2V0UHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBzZXRQcm9wcyh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLCBcclxuICAgICAgICAgICAgc2VsZWN0ZWRfbm9kZTogbm9kZSwgXHJcbiAgICAgICAgICAgIHNlbGVjdGVkX2VkZ2UgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGdlQ2xpY2soZWRnZSkge1xyXG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNldFByb3BzKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRfbm9kZTogbnVsbCwgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VsZWN0ZWRfZWRnZSA6IGVkZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHtkb3Rfc291cmNlLCBzaXplLCBlbmdpbmV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBkb3Rfc291cmNlICE9IHByZXZQcm9wcy5kb3Rfc291cmNlIHx8XHJcbiAgICAgICAgICAgIHNpemUuaGVpZ2h0ICE9IHByZXZQcm9wcy5zaXplLmhlaWdodCB8fFxyXG4gICAgICAgICAgICBzaXplLndpZHRoICE9IHByZXZQcm9wcy5zaXplLndpZHRoIHx8XHJcbiAgICAgICAgICAgIGVuZ2luZSAhPSBwcmV2UHJvcHMuZW5naW5lXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0R3JhcGgoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmFwaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWQsIHN0eWxlLCBmaXRfYnV0dG9uX3N0eWxlLCBmaXRfYnV0dG9uX2NvbnRlbnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JhcGhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpdEdyYXBoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIC4uLmZpdF9idXR0b25fc3R5bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZpdCBncmFwaCBhbmQgcmVzZXQgem9vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zml0X2J1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5EYXNoSW50ZXJhY3RpdmVHcmFwaHZpei5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBmaXRfYnV0dG9uX2NvbnRlbnQ6ICdcXHUyNUEzJyxcclxuICAgIGZpdF9idXR0b25fc3R5bGU6IHt9LFxyXG4gICAgc3R5bGU6IHt9LFxyXG4gICAgZW5naW5lOiAnZG90JyxcclxuICAgIHBlcnNpc3RlZF9wcm9wczogWydzZWxlY3RlZCcsICdzZWxlY3RlZF9ub2RlJywgJ3NlbGVjdGVkX2VkZ2UnLCAnZG90X3NvdXJjZScsICdlbmdpbmUnXSxcclxuICAgIHBlcnNpc3RlbmNlX3R5cGU6ICdsb2NhbCcsXHJcbn07XHJcblxyXG5EYXNoSW50ZXJhY3RpdmVHcmFwaHZpei5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIC8qKlxyXG4gICAgICogW1BlbmRpbmcgRGVwcmVjYXRpb25dIFRoZSBJRCBvZiB0aGUgc2VsZWN0ZWQgbm9kZS5cclxuICAgICAqIFBsZWFzZSB1c2Ugc2VsZWN0ZWRfbm9kZSAob3Igc2VsZWN0ZWRfZWRnZSBmb3IgZWRnZXMpXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgb2YgdGhlIHNlbGVjdGVkIG5vZGUuIFxyXG4gICAgICovXHJcbiAgICBzZWxlY3RlZF9ub2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgb2YgdGhlIHNlbGVjdGVkIGVkZ2UuXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdGVkX2VkZ2U6IFByb3BUeXBlcy5zdHJpbmcsICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZG90IGxhbmd1YWdlIHNvdXJjZSBvZiB0aGUgZ3JhcGhcclxuICAgICAqL1xyXG4gICAgZG90X3NvdXJjZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIC8qKlxyXG4gICAgICogU3R5bGluZyB0byBiZSBhcHBsaWVkIHRvIHRoZSBncmFwaCBjb250YWluZXIuIFlvdSBtYXkgd2FudCB0byBjaGFuZ2VcclxuICAgICAqIHlvdXIgZ3JhcGh2aXogYmFja2dyb3VuZCB0byB0cmFuc3BhcmVudC5cclxuICAgICAqL1xyXG4gICAgZW5naW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2VzIHRoZSBsYXlvdXQgZW5naW5lLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21hZ2phYy9kMy1ncmFwaHZpeiNncmFwaHZpel9lbmdpbmVcclxuICAgICAqIGZvciBtb3JlIGluZm9ybWF0aW9uXHJcbiAgICAgKi9cclxuICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3R5bGUgb2YgdGhlIGZpdCBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIGZpdF9idXR0b25fc3R5bGU6IFByb3BUeXBlcy5hbnksXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGZpdCBidXR0b24sIGJ5IGRlZmF1bHQgaXQgaXMgYW4gc21hbGwgc3F1YXJlIHVuaWNvZGUgY2hhcmFjdGVyLlxyXG4gICAgICovXHJcbiAgICBmaXRfYnV0dG9uX2NvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWxsb3cgdXNlciBpbnRlcmFjdGlvbnMgaW4gdGhpcyBjb21wb25lbnQgdG8gYmUgcGVyc2lzdGVkIHdoZW5cclxuICAgICAqIHRoZSBjb21wb25lbnQgLSBvciB0aGUgcGFnZSAtIGlzIHJlZnJlc2hlZC4gSWYgYHBlcnNpc3RlZGAgaXMgdHJ1dGh5IGFuZFxyXG4gICAgICogaGFzbid0IGNoYW5nZWQgZnJvbSBpdHMgcHJldmlvdXMgdmFsdWUsIGEgYHZhbHVlYCB0aGF0IHRoZSB1c2VyIGhhc1xyXG4gICAgICogY2hhbmdlZCB3aGlsZSB1c2luZyB0aGUgYXBwIHdpbGwga2VlcCB0aGF0IGNoYW5nZSwgYXMgbG9uZyBhc1xyXG4gICAgICogdGhlIG5ldyBgdmFsdWVgIGFsc28gbWF0Y2hlcyB3aGF0IHdhcyBnaXZlbiBvcmlnaW5hbGx5LlxyXG4gICAgICogVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBwZXJzaXN0ZW5jZV90eXBlYC5cclxuICAgICAqL1xyXG4gICAgcGVyc2lzdGVuY2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIF0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvcGVydGllcyB3aG9zZSB1c2VyIGludGVyYWN0aW9ucyB3aWxsIHBlcnNpc3QgYWZ0ZXIgcmVmcmVzaGluZyB0aGVcclxuICAgICAqIGNvbXBvbmVudCBvciB0aGUgcGFnZS4gU2luY2Ugb25seSBgdmFsdWVgIGlzIGFsbG93ZWQgdGhpcyBwcm9wIGNhblxyXG4gICAgICogbm9ybWFsbHkgYmUgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgcGVyc2lzdGVkX3Byb3BzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMub25lT2YoWydzZWxlY3RlZCcsICdzZWxlY3RlZF9ub2RlJyAsJ3NlbGVjdGVkX2VkZ2UnICwnZG90X3NvdXJjZScsICdlbmdpbmUnXSlcclxuICAgICksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVyZSBwZXJzaXN0ZWQgdXNlciBjaGFuZ2VzIHdpbGwgYmUgc3RvcmVkOlxyXG4gICAgICogbWVtb3J5OiBvbmx5IGtlcHQgaW4gbWVtb3J5LCByZXNldCBvbiBwYWdlIHJlZnJlc2guXHJcbiAgICAgKiBsb2NhbDogd2luZG93LmxvY2FsU3RvcmFnZSwgZGF0YSBpcyBrZXB0IGFmdGVyIHRoZSBicm93c2VyIHF1aXQuXHJcbiAgICAgKiBzZXNzaW9uOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UsIGRhdGEgaXMgY2xlYXJlZCBvbmNlIHRoZSBicm93c2VyIHF1aXQuXHJcbiAgICAgKi9cclxuICAgIHBlcnNpc3RlbmNlX3R5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2xvY2FsJywgJ3Nlc3Npb24nLCAnbWVtb3J5J10pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNpemUoe1xyXG4gICAgbW9uaXRvckhlaWdodDogdHJ1ZSxcclxuICAgIHJlZnJlc2hNb2RlOiAnZGVib3VuY2UnLFxyXG4gICAgcmVmcmVzaFJhdGU6IDEwMCxcclxufSkoRGFzaEludGVyYWN0aXZlR3JhcGh2aXopO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9