'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Row = exports.Col = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: flex;\n    flex-flow: row wrap;\n    box-sizing: border-box;\n    width: 100%;\n'], ['\n    display: flex;\n    flex-flow: row wrap;\n    box-sizing: border-box;\n    width: 100%;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    box-sizing: border-box;\n    flex: 1;\n    margin-left: ', 'px;\n\n    &:first-child{\n        margin-left: 0;\n    }\n'], ['\n    box-sizing: border-box;\n    flex: 1;\n    margin-left: ', 'px;\n\n    &:first-child{\n        margin-left: 0;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledRow = _styledComponents2.default.div(_templateObject);

var StyledCol = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.gutter || 0;
});

var GutterContext = _react2.default.createContext(0);
var Provider = GutterContext.Provider,
    Consumer = GutterContext.Consumer;

var Col = exports.Col = function (_React$Component) {
    (0, _inherits3.default)(Col, _React$Component);

    function Col() {
        (0, _classCallCheck3.default)(this, Col);
        return (0, _possibleConstructorReturn3.default)(this, (Col.__proto__ || (0, _getPrototypeOf2.default)(Col)).apply(this, arguments));
    }

    (0, _createClass3.default)(Col, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                Consumer,
                null,
                function (gutter) {
                    return _react2.default.createElement(StyledCol, (0, _extends3.default)({ gutter: gutter }, _this2.props));
                }
            );
        }
    }]);
    return Col;
}(_react2.default.Component);

Col.propTypes = {
    order: _propTypes2.default.number,
    span: _propTypes2.default.number
};

var Row = exports.Row = function (_React$Component2) {
    (0, _inherits3.default)(Row, _React$Component2);

    function Row() {
        (0, _classCallCheck3.default)(this, Row);
        return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).apply(this, arguments));
    }

    (0, _createClass3.default)(Row, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                gutter = _props.gutter,
                justify = _props.justify,
                align = _props.align,
                rest = (0, _objectWithoutProperties3.default)(_props, ['gutter', 'justify', 'align']);


            return _react2.default.createElement(
                Provider,
                { value: gutter || 0 },
                _react2.default.createElement(StyledRow, rest)
            );
        }
    }]);
    return Row;
}(_react2.default.Component);

Row.propTypes = {
    gutter: _propTypes2.default.number,
    justify: _propTypes2.default.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
    align: _propTypes2.default.oneOf(['top', 'center', 'bottom'])
};