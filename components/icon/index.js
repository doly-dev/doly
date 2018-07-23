import '../_style/common'
import createTag from '../_utils/createTag'

import React from 'react'
import PropTypes from 'prop-types'

import styled, {css, keyframes} from 'styled-components'
import loadSprite from './loadSprite'

const sizeMap = {
    xxs: '15px',
    xs: '18px',
    sm: '21px',
    md: '22px',
    lg: '36px'
};

const svgTag = createTag({
    tag: 'svg',
    propsToOmit: ['type', 'size', 'color']
});

const rotate360 = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

const rotateCss = css`
    animation: ${rotate360} 1s steps(12,end) infinite;
`;

const StyledIcon = styled(svgTag) `
    display: inline-block;
    fill: currentColor;
    background-size: cover;
    vertical-align: middle;

    width: ${props=>sizeMap[props.size]};
    height: ${props=>sizeMap[props.size]};

    ${props=>props.type === 'loading' ? rotateCss : ''}
`;

export default class Icon extends React.Component{
    static propTypes = {
        type: PropTypes.string.isRequired,
        color: PropTypes.string,
        size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg']),
        style: PropTypes.object
    }

    static defaultProps = {
        size: 'md'
        // color: '#000'
    }

    componentWillMount() {
        loadSprite();
    }

    render(){
        const {
            type,
            color,
            style,
            ...rest
        } = this.props;

        const colorStyle = color ? {color: color} : {};
        const styles = style ? {...colorStyle, ...style} : colorStyle;

        return(
            <StyledIcon {...this.props} style={styles}>
                <use xlinkHref={`#${type}`} />
            </StyledIcon>
        )
    }
}
