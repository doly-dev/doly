import React from 'react'
import PropTypes from 'prop-types'
import {isNumber} from 'lodash'
import styled, {css} from 'styled-components'

import { GlobalStyle } from '../_style/common'
import createTag from '../_utils/createTag'

const inlineTag = createTag({
	tag: 'span',
	propsToOmit: ['dot', 'color', 'text', 'showZero', 'corner', 'overflowCount']
})

const dotCss = css `
	display: inline-block;
	font-size: 0;
	vertical-align: middle;
	height: 8px;
    width: 8px;
    border-radius: 100%;
    background: #ff3b30;
`;

const StyledBadgeDot = styled.span `
    ${dotCss}
`;

const StyledBadgeText = styled.span `
	display: inline-block;
	color: #fff;
	background: #ff3b30;
	box-sizing: border-box;
    text-align: center;
    font-size: 10px;
    line-height: 16px;
    height: 16px;
    border-radius: 16px;
    padding: 0 4px;
    min-width: 16px;
    font-family: -apple-system,SF UI Text,Helvetica Neue,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;
`;

const StyledCorner = styled.span `
    display: inline-block;
    width: 36px;
    padding: 0 13px;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    background: #ff3b30;
    position: absolute;
    top: 26px;
    right: 0px;
    transform: rotate(45deg);
    transform-origin: right bottom;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const StyledCornerWrapper = styled.span`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    min-width: 44px;
    min-height: 44px;
    overflow: hidden;
`;

const StyledPositionWrapper = styled.span `
	position: relative;
	display: inline-block;
	vertical-align: middle;

	${StyledBadgeText}, ${StyledBadgeDot}{
		position: absolute;
	    transform: translateX(-50%);
        left: 100%;
	    top: -4px;
	    z-index: 10;
	}

	${StyledBadgeText}{
		top: -8px;
	}
`;


/**
 * children是否为空
 * @param  {[type]}  children [description]
 * @return {Boolean}          [description]
 */
function hasChildren(children) {
	if(!children || (typeof children === 'string' && !children.trim())){
		return false;
	}else{
		return true;
	}
}

export default class Badge extends React.Component{

	static propTypes = {
		dot: PropTypes.bool,
		color: PropTypes.string,
		text: PropTypes.oneOfType([
			PropTypes.string,
    		PropTypes.number
		]),
		showZero: PropTypes.bool,
		corner: PropTypes.bool,
		overflowCount: PropTypes.number
	}

	static defaultProps = {
		dot: false,
		// color: '#ff3b30',
		corner: false,
		overflowCount: 99
	}

    render(){

    	const {
    		dot,
    		color,
    		text,
    		showZero,
            corner,
    		overflowCount,
    		children,
    		...rest
    	} = this.props;

    	const _hasChildren = hasChildren(children);

    	let _view = null;
        let styles = color ? {background: color} : {};

		if(dot){
			_view = <StyledBadgeDot style={styles} {...rest} />
		}else if(typeof text !== 'undefined'){
            let str = text;

            if(isNumber(text)){
                if(text > overflowCount){
                    str = `${overflowCount}+`;
                }else if(text === 0 && !showZero){
                    str = null;
                }
            }

            if(typeof str === 'number' || str){
                _view = corner ? <StyledCorner style={styles} {...rest}>{str}</StyledCorner> : <StyledBadgeText style={styles} {...rest}>{str}</StyledBadgeText>
            }
		}

        if(!_view){
            return <React.Fragment>{children}</React.Fragment>
        }

        if(corner && !dot){
            return <StyledCornerWrapper>{children}{_view}</StyledCornerWrapper>
        }else{
            if(_hasChildren){
                return <StyledPositionWrapper>{children}{_view}</StyledPositionWrapper>
            }else{
                return _view
            }
        }
    }
}
