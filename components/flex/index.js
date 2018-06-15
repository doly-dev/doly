import '../_style/common'
import createTag from '../_utils/createTag'

import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const FlexTag = createTag({
    tag: 'div',
    propsToOmit: ['gutter', 'justify', 'align']
});
const FlexItemTag = createTag({
    tag: 'div',
    propsToOmit: ['gutter', 'order', 'span', 'width', 'align']
});

const justifyMap = {
    start: 'flex-start',
    end: 'flex-end'
}

const alignMap = {
    top: 'flex-start',
    bottom: 'flex-end'
}

const StyledFlex = styled(FlexTag) `
    display: flex;
    box-sizing: border-box;
    width: 100%;

    ${props=> props.align ? 'align-items:' + (alignMap[props.align] || props.align) + ';' : ''}
    ${props=> props.justify ? 'justify-content:' + (justifyMap[props.justify] || props.justify) + ';' : ''}
`;

const StyledFlexItem = styled(FlexItemTag) `
    box-sizing: border-box;
    flex-shrink: 1;

    ${props=>{
        let _st = '';

        let basis = '0%',
            grow = props.span || 1;

        if(props.width){
            if(typeof props.width === 'number'){
                basis = props.width + 'px';
                grow = 0;
            }else if(typeof props.width === 'string' && (props.width.indexOf('px') > -1 || props.width.indexOf('%') > -1)){
                basis = props.width;
                grow = 0;
            }
        }

        _st += `flex-basis:${basis};flex-grow:${grow};`;

        if(props.order){
            _st += `order:${props.order};`;
        }

        if(props.align){
            _st += `align-self:${(alignMap[props.align] || props.align)};`;
        }

        if(props.gutter){
            if(typeof props.gutter === 'number'){
                _st += `
                    margin-left:${props.gutter}px;
                    &:first-child{ margin-left: 0; }
                `;
            }else if(typeof props.gutter === 'string' && (props.gutter.indexOf('px') > -1 || props.gutter.indexOf('%') > -1)){
                _st += `
                    margin-left:${props.gutter};
                    &:first-child{ margin-left: 0; }
                `;
            }
        }

        return _st;
    }}
`;

const GutterContext = React.createContext(0);
const {Provider, Consumer} = GutterContext;

export class FlexItem extends React.Component{
    static propTypes = {
        gutter: PropTypes.number,
        order: PropTypes.number,
        span: PropTypes.number,
        width: PropTypes.string,
        align: PropTypes.oneOf(['top', 'center', 'bottom'])
    }

    static defaultProps = {
        span: 1
    }

    render(){
        return (
            <Consumer>
                {gutter=> <StyledFlexItem gutter={gutter} {...this.props} />}
            </Consumer>
        )
    }
}

export class Flex extends React.Component{
    static propTypes = {
        gutter: PropTypes.number,
        justify: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
        align: PropTypes.oneOf(['top', 'center', 'bottom'])
    }

    render(){
        const {gutter, ...rest} = this.props;

        return(
            <Provider value={gutter || 0}>
                <StyledFlex {...rest} />
            </Provider>
        )
    }
}
