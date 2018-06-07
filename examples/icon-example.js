import React from 'react'

import styled, {injectGlobal} from 'styled-components'

import Icon from '../components/icon'
import Grid from '../components/grid'

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
    
`;

const icons = [
    'search',
    'ellipsis',
    'check',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'chevron-down',
    'close',
    'close-round',
    'close-round-fill',
    'info',
    'info-fill',
    'help',
    'help-fill',
    'wait',
    'wait-fill',
    'check-round',
    'check-round-fill',
    'loading'
];

const colorIcon = [
    'search',
    'wait',
    'wait-fill',
    'loading'
];

const sizeMap = ['xxs', 'xs', 'sm', 'md', 'lg'];
const colorMap = ['red', 'blue', 'green', 'pink'];

const data1 = icons.map((icon)=>{
    return {
        icon: <Icon type={icon} />,
        text: icon
    }
});
const data2 = colorMap.map((color)=>{
    return colorIcon.map((icon)=>{
        return {
            icon: <Icon type={icon} color={color} />,
            text: icon
        }
    })
}).reduce((prevVal, nextVal)=>prevVal.concat(nextVal), []);

const data3 = sizeMap.map((size)=>{
    return {
        icon: <Icon type={icons[0]} size={size} />,
        text: size
    }
});

export default class Example extends React.Component {
    render(){
        return (
            <div>
                <h2>Icon</h2>
                <StyledDemo>
                    <h3>基础</h3>
                    <blockquote>内置icon</blockquote>
                    <Grid data={data1} columnNum={4} />
                    <h3>颜色</h3>
                    <blockquote>color</blockquote>
                    <Grid data={data2} columnNum={4} square={false} />
                    <h3>尺寸</h3>
                    <blockquote>size</blockquote>
                    <Grid data={data3} columnNum={5} square={false} hasLine={false} />

                    <h3>API</h3>
                    <h4>Icon</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>内存icon名称</td>
                                <td>string</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td>图标颜色</td>
                                <td>Color</td>
                                <td>'#000'</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>图标大小</td>
                                <td>'xxs'/'xs'/'sm'/'md'/'lg'</td>
                                <td>md</td>
                            </tr>
                        </tbody>
                    </table>
                </StyledDemo>
            </div>
        )
    }
}
