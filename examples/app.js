import React from 'react'
import ReactDom from 'react-dom'

import styled, {injectGlobal} from 'styled-components'

import {Row, Col} from '../components/grid'

injectGlobal`
    
`;

const StyledGridDemo = styled.div`
    .row{
        margin-bottom: 10px;

        &:last-child{
            margin-bottom: 0;
        }

        div{
            border: 1px solid #000;
            background: #fff;
            color: #000;
            text-align: center;
        }
    }
`;


class App extends React.Component {
    render(){
        return (
            <div>
                <div>a simple app examples preview.</div>
                <StyledGridDemo>
                    <h3>Grid</h3>
                    <Row className="row">
                        <Col>12</Col>
                    </Row>
                    <Row className="row">
                        <Col>6</Col>
                        <Col>6</Col>
                    </Row>
                    <Row className="row">
                        <Col>4</Col>
                        <Col>4</Col>
                        <Col>4</Col>
                    </Row>
                    <Row gutter={10} className="row">
                        <Col>3</Col>
                        <Col>3</Col>
                        <Col>3</Col>
                        <Col>3</Col>
                    </Row>
                    <Row className="row">
                        <Col>2</Col>
                        <Col>2</Col>
                        <Col>2</Col>
                        <Col>2</Col>
                        <Col>2</Col>
                        <Col>2</Col>
                    </Row>
                    <Row gutter={5} className="row">
                        <Col>1</Col>
                        <Col>1</Col>
                        <Col gutter={20} order={2}>10</Col>
                        <Col span={3}>1</Col>
                        <Col>1</Col>
                        <Col>1</Col>
                        <Col>1</Col>
                        <Col>1</Col>
                        <Col>1</Col>
                        <Col>1</Col>
                    </Row>
                </StyledGridDemo>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));