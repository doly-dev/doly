import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledRow = styled.div `

`;

export default class Button extends React.Component{
    // static propTypes = {
    //     gutter: PropTypes.number,
    //     justify: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
    //     align: PropTypes.oneOf(['top', 'center', 'bottom'])
    // }

    render(){
        return(
            <a href="#">按钮</a>
        )
    }
}
