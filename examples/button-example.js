import React from 'react'

import styled, {injectGlobal} from 'styled-components'

import Icon from '../components/icon'
import Button from '../components/button'

injectGlobal`
    body{
        background: #f5f5f5;
    }
    blockquote{
        font-size: 12px;
        color: #999;
    }

    table{
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;
        border: 1px solid #ebedf0;
        width: 100%;
        margin: 8px 0 16px;
        font-size: 14px;
        line-height: 1.5;
        color: #314659;
        background: #fff;

        th, td{
            border: 1px solid #ebedf0;
            padding: 16px 24px;
            text-align: left;
        }

        th{
            white-space: nowrap;
            color: #5c6b77;
            font-weight: 500;
            background: rgba(0,0,0,.02);
        }

        td{
            font-weight: 500;
            width: 20%;
            font-family: Lucida Console,Consolas,Menlo,Courier,monospace;
        }
    }
`;

const StyledDemo = styled.div`
    button{
        margin-bottom: 5px;
    }
`;

const colors = {
    blue: '#007aff',
    red: '#ff3b30',
    yellow: '#fc0',
    black: '#000'
}

export default class Example extends React.Component {
    render(){
        return (
            <div>
                <h2>Button</h2>
                <StyledDemo>
                    <h3>基础</h3>
                    <Button>默认按钮</Button>
                    <h3>尺寸</h3>
                    <blockquote>size</blockquote>
                    <Button size="small">small按钮</Button>
                    <Button>default按钮</Button>
                    <h3>颜色</h3>
                    <blockquote>color</blockquote>
                    <Button color={colors.blue}>按钮</Button>
                    <Button color={colors.red}>按钮</Button>
                    <Button size="small" color={colors.yellow}>按钮</Button>
                    <Button size="small" color={colors.black}>按钮</Button>
                    <h3>不填充</h3>
                    <blockquote>fill</blockquote>
                    <Button fill={false} color={colors.blue}>按钮</Button>
                    <Button size="small" fill={false} color={colors.red}>按钮</Button>
                    <h3>内联</h3>
                    <blockquote>inline</blockquote>
                    <Button inline fill={false} color={colors.blue}>按钮</Button>
                    <Button inline color={colors.red}>按钮</Button>
                    <Button inline fill={false} size="small" color={colors.yellow}>按钮</Button>
                    <Button inline size="small" color={colors.black}>按钮</Button>
                    <h3>圆角</h3>
                    <blockquote>round</blockquote>
                    <Button round={0} color={colors.blue}>按钮22</Button>
                    <Button round={20} color={colors.red}>按钮22</Button>
                    <h3>禁用</h3>
                    <blockquote>disabled</blockquote>
                    <Button disabled fill={false} color={colors.blue}>按钮</Button>
                    <Button disabled color={colors.red}>按钮</Button>
                    <Button disabled fill={false} inline size="small" color={colors.blue}>按钮</Button>
                    <Button disabled inline size="small" color={colors.red}>按钮</Button>
                    <h3>图标</h3>
                    <blockquote>icon</blockquote>
                    <Button icon={
                        <Icon type="loading" color="#f9f9f9"/>
                    } color={colors.blue}>loading</Button>
                    <Button icon={
                        <Icon type="loading" color="#f9f9f9"/>
                    } color={colors.blue} disabled>loading</Button>
                    <Button icon="wait" inline>等待中</Button>
                    {
                        /*<Button icon={
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />
                        } inline>loading</Button>*/
                    }
                    <Button icon="wait" size="small" inline>等待中</Button>

                    <h3>API</h3>
                    <h4>Button</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>大小，仅支持 small</td>
                                <td>string</td>
                                <td>large</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td>颜色</td>
                                <td>string</td>
                                <td>white</td>
                            </tr>
                            <tr>
                                <td>fill</td>
                                <td>填充</td>
                                <td>boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>inline</td>
                                <td>内联</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>round</td>
                                <td>圆角</td>
                                <td>number</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>禁用</td>
                                <td>boolean</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>图标</td>
                                <td>string/Element</td>
                                <td>Icon内置图标 或 自定义Icon/Img</td>
                            </tr>
                        </tbody>
                    </table>
                </StyledDemo>
            </div>
        )
    }
}
