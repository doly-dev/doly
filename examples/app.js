import React from 'react'
import ReactDom from 'react-dom'

import styled, {injectGlobal} from 'styled-components'

import FlexExample from './flex-example'
import ButtonExample from './button-example'
import GridExample from './grid-example'
import IconExample from './icon-example'
import SwitchExample from './switch-example'
import BadgeExample from './badge-example'
import Portal01Example from './portal01-example'
import Portal02Example from './portal02-example'
import Portal03Example from './portal03-example'
import Portal04Example from './portal03-example'
import TransitionExample from './transition-example'

class App extends React.Component {
    render(){
        return (
            <div>
                <div>a simple app examples preview.</div>

                {
                    // <FlexExample />
                    // <ButtonExample />
                    // <GridExample />
                    // <IconExample />
                    // <SwitchExample />
                    // <BadgeExample />
                    // <Portal01Example />
                    // <Portal02Example />
                    // <Portal03Example />
                    // <Portal04Example />
                    <TransitionExample />
                }
                
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));