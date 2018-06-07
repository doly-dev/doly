import React from 'react'
import ReactDom from 'react-dom'

import styled, {injectGlobal} from 'styled-components'

import FlexExample from './flex-example'
import ButtonExample from './button-example'
import GridExample from './grid-example'
import IconExample from './icon-example'


class App extends React.Component {
    render(){
        return (
            <div>
                <div>a simple app examples preview.</div>
                
                <IconExample />
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));