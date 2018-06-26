import React from 'react'

import styled from 'styled-components'

import './style'
import Badge from '../components/badge'


const StyledDemo = styled.div`
    
`;

export default class Example extends React.Component {
    render(){
        return (
            <div>
                <h2>Badge</h2>
                <StyledDemo>
                    <h3>小红点</h3>
                    <Badge dot/>
                    <br/>
                    <Badge dot>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                    </Badge>
                    <br/>
                    <Badge dot>
                        <span>消息</span>
                    </Badge>
                    <h3>数字</h3>
                    <Badge text={1}/>
                    <br/>
                    <Badge text={100}/>
                    <br/>
                    <br/>
                    <Badge text={100}>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                    </Badge>
                    <br/>
                    <br/>
                    <Badge text={1000} overflowCount={999}>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                    </Badge>
                    <h3>文本</h3>
                    <Badge text={'HOT'}/>
                    <Badge text={'new'}/>
                    <Badge text={'减'}/>
                    <br/>
                    <br/>
                    <Badge text={'优惠'}>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                    </Badge>
                    <h3>置于角落</h3>
                    <Badge text={'促'} corner>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                    </Badge>
                    <h3>颜色</h3>
                    <Badge dot color="#f96268" />
                    <Badge text={77} overflowCount={55} color="#f96268" />
                    <Badge text={77} overflowCount={55} color="#f96268">
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                    </Badge>
                    <Badge text={'促'} corner color="#f96268">
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                    </Badge>
                    <Badge text={'促'} color="#f96268">
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                    </Badge>

                    <h3>API</h3>
                    <h4>Badge</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </StyledDemo>
            </div>
        )
    }
}
