import React from 'react'
import PropTypes from 'prop-types'

import styled, {css, keyframes} from 'styled-components'
import loadSprite from './loadSprite'
import createTag from '../utils/createTag'

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
    display: block;
    fill: currentColor;
    background-size: cover;

    width: ${props=>sizeMap[props.size]};
    height: ${props=>sizeMap[props.size]};

    ${props=>props.type === 'loading' ? rotateCss : ''}
`;

export default class Icon extends React.Component{
    static propTypes = {
        type: PropTypes.string.isRequired,
        color: PropTypes.string,
        size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg'])
    }

    static defaultProps = {
        size: 'md',
        color: '#000'
    }

    componentWillMount() {
        loadSprite();
    }

    render(){
        const {
            type,
            color,
            ...rest
        } = this.props;

        let style = color ? {color: color} : {};

        return(
            <StyledIcon style={style} {...this.props}>
                <use xlinkHref={`#${type}`} />
            </StyledIcon>
        )
    }
}
