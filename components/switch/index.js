import '../_style/common'
import createTag from '../_utils/createTag'

import React from 'react'
import PropTypes from 'prop-types'

import styled, {css} from 'styled-components'

const StyleSwitch = styled.div `

`;

export default class Icon extends React.Component{
    static propTypes = {
        // type: PropTypes.string.isRequired
    }

    static defaultProps = {
    }

    render(){
        return(
            <StyleSwitch>
                switch 123
            </StyleSwitch>
        )
    }
}
