import '../_style/common'
import createTag from '../_utils/createTag'

import React from 'react'
import PropTypes from 'prop-types'

import styled, {css} from 'styled-components'

const StyleWrapper = styled.span `
	position: relative;
	display: inline-block;
	line-height: 1;
	vertical-align: middle;
`;

const StyleBadge = styled.span `
	font-size: 12px;
	color: #fff;
`;

const StyleBadgeDot = styled.span `
	position: absolute;
    transform: translateX(-50%);
    transform-origin: 0 center;
    top: -4px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background: #ff5b05;
    z-index: 10;
`;

export default class Badge extends React.Component{

	static propTypes = {
		color: PropTypes.string
	}

	static defaultProps = {
		color: '#ff3b30'
	}

    render(){

    	const {
    		count,
    		children,
    		...rest
    	} = this.props;

    	if(React.isValidElement(children)){
    		console.log(1, children);
    	}else{
    		console.log(0, children);
    	}

        return(
            <StyleWrapper>
            	{children}
				<StyleBadgeDot>{count}</StyleBadgeDot>
            </StyleWrapper>
        )
    }
}
