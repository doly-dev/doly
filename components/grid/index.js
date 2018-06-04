import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledRow = styled.div `
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;
    width: 100%;
`;

const StyledCol = styled.div `
    box-sizing: border-box;
    flex: 1;
    margin-left: ${props=>props.gutter || 0}px;
    
    ${props=>(typeof props.order === 'number') ? 'order:' + props.order + ';' : ''}
    ${props=>(typeof props.span === 'number') ? 'flex:' + props.span + ';' : ''}

    &:first-child{
        margin-left: 0;
    }
`;

const GutterContext = React.createContext(0);
const {Provider, Consumer} = GutterContext;

export class Col extends React.Component{
    static propTypes = {
        order: PropTypes.number,
        span: PropTypes.number
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
        const {gutter, justify, align, ...rest} = this.props;

        return(
            <Provider value={gutter || 0}>
                <StyledRow {...rest} />
            </Provider>
        )
    }
}
