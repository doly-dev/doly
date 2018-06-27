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
                    <blockquote>dot</blockquote>
                    <Badge dot/>
                    <br/>
                    <Badge dot>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'block' }} />
                    </Badge>
                    <br/>
                    <Badge dot>
                        <span>消息</span>
                    </Badge>
                    <h3>数字</h3>
                    <blockquote>text: number <br/>showZero 为0时是否显示</blockquote>
                    <Badge text={0} showZero={true}/>
                    <Badge text={1}/>
                    <br/>
                    <Badge text={100}/>
                    <br/>
                    <br/>
                    <Badge text={100}>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'block' }} />
                    </Badge>
                    <br/>
                    <br/>
                    <Badge text={1000} overflowCount={999}>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'block' }} />
                    </Badge>
                    <h3>文本</h3>
                    <blockquote>text: string</blockquote>
                    <Badge text={'HOT'}/>
                    <Badge text={'new'}/>
                    <Badge text={'减'}/>
                    <br/>
                    <br/>
                    <Badge text={'优惠'}>
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'block' }} />
                    </Badge>
                    <h3>置于角落</h3>
                    <blockquote>corner，最小宽高为44px</blockquote>
                    <Badge text={'热门'} corner />
                    <Badge text={'折扣'} corner>
                        <span style={{ width: '126px', height: '56px', background: '#ddd', display: 'block' }} />
                    </Badge>
                    <h3>颜色</h3>
                    <blockquote>color</blockquote>
                    <Badge dot color="purple" />
                    <Badge text={77} overflowCount={55} corner color="black" />
                    <Badge text={77} overflowCount={55} color="green">
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'block' }} />
                    </Badge>
                    <Badge text={'促'} corner color="blue"/>
                    <Badge text={'促'} color="orange">
                        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'block' }} />
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
                                <td>dot</td>
                                <td>不展示数字或文案，只有一个小红点</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>text</td>
                                <td>展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 {`\$\{overflowCount\}+`}，为 0 时隐藏</td>
                                <td>string|number</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>overflowCount</td>
                                <td>展示封顶的数字值</td>
                                <td>number</td>
                                <td>99</td>
                            </tr>
                            <tr>
                                <td>showZero</td>
                                <td>当数值为 0 时，是否展示 Badge</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td>Badge 背景颜色</td>
                                <td>string</td>
                                <td>#ff3b30</td>
                            </tr>
                            <tr>
                                <td>corner</td>
                                <td>置于角落</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                        </tbody>
                    </table>
                </StyledDemo>
            </div>
        )
    }
}
