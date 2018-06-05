import React from 'react'
import PropTypes from 'prop-types'

import styled, {css} from 'styled-components'

import createTag from '../utils/createTag'

// TODO ThemeProvider

const ButtonTag = createTag({
    tag: 'button',
    propsToOmit: ['fill', 'round', 'active', 'size', 'inline', 'color', 'disabled']
});

const isWhiteColor = (color)=>{
    return color === 'white' || color === '#fff' || color === '#ffffff';
}

const blackColor = '#000',
    whiteColor = '#fff';

const disabledCss = css `
    opacity: .4;

    &:active{
        opacity: .4;
    }
`;

const StyledButton = styled(ButtonTag) `
    position: relative;
    outline: 0 none;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;
    border: 0 none;
    padding: 0 15px;

    ${props=>{
        // 处理按钮内联、尺寸、不填充、圆角、颜色等样式
        let bgColor = props.color,
            color = whiteColor,
            height = '44px',
            fontSize = '18px',
            width = '100%',
            display = 'block',
            round = ((typeof props.round === 'number' && props.round >=0) ? props.round : 5) + 'px';

        if(props.inline){
            display = 'inline-block';
            width = 'auto';
        }

        if(props.size && props.size === 'small'){
            fontSize = '14px';
            height = '30px';
        }

        if(props.fill){
            if(isWhiteColor(props.color)){
                bgColor = whiteColor;
                color = blackColor;
            }
        }else{
            bgColor = 'transparent';
            color = props.color;
        }

        return [
            'background:' + bgColor,
            'color:' + color,
            'height:' + height,
            'line-height:' + height,
            'font-size:' + fontSize,
            'width:' + width,
            'display:' + display,
            'border-radius:' + round
        ].join(';')
    }}

    &:active{
        opacity: 0.7;
    }

    &::after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 200%;
        border: 1px solid #ddd;
        border-radius: 10px;
        transform-origin: 0 0;
        transform: scale(.5);
        box-sizing: border-box;
        pointer-events: none;
    }

    ${props => {
        // 处理边框颜色和圆角
        let _afterStyle = '';
        let round = (((typeof props.round === 'number' && props.round >=0) ? props.round : 5)*2) + 'px';

        _afterStyle = '&::after{ border-color:' + props.color + '; border-radius: ' + round + ';}';

        return _afterStyle;
    }}

    ${props=>props.disabled ? disabledCss : ''}

`;

export default class Button extends React.Component{
    static propTypes = {
        size: PropTypes.oneOf(['small', 'large']),
        color: PropTypes.string,
        round: PropTypes.number,
        fill: PropTypes.bool,
        active: PropTypes.bool,
        inline: PropTypes.bool,
        disabled: PropTypes.bool,
        as: PropTypes.string
    }

    static defaultProps = {
        size: 'large',
        color: 'white',
        round: 5,
        active: false,
        fill: true,
        inline: false
    }

    render(){
        return(
            <StyledButton {...this.props} />
        )
    }
}
