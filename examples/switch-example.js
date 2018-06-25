import React from 'react'

import styled from 'styled-components'

import './style'
import Switch from '../components/switch'

const StyledDemo = styled.div`
    
`;

export default class Example extends React.Component {

    state={
        s1_checked: true
    }
    
    handleChange=checked=>{
        console.log('change', checked);
    }

    render(){
        const {
            s1_checked
        } = this.state;

        return (
            <div>
                <h2>Switch</h2>
                <StyledDemo>
                    <h3>Off</h3>
                    <Switch onChange={this.handleChange} />
                    <h3>On</h3>
                    <Switch checked={s1_checked} onChange={(checked)=>{
                        this.setState({
                            s1_checked: checked
                        })
                        this.handleChange(checked)
                    }} />
                    <h3>Disabled off</h3>
                    <Switch disabled />
                    <h3>Disabled on</h3>
                    <Switch defaultChecked disabled />
                    <h3>Style for Android</h3>
                    <Switch defaultChecked platform="android" disabled />
                    <h3>Color for Android</h3>
                    <Switch defaultChecked platform="android" color="red" />
                    <h3>Style for iOS</h3>
                    <Switch defaultChecked />
                    <h3>Color for iOS</h3>
                    <Switch defaultChecked color="red" />

                    <h3>API</h3>
                    <h4>Switch</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                            <tr>
                                <td>checked</td>
                                <td>是否选中。如果有该属性，需结合onChange使用</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>defaultChecked</td>
                                <td>默认是否选中。如果有checked, 以checked为准。主要用于不设置checked的情况，通过onChange获取值。</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>是否不可修改</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>change 事件触发的回调函数</td>
                                <td>function (checked: boolean)</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td>开关打开后的颜色</td>
                                <td>string</td>
                                <td>#4dd865</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>switch的name</td>
                                <td>string</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>platform</td>
                                <td>设定组件的平台特有样式, 可选值为 android, ios， 默认为 ios</td>
                                <td>string</td>
                                <td>ios</td>
                            </tr>
                        </tbody>
                    </table>
                </StyledDemo>
            </div>
        )
    }
}
