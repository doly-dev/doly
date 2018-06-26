import React from 'react'
import PropTypes from 'prop-types'
import {isNumber} from 'lodash'
import styled, {css} from 'styled-components'

import '../_style/common'
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

const StyledPositionWrapper = styled.span `
	position: relative;
	display: inline-block;
	line-height: 1;
	vertical-align: middle;

	${StyledBadgeText}, ${StyledBadgeDot}{
		position: absolute;
	    transform: translateX(-50%);
	    transform-origin: 0 center;
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
		color: '#ff3b30',
		corner: false,
		overflowCount: 99
	}

	getTextView(){
		const {text, overflowCount, showZero, color} = this.props;

		let str = text;

		if(isNumber(text)){
			if(text > overflowCount){
				str = `${overflowCount}+`;
			}else if(text === 0 && !showZero){
				str = '';
			}
		}

		if(!str){
			return null;
		}

		return <StyledBadgeText>{str}</StyledBadgeText>
	}

    render(){

    	const {
    		dot,
    		color,
    		text,
    		showZero,
    		overflowCount,
    		children,
    		...rest
    	} = this.props;

    	const _hasChildren = hasChildren(children);

    	if(React.isValidElement(children)){
    		console.log(1, _hasChildren);
    	}else{
    		console.log(0, _hasChildren);
    	}

    	let _view = null;

		if(dot){
			_view = <StyledBadgeDot color={color} />
		}else if(text){
			_view = this.getTextView();
		}

		if(_hasChildren){
			return <StyledPositionWrapper>{children}{_view}</StyledPositionWrapper>
		}else{
			return _view
		}

        return(
            <StyledPositionWrapper>
            	{children}
				<StyledBadgeDot>{text}</StyledBadgeDot>
            </StyledPositionWrapper>
        )
    }
}
