import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const justifyMap = {
    start: 'flex-start',
    end: 'flex-end'
}

const alignMap = {
    top: 'flex-start',
    bottom: 'flex-end'
}

const StyledRow = styled.div `
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;
    width: 100%;

    ${props=>{
        let _st = '';

        if(props.align){
            _st += 'align-items:' + (alignMap[props.align] || props.align) + ';';
        }

        if(props.justify){
            _st += 'justify-content:' + (justifyMap[props.justify] || props.justify) + ';';
        }

        return _st;

    }}
`;

const StyledCol = styled.div `
    box-sizing: border-box;

    ${props=>{
        let _st = '';

        if(props.span){
            if(typeof props.span === 'number'){
                _st += 'width:' + props.span + 'px;';
            }else if(props.span.indexOf('px') > -1 || props.span.indexOf('%') > -1){
                _st += 'width:' + props.span + ';';
            // }else if(props.span.indexOf('%') > -1){
            //     _st += 'flex:0 1 ' + props.span + ';';
            }else{
                _st += 'flex: 1;';
            }
        }else{
            _st += 'flex: 1;';
        }

        if(props.order){
            _st += 'order:' + props.order + ';';
        }

        if(props.align){
            _st += 'align-self:' + (alignMap[props.align] || props.align) + ';';
        }

        if(props.gutter){
            if(typeof props.gutter === 'number'){
                _st += 'margin-left: ' + props.gutter + 'px;';
                _st += '&:first-child{ margin-left: 0; }';
            }else if(typeof props.gutter === 'string' && (props.gutter.indexOf('px') > -1 || props.gutter.indexOf('%') > -1)){
                _st += 'margin-left: ' + props.gutter + ';';
                _st += '&:first-child{ margin-left: 0; }';
            }
        }

        return _st;
    }}
`;

const GutterContext = React.createContext(0);
const {Provider, Consumer} = GutterContext;

export class Col extends React.Component{
    static propTypes = {
        order: PropTypes.number,
        span: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        align: PropTypes.oneOf(['top', 'center', 'bottom'])
    }

    render(){
        return (
            <Consumer>
                {gutter=> <StyledCol gutter={gutter} {...this.props} />}
            </Consumer>
        )
    }
}

export class Row extends React.Component{
    static propTypes = {
        gutter: PropTypes.number,
        justify: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
        align: PropTypes.oneOf(['top', 'center', 'bottom'])
    }

    render(){
        const {gutter, ...rest} = this.props;

        return(
            <Provider value={gutter || 0}>
                <StyledRow {...rest} />
            </Provider>
        )
    }
}
